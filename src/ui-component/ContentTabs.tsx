import { useEffect, useState } from 'react';

// material-ui
import { Divider, IconButton, Tab, Tabs } from '@mui/material';

// project imports
import { StringParam, useQueryParam } from '@/hooks/useQueryParam';

// assets
import { Close } from '@mui/icons-material';

// ==============================|| CONTENT TABS ||============================== //

type Tab = { id: string; label: string; content: React.ReactNode };

interface ContentTabsProps {
  tabs: Tab[];
}

const ContentTabs = (props: ContentTabsProps) => {
  const [tabs, setTabs] = useState<Tab[]>(props.tabs);
  const [selected, setSelected] = useQueryParam('tab', StringParam, props.tabs[0].id);

  useEffect(() => {
    setTabs((prevTabs) => prevTabs.map((tab) => props.tabs.find((t) => t.id === tab.id) || tab));
  }, [props.tabs]);

  const handleClick = (_event: React.SyntheticEvent, newKey: string) => {
    setSelected(newKey);
  };

  const handleRemove = (event: React.SyntheticEvent, removeKey: string) => {
    event.stopPropagation();

    // Removing the current tab, set the key to the next/previous tab
    if (selected === removeKey) {
      const removeIndex = tabs.findIndex((tab) => tab.id === removeKey);
      const goToTab = tabs[removeIndex + 1] || tabs[removeIndex - 1];
      setSelected(goToTab?.id ?? null);
    }

    setTabs(tabs.filter((tab) => tab.id !== removeKey));
  };

  return (
    <>
      <Tabs value={selected} onChange={handleClick} variant="scrollable">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={
              <span>
                {tab.label}

                {/* We can enable close button, if we want */}
                {false && (
                  <IconButton
                    component="div"
                    tabIndex={-1}
                    size="small"
                    onClick={(event) => handleRemove(event, tab.id)}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      zIndex: 1,
                      padding: '4px'
                    }}
                  >
                    <Close sx={{ fontSize: '0.8rem' }} />
                  </IconButton>
                )}
              </span>
            }
            {...a11yProps(tab.id)}
          />
        ))}
      </Tabs>
      <Divider />
      {tabs.find((tab) => tab.id === selected)?.content}
    </>
  );
};

const a11yProps = (id: string) => ({
  id: `content-tab-${id}`,
  'aria-controls': `content-tabpanel-${id}`,
  tabIndex: 0
});

export default ContentTabs;

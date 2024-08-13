import React from 'react';

// material-ui
import { Box, Divider, Grid, GridProps, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';

// assets
import { IconArrowNarrowUp } from '@tabler/icons-react';

// ==============================|| HOME PAGE ||============================== //

const HomePage = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        width: 'auto',
        mx: -3,
        '& > .MuiGrid-item': { p: 3 }
      }}
    >
      <Grid item xs={12} md={6} lg={8}>
        <GraphCard
          header="Pågående uppdrag"
          sub={
            <>
              <span style={{ color: 'green' }}>
                <IconArrowNarrowUp size={16} style={{ verticalAlign: 'middle' }} />
                2.1%
              </span>{' '}
              mot samma månad 2023
            </>
          }
          lastUpdated="Senast uppdaterad: 2024-02-26"
        />
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ mr: '-1px', display: { xs: 'none', md: 'block' } }} />
      <Grid item xs={12} md={6} lg={4}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Att göra
        </Typography>
        <List sx={{ listStyle: 'decimal', pl: 2 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Maila angående pitchen på Ölglaset 5"
              primaryTypographyProps={{
                style: { color: theme.palette.text.secondary, textDecoration: 'line-through' }
              }}
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Färdigställ prospekt för Påsen 2"
              primaryTypographyProps={{ style: { color: theme.palette.text.secondary } }}
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Ring Christopher angående en eventuell försäljning på Södermalm"
              primaryTypographyProps={{ style: { color: theme.palette.text.secondary } }}
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ mb: 1 }}>
          Anteckningar
        </Typography>
        <Typography variant="body2">Klicka på en anteckning för att se mer.</Typography>
      </Grid>
    </Grid>
  );
};

interface GraphCardProps extends GridProps {
  header: string;
  sub?: React.ReactNode;
  lastUpdated?: string;
}

const GraphCard = ({ header, sub, lastUpdated, ...rest }: GraphCardProps) => (
  <>
    <Grid container justifyContent="space-between" alignItems="baseline" spacing={1} {...rest}>
      <Grid item>
        <Typography variant="body1">{header}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{sub}</Typography>
      </Grid>
      <Grid item flexGrow={1} />
      <Grid item>
        <Typography variant="body2">{lastUpdated}</Typography>
      </Grid>
    </Grid>
    <Box
      sx={{
        mt: 1,
        borderRadius: '20px',
        bgcolor: 'grey.50',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 1
      }}
    >
      <Typography variant="body1">Placeholder</Typography>
    </Box>
  </>
);

export default HomePage;

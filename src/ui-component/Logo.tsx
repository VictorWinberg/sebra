import { useState } from 'react';

// material-ui
import { Stack, Typography, useTheme } from '@mui/material';

// assets
import { IconBuildingCommunity, IconSearch } from '@tabler/icons-react';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconBuildingCommunity
        color="white"
        fill={theme.palette.primary.main}
        size={32}
        stroke={1.5}
        style={{ transition: 'all .2s ease-in-out' }}
      />
      <IconSearch
        size={64}
        stroke={0.8}
        style={{
          color: theme.palette.primary.main,
          transition: 'all .2s ease-in-out',
          position: 'absolute',
          bottom: -17,
          left: -11,
          margin: 0
        }}
      />
      <Typography
        variant="h2"
        sx={{
          transition: 'all .2s ease-in-out',
          color: isHovered ? theme.palette.primary.main : theme.palette.primary.dark
        }}
      >
        sebra
      </Typography>
    </Stack>
  );
};

export default Logo;

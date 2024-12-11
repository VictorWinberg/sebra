import { useState } from 'react';

// material-ui
import { Stack, Typography, useTheme } from '@mui/material';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      style={{ position: 'relative' }}
      direction="row"
      alignItems="center"
      spacing={1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

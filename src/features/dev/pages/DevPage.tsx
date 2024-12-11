import { Link } from 'react-router-dom';

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const links = [
  { path: 'dev/graph-page', label: 'Graph Page' },
  { path: 'dev/util-typography', label: 'Typography Page' },
  { path: 'dev/util-color', label: 'Color Page' },
  { path: 'dev/util-shadow', label: 'Shadow Page' },
  { path: 'dev/sample-page', label: 'Sample Page' }
];

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        {links.map((link) => (
          <Grid item xs={12} sm={6} md={4} key={link.path}>
            <Link to={`/${link.path}`} style={{ textDecoration: 'none', display: 'block' }}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'primary.light',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary.main">
                    {link.label}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Explore the {link.label}.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;

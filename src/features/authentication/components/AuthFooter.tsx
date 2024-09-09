// material-ui
import { Link, Stack, Typography } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="/" underline="hover">
      Hem
    </Typography>
    <Typography variant="subtitle2" component={Link} href="/" underline="hover">
      &copy; sebra CRM
    </Typography>
  </Stack>
);

export default AuthFooter;

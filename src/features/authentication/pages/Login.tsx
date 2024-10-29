import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Button, Divider, Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';

// project imports
import Logo from '@/ui-component/Logo';
import AuthFooter from '../components/AuthFooter';
import AuthWrapper from '../components/wrapper/AuthWrapper';
import AuthCardWrapper from '../components/wrapper/AuthCardWrapper';
import AuthLogin from '../components/auth-forms/AuthLogin';
import AnimateButton from '@/ui-component/extended/AnimateButton';
import { useAppStore } from '@/store';
import { SET_DEMO } from '@/store/actions';

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const [, dispatch] = useAppStore();
  const navigate = useNavigate();
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#" aria-label="logo">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={{ xs: 'column-reverse', md: 'row' }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color="primary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                            Hej, välkommen tillbaka
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                            Logga in för att fortsätta
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="large"
                        variant="outlined"
                        sx={{ textTransform: 'none' }}
                        onClick={() => {
                          dispatch({ type: SET_DEMO, payload: true });
                          navigate('/');
                        }}
                      >
                        Prova vår demo
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;

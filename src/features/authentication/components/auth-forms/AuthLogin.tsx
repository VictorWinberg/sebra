import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// third party
import { useForm } from 'react-hook-form';

// project imports
import AnimateButton from '@/ui-component/extended/AnimateButton';
import { useAuthLogin } from '../../hooks/useAuthMutations';

// assets
import Google from '@/assets/images/icons/social-google.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ============================|| FIREBASE - LOGIN ||============================ //

type Auth = {
  email: string;
  password: string;
};

const AuthLogin = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<Auth>();
  const { mutate: loginUser } = useAuthLogin();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  const handleLogin = async (auth: Auth) => {
    loginUser(auth, {
      onSuccess: () => navigate('/'),
      onError: () => setError('password', { message: 'Ogiltig e-postadress eller lösenord' })
    });
  };

  return (
    <>
      {false && (
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                fullWidth
                onClick={console.log}
                size="large"
                variant="outlined"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                  <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                </Box>
                Sign in with Google
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

              <Button
                variant="outlined"
                sx={{
                  cursor: 'unset',
                  m: 2,
                  py: 0.5,
                  px: 7,
                  borderColor: `${theme.palette.grey[100]} !important`,
                  color: `${theme.palette.grey[900]}!important`,
                  fontWeight: 500,
                  borderRadius: '6px'
                }}
                disableRipple
                disabled
              >
                OR
              </Button>

              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </Box>
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="center">
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1">Sign in with Email address</Typography>
            </Box>
          </Grid>
        </Grid>
      )}

      <form noValidate onSubmit={handleSubmit(handleLogin)}>
        <FormControl fullWidth error={Boolean(errors.email)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-login">E-postadress / Användarnamn</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-login"
            type="email"
            label="E-postadress / Användarnamn"
            inputProps={{}}
            {...register('email', {
              required: 'Email krävs',
              pattern: { value: /^\S+@\S+$/i, message: 'Måste vara en giltig E-postadress' },
              maxLength: { value: 255, message: 'E-postadressen är för lång' }
            })}
          />
          {errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-login">Lösenord</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-login"
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: 'Lösenord krävs' })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Lösenord"
            inputProps={{}}
          />
          {errors.password && (
            <FormHelperText error id="standard-weight-helper-text-password-login">
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>
        {false && (
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                />
              }
              label="Kom ihåg mig"
            />
            <Typography variant="subtitle1" color="primary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              Glömt lösenord?
            </Typography>
          </Stack>
        )}
        {errors.root && (
          <Box sx={{ mt: 1 }}>
            <FormHelperText error>{errors.root.message}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
              Logga in
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default AuthLogin;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/sv';

// project imports
import NavigationScroll from '@/layout/NavigationScroll';
import StoreProvider from '@/store';
import theme from '@/theme';
import SnackbarProvider from '@/ui-component/SnackbarProvider';

// ==============================|| PROVIDERS ||============================== //

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <SnackbarProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme()}>
                <CssBaseline />
                <NavigationScroll>{children}</NavigationScroll>
              </ThemeProvider>
            </StyledEngineProvider>
          </LocalizationProvider>
        </SnackbarProvider>
      </StoreProvider>
      <ReactQueryDevtools initialIsOpen position="right" buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

export default Providers;

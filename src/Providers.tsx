import { useState } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// third-party
import * as Sentry from '@sentry/react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// project imports
import { useSnackbar } from '@/hooks/useSnackbar';
import NavigationScroll from '@/layout/NavigationScroll';
import StoreProvider from '@/store';
import theme from '@/theme';

// ==============================|| PROVIDERS ||============================== //

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const { showSnackbar } = useSnackbar();
  const [queryClient] = useState(() => {
    const handleError = (error: Error) => {
      console.error(error);
      Sentry.captureException(error);
      showSnackbar(error.message, 'error');
    };
    return new QueryClient({
      queryCache: new QueryCache({ onError: handleError }),
      mutationCache: new MutationCache({ onError: handleError }),
      defaultOptions: {
        queries: { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false, retry: 1 }
      }
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme()}>
              <CssBaseline />
              <NavigationScroll>{children}</NavigationScroll>
            </ThemeProvider>
          </StyledEngineProvider>
        </LocalizationProvider>
      </StoreProvider>
      <ReactQueryDevtools initialIsOpen position="right" buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

export default Providers;

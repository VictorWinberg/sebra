import { RouterProvider } from 'react-router-dom';

// project imports
import ErrorBoundary from '@/layout/ErrorBoundary';
import router from '@/routes';
import Providers from '../Providers';
import SnackbarProvider from './SnackbarProvider';

// ==============================|| APP ||============================== //

const App = () => {
  return (
    <ErrorBoundary name="App">
      <SnackbarProvider>
        <Providers>
          <RouterProvider router={router} />
        </Providers>
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

export default App;

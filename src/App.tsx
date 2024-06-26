import { RouterProvider } from 'react-router-dom';

// project imports
import ErrorBoundary from '@/layout/ErrorBoundary';
import router from '@/routes';
import Providers from './Providers';

// ==============================|| APP ||============================== //

const App = () => {
  return (
    <ErrorBoundary name="App">
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </ErrorBoundary>
  );
};

export default App;

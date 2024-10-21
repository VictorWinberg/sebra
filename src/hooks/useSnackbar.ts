import { useContext } from 'react';

import { SnackbarContext, SnackbarContextType } from '@/routes/SnackbarProvider';

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

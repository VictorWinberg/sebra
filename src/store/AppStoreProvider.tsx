import { FunctionComponent, PropsWithChildren, useReducer } from 'react';

import { AppContextReturningType, AppStoreContext } from './AppStore';
import AppStoreReducer from './AppStoreReducer';
import { INITIAL_APP_STORE_STATE } from './config';

const AppStoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const value: AppContextReturningType = useReducer(AppStoreReducer, INITIAL_APP_STORE_STATE);

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
};

export default AppStoreProvider;

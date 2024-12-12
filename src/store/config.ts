/**
 * Structure of the "State" in the AppStore
 */
export interface AppStoreState {
  opened: boolean;
}

/**
 * Initial values of the "State" in the AppStore
 */
export const INITIAL_APP_STORE_STATE: AppStoreState = {
  opened: false
};

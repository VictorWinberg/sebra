import * as actions from './actions';
import { AppStoreState } from './config';

export type AppStoreAction = {
  type: string;
  payload?: unknown;
};

/**
 * Reducer for global AppStore using "Redux styled" actions
 * @param {object} state - current/default state
 * @param {string} action.type - unique name of the action
 * @param {*} [action.payload] - optional data object or the function to get data object
 */
const AppStoreReducer: React.Reducer<AppStoreState, AppStoreAction> = (state, action) => {
  console.log('AppReducer() - action:', action);
  switch (action.type) {
    case actions.SET_MENU: {
      return {
        ...state,
        opened: action.payload as boolean
      };
    }
    case actions.SET_DEMO: {
      return {
        ...state,
        isDemo: action.payload as boolean
      };
    }
    default:
      return state;
  }
};

export default AppStoreReducer;

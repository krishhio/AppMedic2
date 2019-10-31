import { createStore, combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { createHashHistory } from 'history';

import { settingsReducer } from './settings/reducer';
import { pageDataReducer } from './page-data/reducer';
import { patientsReducer } from './patients/reducer';

export const history = createHashHistory({
  hashType: 'slash'
});

const rootReducer = combineReducers({
  pageData: pageDataReducer,
  settings: settingsReducer,
  patients: patientsReducer,
  router: connectRouter(history)
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

import { combineReducers, legacy_createStore as createStore } from 'redux';
import loginReducer from './reducers/login';
import searchReducer from './reducers/search';

const rootReducer = combineReducers({
  login: loginReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
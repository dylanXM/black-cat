import { combineReducers, legacy_createStore as createStore } from 'redux';
import loginReducer from './reducers/login';
import searchReducer from './reducers/search';
import userReducer from './reducers/user';
import activityReducer from './reducers/activity';

const rootReducer = combineReducers({
  login: loginReducer,
  search: searchReducer,
  user: userReducer,
  activity: activityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
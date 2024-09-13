import { combineReducers, legacy_createStore as createStore } from 'redux';
import loginReducer from './reducers/login';

const rootReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
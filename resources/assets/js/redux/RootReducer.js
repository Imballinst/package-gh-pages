import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as Reducers from './Reducers';

const rootReducer = combineReducers({
  changeGlobalUIState: Reducers.changeGlobalUIState,
  changeGlobalDataState: Reducers.changeGlobalDataState,
  routing: routerReducer
});

export default rootReducer;


import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homeReducer from './Pages/Home/reducer';
import history from './utils/history';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        home: homeReducer,
        router: connectRouter(history),
        ...injectedReducers
    })
    return rootReducer;
}
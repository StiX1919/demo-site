import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'

import CCReducer from './ducks/CCReducer';
import userReducer from './ducks/userReducer'
import heroReducer from './ducks/heroReducer'
import monsterReducer from './ducks/monsterReducer'
import shopReducer from './ducks/shopReducer'
import mapReducer from './ducks/mapReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
    combineReducers({CCReducer, userReducer, heroReducer, monsterReducer, shopReducer, mapReducer}), composeWithDevTools(applyMiddleware(promiseMiddleware())))
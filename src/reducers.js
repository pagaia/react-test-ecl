import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {todoApp} from './index-redux';

export default (history) => combineReducers({
  router: connectRouter(history),
  todoApp // rest of your reducers
})

import {  combineReducers } from 'redux';
import UserReducer from './Reducers/UserReducer';
const rootReducer = combineReducers({
    nickname: UserReducer,
   
  
})
export default rootReducer;
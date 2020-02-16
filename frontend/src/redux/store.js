import { combineReducers } from 'redux';
import UserReducer from './Reducers/UserReducer';
import MessageReducer from './Reducers/MessageReducer';

const rootReducer = combineReducers({
    nickname: UserReducer,
    message: MessageReducer


})
export default rootReducer;
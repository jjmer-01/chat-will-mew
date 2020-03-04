import {createStore} from 'redux';
import userReducer from './userReducer';
import { applyMiddleware } from 'redux';


export default createStore(userReducer, applyMiddleware())

import counterreducer from "./Counterreducer";
import {combineReducers} from 'redux'


const rootreducer = combineReducers ({
    counter: counterreducer
})
export default rootreducer                                                             
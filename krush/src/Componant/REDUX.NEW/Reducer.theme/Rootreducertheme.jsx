import reducertheme from "./reducer-theme";
import {combineReducers} from "redux"







const rootreducer = combineReducers ({
    theme: reducertheme
})
export default rootreducer  
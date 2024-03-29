import rootreducer from "./Rootreducer";
import {configureStore} from '@reduxjs/toolkit'



const Store =  configureStore({ reducer: rootreducer})


export default Store;
import rootreducer from './Rootreducertheme';
import {configureStore} from '@reduxjs/toolkit'



const Stores =  configureStore({ reducer: rootreducer})


export default Stores;
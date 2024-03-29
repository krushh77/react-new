import React from "react";
import { INCREMENT, DICREMENT} from "../Redux/Actin.js/Counteraction";
import { useDispatch, useSelector} from 'react-redux'
 


const Counterredux = () => {
    const dispatch = useDispatch()

    const counter = useSelector((state) => state.counter.counter)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(INCREMENT())}>+</button>
            {/* <button onClick={() => dispatch(DECREMENT())}>-</button> */}
            <button onClick={()=> dispatch(DICREMENT())}>-</button>
        </div>
    )

}
export default Counterredux
import { useState } from "react";

function Counter() {
    const initialprize = 1000;
    const [counter, setCounter] = useState(1)
    const [price, setprice] = useState(initialprize)
    function Increment() {
        // alert("Hii")
        if (counter < 10) {
            setCounter(prevValue => prevValue + 1);
            setprice(initialprize * (counter + 1))
        }
    }
    function Decrement() {
        if (counter > 1) {
            setCounter(prevValue => prevValue - 1)
            setprice(initialprize * (counter - 1))
        }
    }
    function Reset() {
        setCounter(0)
        setprice(initialprize)
    }
    return (
        <div>
            <h1>Counter - {counter} & price - {price}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Counter;
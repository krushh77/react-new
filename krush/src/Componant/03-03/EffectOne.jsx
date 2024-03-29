import { useEffect, useState } from "react"

function EffectOne() {
    const [counter, setCounter] = useState(1)
    const [counter2, setCounter2] = useState(2)

    useEffect(() => {
        console.log("Code exciuted!")
        alert("alert from use effect")
    })

    return (
        <div>
            <h1>Counter 1 : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
    )
}
export default EffectOne
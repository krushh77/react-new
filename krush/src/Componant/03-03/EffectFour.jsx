import React, { useEffect, useState } from 'react'

const EffectFour = () => {
    const [counter1, setCounter1] = useState(11)
    const [counter2, setCounter2] = useState(12)
    const [counter3, setCounter3] = useState(13)

    useEffect(() => {
        // console.log("Code exuccted.")
        alert("alert from use effect")
    }, [counter1, counter2, counter3])

    // useeffect will execute the code on insital/first render and 
    // when passed dependency changes 

    return (
        <div>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={() => setCounter1(counter1 + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
            <h1>Counter 3 : {counter2}</h1>
            <button onClick={() => setCounter3(counter3 + 1)}>+</button>
        </div>
    )
}

export default EffectFour
import { useEffect, useState } from "react";

function EffectTwo(){
    const [counter, setCounter] = useState(0);
function increment () {
    setCounter ((prevvalue)=> prevvalue+1)
}

useEffect (()=>{
    alert("alert from use effect")
}, [])

    return (
        <div>
            <h1>Useeffect two</h1>
            <h1>counter: {counter}</h1>
            <button onClick={increment}> + </button>
        </div>
    )
}
export default EffectTwo;

import React , { useReducer } from 'react'


const reducer = (state, action) => {

    

    switch (action.type) {
        case "INCREMENT": 
        return {...state, counter: state.counter + action.payload}
         case "DECREMENT":
        return {...state, counter: state.counter - 1}
        case "reset" :
        return {...state, counter: 0}
        default:
        return state
    }
    
}

const Initialstate = { counter: 1, counter2: 100 }



const UseReducer  = () => {

    const [state, dispatch] = useReducer(reducer, Initialstate)
    console.log(state, "state")
    // console.log(dispatch,"dispatch")

    function increment (){
        dispatch({type: "INCREMENT", payload:10})

    }
    function decrement (){
        dispatch({type: "DECREMENT"})
    }

    function reset (){
        dispatch({type: "reset"})
    }
    return ( 
        <div>
<h1>counter : {state.counter}</h1>

<button onClick={increment}>+</button>

<button onClick={decrement}>-</button>
<button onClick={reset}>reset</button>
        </div>
    )
 }
 export default UseReducer;
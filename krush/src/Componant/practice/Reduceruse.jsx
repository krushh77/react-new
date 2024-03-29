import React, { useReducer } from 'react'


const reducer = (state, action) => {

    switch (action.type){

        case "Increment" : 
        return {...state, counter: state.counter + 1}

        case  "Decrement" :
            return {...state, counter: state.counter - 1}
        
            case "reset" :
                return {...state, counter: 0}
                default :
        return state
        
    }

}


const Initialstate =  {counter: 1, couter2: 100}




const Reduceruse = () => {
    const [state, dispatch] = useReducer(reducer, Initialstate)


function increment (){
    dispatch({type: "Increment" })
}
function decrement (){
    dispatch({type: "Decrement" })
}
function reset (){
    dispatch({type: "reset" })
}

  return (
    <div>
       <h1>Reduce
        ruse</h1>
        <h2>conter {state.counter}</h2>
        <button onClick={increment}>+</button> 
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        
        
        </div>
  )
}

export default Reduceruse
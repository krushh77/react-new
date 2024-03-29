import { useMemo, useState } from "react";
import Counter from "../02-03/Counter";

const Usememo = () => {
    const [counter, setcounter] = useState(1)
    const [todos, settodos]  = useState([])



function addtodo (){
    settodos ([...todos, "new todo"])
}


const lenthycalculation = useMemo (() => Expensivecalculation(counter), [counter])




return (


    <div>

         <h1>expensivecalculation : {lenthycalculation} </h1>
         <h1>counter: {counter}</h1>
         <button onClick={()=> setcounter (counter + 1)}>+</button>
         <button onClick={ addtodo}>addtodo</button>
         
         {todos.map((todo)=> (

             <h1>{todo}</h1>
         ))}

    </div>
)


}



function Expensivecalculation (number){

    for( var i= 0; i < 10000000; i++){

        number += 1;

    }
    return number;

}
export default Usememo
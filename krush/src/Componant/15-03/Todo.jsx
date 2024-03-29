import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    console.log(todo, "todo")
    console.log(todos, "todos")

    function HandleChange(event) {
        setTodo(event.target.value)
    }

    function HandleSubmit() {
        setTodos([...todos, todo])
        setTodo("")
    }
    function deleteTodo(idx) {
        todos.splice(idx, 1);
        setTodos([...todos]);
    
        
      }


    return (
        <div>
            <h3>Adding Todo - NAMES</h3>
            <input value={todo} onChange={HandleChange} type='text' placeholder='Names' />
            <button onClick={HandleSubmit}>Submit</button>
            {todos.length ? <div>
                <h2>Your Todos :</h2>
                {todos.map((todo, i) => (
                  
                    <p>
                    {i + 1}. {todo}
                    <button onClick={() => deleteTodo(i)}>delete</button>
                  </p>
                ))}
            </div> : <h1>No todos found.</h1>}
        </div>
    )
}

export default Todo
import { useState } from "react";

function App() {
const [todo,setTodo]=useState([]);

  function clickHandler(){

    let inputElement= document.getElementById('todoInput');
    let newTodo= inputElement.value;
    setTodo(todo.concat(newTodo)); // or setTodo([...todo,newTodo])
    inputElement.value='';

  }
  return (
    <>
    <h2>Daily work list</h2>
    <input type="text" id='todoInput' placeholder="Enter your todo list" />
    <button onClick={clickHandler}>ADD</button>

    <ul>
        {
          todo.map(
            (todos,index)=> <li key={index}> {todos}</li>
          )
        }
    </ul>
    
    </>

  );
}

export default App;

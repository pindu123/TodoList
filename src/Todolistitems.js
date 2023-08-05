import React from 'react'
import './App.css';
import { useState } from 'react';
import Pic from './images/img.png'
import img from './images/img2.png'
const Todolistitems=({todos,setTodos})=> {
    const [count, setCount] = useState(0);

    const handleDelete=({id})=>
    {
setTodos(todos.filter((todo)=>todo.id!==id))
    }
   const handleComplete=(event)=>{
    setCount((prevCount) => prevCount + 1);
    console.log(count);
}
    
     
   
  return (
    <div>
        <div>
            <p>completed:{count}</p>
        </div>
    {todos.map((todo) =>(
        <li className="todo-list" key={todo.id} >
            <input type="text" value={todo.title} className="list" onChange={(event)=> event.preventDefault()} />
            <button className="task-complete"  onClick={()=>handleComplete()}><img src={img}/></button> 
    
            <button className="delete-complete" onClick={()=>handleDelete(todo)}><img  src={Pic}/></button>
             
            </li>))}
    </div>
  )
}

export default Todolistitems

 import React from 'react'
  
import './App.css';
 import {v4 as uuidv4} from "uuid";
const form=({input,setInput,todos,setTodos})=> {
    const onInputChange=(event)=>
    {
        setInput(event.target.value)
    };
     const onFormsubmit=(event)=>{
        event.preventDefault();
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
         setInput("");
    }
   return (
     <div>
         <form onSubmit={onFormsubmit}>
            <input type="text" placeholder="enter a task" value={input} required onChange={onInputChange} className='in'/>
            <button type='submit' className='add'>ADD</button>
        </form>
     </div>
   )
 }
 
 export default form
 
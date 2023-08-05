 
import './App.css';
import Form from './form';
import { useState } from 'react';
import Todolistitems from './Todolistitems';
function App() {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
    <h1>MY TO DO List</h1>
   <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
   <div>
     <Todolistitems todos={todos} setTodos={setTodos}/>
      </div>
    </div>
    
  );
}

export default App;

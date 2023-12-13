import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";


export default function App(){
 
  
  let[tasks,setTasks] = useState([]);
  let addTodo = (newtext) =>{
    setTasks(prevtasks =>{
  return[
    ...prevtasks,
    {content :newtext,
    Done:false
    }
  ]
    })
  }

return (

  <div className="md:w-1/2 w-full mx-auto border-2 border-black mt-3 rounded p-5 text-center bg-red-300">
    <Form add={addTodo}></Form>
    <List></List>
  </div>
)

}
import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";


const TopForm = ()=>{
    const[task , setTask] = useState("");
    const {taskItem , setTaskItem} = useContext(TaskContext);

   const handleSetTask = (e)=>{
       setTask(e.target.value)
   }

   const handleAddTaskItem = (event)=>{
       event.preventDefault();
       setTaskItem([...taskItem , {id : Math.random() , title : task , done : false}])
       setTask("")
   }

    return(
        <>
        <div className = "main">
            <form>
                <h2>سلام به وب سایت من خوش آمدید</h2>
                   <div className = "box-input">
                      <input className = "top-input" type = "text" placeholder = "چیزی بنویسید"
                      value = {task} onChange = {handleSetTask}></input>
                      <button className = "top-btn" onClick = {handleAddTaskItem}>ثبت</button> 
                   </div>
            </form>
        </div>
           
        </>
    )
}

export default TopForm;
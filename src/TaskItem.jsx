import { useContext } from "react";
import { TaskContext } from "./TaskContext";


const TaskItem = ()=>{
    const {taskItem , setTaskItem} = useContext(TaskContext);

    const handleSetDonTask = (id)=>{
        const index = taskItem.findIndex(t=>t.id === id)
        let newTaskItem = [...taskItem]
        newTaskItem[index].done = !newTaskItem[index].done;
        setTaskItem(newTaskItem)
    }

    const handleDeletTask = (id)=>{
        let newTask = taskItem.filter(t=>t.id != id)
        setTaskItem(newTask)
    }
    

if(taskItem.length){
    return(
        <>
            <form className = "taskForm">
                <ul className = "ul"> 
                {taskItem.map(t=>(
                     <li className = {`taskItem ${t.done ? "enter-Item" : ""} `}>{t.title}<span>
                     <i className = "fas fa-trash" onClick = {()=>handleDeletTask(t.id)}></i>
                     <i className = {`${t.done ? "fas fa-times" : "fas fa-check"}`}
                      onClick = {()=>handleSetDonTask(t.id)}></i>
                     </span></li>
                ))}       
                </ul> 
            </form>
        </>
    )
}else{
    return(
            <h3 className = "massege">هیچ کاری ثبت نشده است ...!</h3> 
        
            
    )
}
}

export default TaskItem;
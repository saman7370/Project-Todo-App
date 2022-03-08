import { createContext } from "react";


export const TaskContext = createContext({
    taskItem : [],
    setTaskItem : ()=>{}
})
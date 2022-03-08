import { useState } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';
import TopForm from './TopForm';

const App = ()=>{
    const[taskItem , setTaskItem] = useState([
        {
            id : 1,
            title : "کار شماره 1",
            done : false
        },
        {
            id : 2,
            title : "کار شماره 2",
            done : true
        },
        {
            id : 3,
            title : "کار شماره 3",
            done : false
        }
    ])
    return(
        <>
        <TaskContext.Provider value = {{
            taskItem,
            setTaskItem
        }}>
           <TopForm/>
           <TaskItem/>
        </TaskContext.Provider>
        </>
    )
}

export default App;
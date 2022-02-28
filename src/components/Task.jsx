import React from 'react';
// Icones
import {CgClose, CgInfo, CgPen} from 'react-icons/cg';
// Navegação
import {useHistory} from 'react-router-dom';

import './Task.css';

const Task = ({task,handdleTaskClick,handdleRemoveTask, editar, setEditar, setinputData}) =>{
    const history = useHistory();

    const handleTaskDetailsClick = () =>{
        history.push(`/${task.title}`)
    }

    const handleEditTaskClick = (taskID) => {
        setEditar(() => {
          return {shouldEdit:true, taskID}  
        }); 
        
        setinputData(task.title);        
    }
    
   

    return(
        <>
           <div className="task-container" 
           style={task.completed ? {borderLeft: "6px solid chartreuse", textDecoration: 'line-through'} : {}}>
                <div className='task-title' onClick={() => handdleTaskClick(task.id)}>
                    {task.title}
                </div>

                <div className="buttons-container">
                    <button style={{cursor:'pointer'}} className="see-task-details-button"   onClick={() => handleEditTaskClick(task.id)}><CgPen/></button>
                    <button style={{cursor:'pointer'}} className="see-task-details-button"  onClick={handleTaskDetailsClick}><CgInfo/></button>
                    <button style={{cursor:'pointer'}} className="remove-task-button" onClick={() => handdleRemoveTask(task.id)}><CgClose/></button>                   
                </div>
               
           </div>
        </>
    )
}

export default Task;
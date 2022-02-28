import React from 'react';

import Button from './Button';
import './AddTask.css';

const AddTask = ({task, setTask, hangleTaskAddition, editar, setEditar, inputData, setinputData}) =>{
 
    
    const handleInputChange = (e) =>{
       setinputData(e.target.value); 
    }

  
    const handdleAddTaskClick = () =>{
        !!inputData &&  hangleTaskAddition(inputData);
         setinputData('');
    }

    const handleEditTaskClick = () => {
        setEditar((edit) => {
            return {...edit, shouldEdit:false}
        });
        const selectTask = task.findIndex(task => task.id === editar.taskID);
        const newTasks = [...task]
        newTasks[selectTask] = {...newTasks[selectTask], title: inputData}
        setTask(newTasks);   
        setinputData('');
    }
   
  
    return(
        <div className='add-task-container'>
                <input className="add-task-input" type="text" value={inputData} onChange={handleInputChange}/>
            <div className="add-task-button-container">
                {editar.shouldEdit ? <Button  onClick={handleEditTaskClick}>Editar</Button> : <Button  onClick={handdleAddTaskClick}>Adicionar</Button>}
                
            </div>
        </div>
    )
}

export default AddTask;
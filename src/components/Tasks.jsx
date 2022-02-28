import React from 'react';

import Task from './Task';

const Tasks = ({tasks, handdleTaskClick,handdleRemoveTask, editar, setEditar, setinputData}) =>{
    return(
        <>
           
            {tasks.map(task => <Task key={tasks.id} setinputData={setinputData} task={task}  handdleTaskClick={handdleTaskClick} handdleRemoveTask={handdleRemoveTask} editar={editar} setEditar={setEditar}/>)}
        </>
    )
}

export default Tasks;
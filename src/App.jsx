import React, {useEffect, useState} from 'react';
// Consumir API
import axios from 'axios';
// Gerador de id
import {v4 as uuidv4} from 'uuid';
// Rotas
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import './App.css';


const App = () => {
    const [task,setTask] = useState([
      {
        id: "1",
        title: "Estudar Programação",
        completed: false,
      },
      {
        id: "2",
        title: "Ler Livros",
        completed: true,
      },
      {
        id: "3",
        title: "Estudar React",
        completed: false,
      }
    ]);

    // Input onde e digitado e editado as tarefas
    const[inputData, setinputData] = useState('');

    // Editar o 
    const [editar, setEditar] = useState({
      shouldEdit : false,
      taskID : 0 
    });
    
    // Chamando uma API
    useEffect(()=>{
        const fecthTasks = async () =>{
          const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
          setTask(data);
        }
        fecthTasks();
    },[])

    // Alterando o completed do state task
    const handdleTaskClick = (taskId) =>{
      const newTasks = task.map(task => {
        if(task.id === taskId) return{...task, completed: !task.completed}
        return task;
      })

      setTask(newTasks);
    }

  
    // Adicionando itens no state task
    const hangleTaskAddition = (taskTittle)  =>{
        const newTasks = [...task,{
          title: taskTittle,
          id: uuidv4(),
          completed:false,
        }]
        setTask(newTasks);
    }

    // Removendo itens do state task
    const handdleRemoveTask = (taskId) =>{
      // Primeiro modo encontrar a posição e depois excluir no método splice e atualizar o state
        // const position = task.findIndex(x=>x.id == taskId);
        // const newTask = [...task];
        // newTask.splice(position,1);
        
      // Segundo modo, fazer um filtro passando a igualdade , se for diferente do que está procurando ele vai mostrar todos. 
        const newTask = task.filter(task=> task.id !== taskId);

        setTask(newTask);

    }

  return(
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" exact render={() =>(
          <>
            <AddTask hangleTaskAddition={hangleTaskAddition} task={task} setTask={setTask} inputData={inputData} setinputData={setinputData} editar={editar} setEditar={setEditar}/>

            <Tasks setinputData={setinputData} editar={editar} setEditar={setEditar} tasks={task} handdleTaskClick={handdleTaskClick} handdleRemoveTask={handdleRemoveTask}  />
          
          </>
        )}/>

        <Route path="/:taskTitle" exact component={TaskDetails}/>
        
      </div>
    </Router>
  )
}

export default App;
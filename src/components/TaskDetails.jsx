import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () =>{
    // Serve para pegar o que vem na url (:teste)
    const params = useParams();

    // Serve para fazer navegações nas páginas
    const history = useHistory();
    // Função que faz voltar a página anterior
    const handleBackButtonClick = () =>{
        history.goBack();
    }

    return(
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi explicabo quia culpa dicta odit debitis dolorem ab beatae optio voluptatum. Quisquam eius ipsa aspernatur consequuntur. Impedit non veniam quod alias?</p>
            </div>
        </>
    )
}

export default TaskDetails;
import React from 'react';
import './TodoCounter.css';




function TodoCounter({ completedTodos,totalTodos, loading}) {
 
    return (
        <h2 
          className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has completado <span>{completedTodos} </span> 
            de <span>{totalTodos}</span> TODOS
        </h2>
    );
  }


  export { TodoCounter };
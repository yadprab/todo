import React,{useContext} from 'react'
import {Timer} from './Timer';
import {TodoTask} from './Input';
 const Todo=()=> {
  const todo= useContext(TodoTask)
  

    return (
      <>
        <section className="todo--section">
          <h3 className="emp">{todo.t}</h3>
          <p className='completed'>completed</p>
        </section>
        {todo.timer&&<Timer /> }
      </>
    );
}

export { Todo}

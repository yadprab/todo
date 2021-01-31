import React, { useReducer, useState } from 'react'
import { Table } from "./Table";

import {Todo} from './Todo';
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'todo':
     return{
         ...currentState,
         todos:[...currentState.todos, action.payLoad],
         state:!currentState.state,
     }
        default:
            return currentState
    }
    
}
const initialState = {
    todos:[],
    state:false
}
const Input=()=> {
    const [todo, setTodo] = useState('');
    const [state, dispatch]= useReducer(reducer, initialState);

    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const handleSubmit = (e) => {

        e.preventDefault();


        if (todo==='') {

            alert('enter values');
            
        }

        dispatch({type:'todo', payLoad:todo});

        setTodo('');
        
    }
    return (
      <>
        <form action="" onSubmit={handleSubmit}>
          <section className="input--section">
            <input type="text" id="inp" value={todo} onChange={handleChange} />
            <button type="submit" id="submit">
              add tasks
            </button>
          </section>
        </form>
        <Table />
        {state.todos.map(t=>{
            return(
               <Todo todo={t} key={todo} state={state.state}/>
            )
        })}
      </>
    );
}

export {Input}

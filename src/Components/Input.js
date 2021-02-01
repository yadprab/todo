import React, { useReducer, useState } from 'react'
import { Table } from "./Table";

import {Todo} from './Todo';
import { v4 as uuidv4 } from "uuid";
export const TodoTask = React.createContext ();
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'todo':
     return{
         ...currentState,
         todos:[...currentState.todos, action.payLoad],
         state:true,
         
     }
        default:
            return currentState
    }
    
}
const initialState = {
  id:uuidv4(),
    todos:[],
    state:false
}
const Input=()=> {
    const [todo, setTodo] = useState('');

    const [timer, setTimer] = useState(false);
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
        setTimer(true);
       
    

     
        
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
            return (
              <TodoTask.Provider
                value={{ t, state: state.state, setTimer, timer }}
                key={state.id}
              >
                <Todo key={state.id} />
              </TodoTask.Provider>
            );
        })}
      </>
    );
}

export {Input}

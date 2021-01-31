import React from 'react'
import {Timer} from './Timer';
 const Todo=({todo, state})=> {
  
    return (
        <>
        <section className='todo--section'>
        <h3 className='emp'>{todo}</h3>
         <Timer state={state}/>
        </section>
            
        </>
    )
}

export { Todo}

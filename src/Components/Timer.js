import React, { useState, useRef, useEffect } from 'react'

const Timer=({state})=> {

    const [timer, setTimer] = useState(false);

    const [min, setMin] = useState(25);
    const [sec, setSec] = useState(00);
    
    return (
        <>
        <section className='timer--section'>
      {state?<p>{`${min}:${sec}`}</p>:''}
        </section>
            
        </>
    )
}

export {Timer}

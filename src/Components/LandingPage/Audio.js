import React, { useEffect, useRef } from 'react'

function Audio() {
    const ref = useRef(null);

    useEffect(() => {
      
        ref.current.play();
       
    },[])
    return (
      <>
        <audio ref={ref}>
          <source src="./alarm.mp3" type='audio/mp3' />
        </audio>
      </>
    );
}

export  {Audio}

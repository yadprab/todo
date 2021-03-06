import React, { useState, useContext, useEffect, useCallback } from "react";
import { dataContext } from "../Context";
function Timer() {
  const { Data, setData } = useContext(dataContext);

  const initialValue = 283
  const [Stroke, setStroke] = useState(initialValue);

   

  const timeFraction = useCallback(() => {
    if (!Data.pause) {
      return Data.min / 60 / (1500 / 60);
    }
  }, [Data.min, Data.pause]);

  const circleDasharray = useCallback(() => {
    const circle = `${(timeFraction() * 283).toFixed(0)} 283`;

    setStroke(circle);

  }, [timeFraction]);

  useEffect(() => {
      if (Data.reset) {
        setStroke(initialValue);
        
      }

      if (Data.min===0 || Data.min ===1500 ) {
         setStroke(initialValue);
        
      }
    if (!Data.pause) {

  
      const int = setInterval(() => {
        if (!Data.pause) {
          setData({
            ...Data,
            min: Data.min - 1,
           
          });
        }

     
        


        if (Data.min===0) {
          setData({
            ...Data,
            min:1500,

            pause:true,
            
          });
        
        
        }

        circleDasharray();
      }, 1000);

      return () => {
        clearInterval(int);
        
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data.min, Data.pause, Data.reset, circleDasharray]);
  return (
    <>
      <article className="timer--section">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle" fill="none" stroke="none">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
              strokeWidth="5px"
              stroke="#EFFCF1"
            />
            <path
              id="base-timer-path-remaining"
              strokeDasharray={Data.reset?initialValue:Stroke}
              strokeWidth="5px"
              
              strokeLinecap="round"
              className={`base-timer__path-remaining initial`}
              d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0
 a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>

        <p>
          {Data.min <= 0
            ? "0:00"
            : `${Math.floor(Data.min / 60)}:${("00" + (Data.min % 60)).slice(
                -2
              )}`}
        </p>
      </article>
    </>
  );
}

export { Timer };

import React, { useState, useEffect, useContext } from "react";
import { TodoTask } from "./Input";
const Timer = () => {
  const [min, setMin] = useState(1500);

  const [stroke, setStroke] = useState(283);

  const todo = useContext(TodoTask);

  const timeFraction = () => {
    return min / 60 / (1500 / 60);
  };
  const setCircleDasharray = () => {
    const circleDasharray = `${(timeFraction() * 283).toFixed(0)} 283`;
   

    setStroke(circleDasharray);
  };

  useEffect(() => {
    const init = setInterval(() => {
      if (todo.timer) {
        setMin((s) => s - 1);

        if (min === 0) {
          todo.setTimer(false);
          setMin(1500);
        }
      }
      setCircleDasharray();
    }, 1000);

    return () => {
      clearInterval(init);
    };
  });

  return (
    <>
      {todo.timer && (
        <section className="circle--section">
          <article>
            <h3 className="title">{todo.t}</h3>
          </article>
          <section className="base--timer">
            <svg
              className="base-timer__svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="base-timer__circle">
                <circle
                  className="base-timer__path-elapsed"
                  cx="50"
                  cy="50"
                  r="45"
                />
                <path
                  id="base-timer-path-remaining"
                  strokeDasharray={stroke}
                  className="base-timer__path-remaining"
                  d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0
 a 45,45 0 1,0 -90,0
        "
                ></path>
              </g>
            </svg>
            <p id="base-timer-label" className="base-timer__label">
              {min <= 0
                ? "0:00"
                : `${Math.floor(min / 60)}:${("00" + (min % 60)).slice(-2)}`}
            </p>
          </section>
          <section className="button--section">
            <button id="pauseButton" className="bt-text">
              pause
            </button>
            <button id="resetButton" className="bt-text">
              reset
            </button>
            <button id="breakButton" className="bt-text">
              break
            </button>
          </section>
        </section>
      )}
    </>
  );
};

export { Timer };

import React, { useState, useEffect, useContext } from "react";
import { TodoTask } from "./Input";
import { Break } from "./Break";
export const TimerData = React.createContext();
const Timer = () => {
  const colors = {
    blue: "#4A8BFF",
    red: "#cd5a57",
    dark: "#444b5b",
    short: "#8c65D3",
  };
  const [min, setMin] = useState(1500);

  const [stroke, setStroke] = useState(283);

  const [pause, setPaused] = useState(true);

  const [TakeBreak, setBreak] = useState(false);

  const [color, setColor] = useState(colors.blue);

  const todo = useContext(TodoTask);



  useEffect(() => {
      const timeFraction = () => {
        return min / 60 / (1500 / 60);
      };
    const setCircleDasharray = () => {
      const circleDasharray = `${(timeFraction() * 283).toFixed(0)} 283`;

      setStroke(circleDasharray);
    };
    const init = setInterval(() => {
      if (!pause) {
        setMin((s) => s - 1);

        if (min <= 300) {
          setColor(colors.red);
        }

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

  const pauseFn = () => {
    setPaused(true);
  };

  const startTimer = () => {
    setPaused(false);
  };
  const reset = () => {
    setPaused(true);
    setMin(1500);
    setColor(colors.blue);
  };

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
                  stroke={color}
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
          <section className="button--section ">
            <button
              id="pauseButton"
              className="bt-text"
              onClick={pause ? startTimer : pauseFn}
            >
              {pause ? "start" : "pause"}
            </button>
            <button id="resetButton" className="bt-text" onClick={reset}>
              reset
            </button>
            <button
              id="breakButton"
              className="bt-text"
              onClick={() => setBreak(true)}
            >
              break
            </button>
          </section>
          {TakeBreak && (
            <TimerData.Provider
              value={{
                TakeBreak,
                setBreak,
                min,
                setMin,
                pause,
                setPaused,
                colors,
                setColor,
                reset
              }}
            >
              <Break />
            </TimerData.Provider>
          )}
        </section>
      )}
    </>
  );
};

export { Timer };

import React from 'react'

function Timer() {
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
                strokeDasharray="200 283"
                strokeWidth="5px"
                stroke="#3DE654"
                strokeLinecap="round"
                className="base-timer__path-remaining"
                d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0
 a 45,45 0 1,0 -90,0
        "
              ></path>
            </g>
          </svg>

          <p>25:00</p>
        </article>
      </>
    );
}

export { Timer}

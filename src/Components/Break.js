import React, { useContext } from 'react'
import {TimerData} from './Timer';
const Break=()=> {

    const timerDT = useContext(TimerData);

    const handleChange =(e)=>{
      timerDT.setMin((parseInt(e.target.value)*60))
     
    }
       const handleClick = () => {
         timerDT.setPaused(false);
         timerDT.setBreak(false);
         timerDT.setColor(timerDT.colors.short)
       };
    return (
      <>
        <section className="break--main">
          <section className="break--container grow">
            <h3 className="title">select the break type</h3>
            <article>
              <p className="body">minimum 5 minutes and maximum 30 minutes</p>
            </article>
            <section className="type--area">
              <article>
                <h4 className="body">short break</h4>
                <form action="">
                  <input
                    type="number"
                    id="short-break"
                    name="short--break"
                    min="1"
                    max="5"
                    placeholder="5 minutes"
                    onChange={handleChange}
                  />
                </form>
                <button id="short--break--button" onClick={handleClick}>
                  take a break
                </button>
              </article>
              <article>
                <h4 className="body">long break</h4>
                <form action="">
                  <input
                    type="number"
                    id="long-break"
                    name="short--break"
                    placeholder="15 minutes"
                    min="15"
                    max="30"
                    onChange={handleChange}
                  />
                </form>
                <button id="long--break--button" onClick={handleClick}>
                  take a break
                </button>
              </article>
            </section>
            <button
              id="close--button"
              onClick={() => {
                timerDT.setBreak(false);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </section>
        </section>
      </>
    );
}

export{ Break}

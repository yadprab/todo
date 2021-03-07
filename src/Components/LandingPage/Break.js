import React, { useContext } from 'react'
import {dataContext} from '../Context';
function Break() {
    const {Data, setData} = useContext(dataContext)
    return (
      <>
        <section className="break--section">
          <button className='break--close' onClick={()=>{
            setData({
              ...Data,
              break: false,
              pause: false,
            });
          }}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2">
                <g data-name="close">
                  <rect
                    width={24}
                    height={24}
                    transform="rotate(180 12 12)"
                    opacity={0}
                  />
                  <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                </g>
              </g>
            </svg>
          </button>
          <article className="short--break">
            <h3>Short Break</h3>
            <article>
              <button
                className="button break--button"
                onClick={() => {
                  setData({
                    ...Data,
                    pause: false,
                    break: false,
                    min: 300,
                  });
                }}
              >
                5min
              </button>
              <button
                className="button break--button"
                onClick={() => {
                  setData({
                    ...Data,
                    pause: false,
                    break: false,
                    min: 600,
                  });
                }}
              >
                10min
              </button>
              <button
                className="button break--button"
                onClick={() => {
                  setData({
                    ...Data,
                    pause: false,
                    break: false,
                    min: 900,
                  });
                }}
              >
                15min
              </button>
            </article>
          </article>
          <article className="long--break">
            <h3>Long Break</h3>
            <article>
              <button
                className="button break--button"
                onClick={() => {
                  setData({
                    ...Data,
                    pause: false,
                    break: false,
                    min: 1200,
                  });
                }}
              >
                20min
              </button>
              <button
                className="button break--button"
                onClick={() => {
                  setData({
                    ...Data,
                    pause: false,
                    break: false,
                    min: 1800,
                  });
                }}
              >
                30min
              </button>
            </article>
          </article>
        </section>
      </>
    );
}

export {Break}

import React, { useContext } from 'react'
import {dataContext} from '../Context';
function Break() {
    const {Data, setData} = useContext(dataContext)
    return (
      <>
        <section className="break--section">
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

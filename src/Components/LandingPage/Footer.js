import React, { useContext } from 'react'
import {SvgButton} from './SvgButton';
import {dataContext} from '../Context';
import { Break } from './Break';
import { Audio } from "./Audio";
import {Color} from './Color';
function Footer() {
    
    const {Data, setData} = useContext(dataContext)
    return (
      <>
        <section className="footer--section">
          <article className="task">
            <h3>{Data.TaskName}</h3>
            <button
              className="button"
              onClick={() => {
                setData({
                  ...Data,
                  pause: !Data.pause,
                  break: !Data.break,
                });
              }}
            >
              Break
            </button>
          </article>
          <Color />
          <SvgButton />
          {Data.break && <Break />}
          {Data.min === 0 && <Audio />}
        </section>
      </>
    );
}

export  {Footer}

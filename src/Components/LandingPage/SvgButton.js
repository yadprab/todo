import React, { useContext } from "react";
import { PauseSvg } from "./PauseSvg";
import { Reset } from "./Reset";
import { Stop } from "./Stop";
import { PlaySvg } from "./PlaySvg";
import {dataContext} from '../Context';
function SvgButton() {
 
  const {Data, setData} = useContext(dataContext);

  const setPause = () => {
    
    setData({
      ...Data,
      pause:!Data.pause,
      reset:false,
    })
  }

  const setReset = () => {
    setData({
      ...Data,
      pause:true,
      min:1500,
      reset:true
    
    })
  }
    
  const setStop = () => {
    setData({
      ...Data,
      pause: true,
     
      stop:true
    });
  };
    

  return (
    <>
      <section className="button--section">
        <article>
          <button onClick={setPause}>
            {Data.pause ? <PlaySvg /> : <PauseSvg />}
          </button>
          <p>{Data.pause ? 'start' : 'pause'}</p>
        </article>
        <article>
          <button onClick={setReset}>
            <Reset />
          </button>
          <p>Reset</p>
        </article>
        <article>
          <button onClick={setStop}>
            <Stop />
          </button>
          <p>stop</p>
        </article>
      </section>
    </>
  );
}

export { SvgButton };

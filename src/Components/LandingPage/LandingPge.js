import React, { useState } from "react";
import { Nav } from "../Nav";
import { Input } from "./Input";
import {TimerSection} from './TimerSection';
import { dataContext } from "../Context";
function LandingPge() {

  const nonMutable = {
    break: false,
    startTimer: false,
    form: false,
    TaskName: "",
    pause: false,
    stop: false,
    reset: false,
    min: 1500,
    color:'initial'
  };
  const [Data, setData] = useState({
   ...nonMutable
    
  });
  return (
    <>
      <main>
        <Nav />
        <section className="intro--section">
          <h1>POMODORO APP</h1>
          <p>
            Create your tasks and monitor it. Start concentrating on your goal.
          </p>
          <button
            id="button"
            className="button"
            onClick={() => {
              setData({ ...Data, form: true });
            }}
          >
            Create Task
          </button>
        </section>

        <dataContext.Provider value={{ Data, setData, nonMutable }}>
          {Data.form && <Input />}
          {Data.startTimer && <TimerSection />}
        </dataContext.Provider>
      </main>
    </>
  );
}

export { LandingPge };

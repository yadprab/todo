import React, { useState } from "react";
import { Nav } from "../Nav";
import { Input } from "./Input";
import {TimerSection} from './TimerSection';
import { dataContext } from "../Context";
function LandingPge() {
  const [Data, setData] = useState({
    break: false,
    startTimer: false,
    form: false,
    TaskName:'',
    pause:false,
    stop:false,
    reset:false
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
      </main>
      <dataContext.Provider value={{ Data, setData }}>
        {Data.form && <Input />}
        {Data.startTimer && <TimerSection />}
      </dataContext.Provider>
    </>
  );
}

export { LandingPge };

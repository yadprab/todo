import React from 'react'
import {Footer} from './Footer';
import {Timer} from './Timer';
import { Close } from "../Close";
function TimerSection() {
    return (
      <>
        <main className="pomo--main">
          <Timer />
          <Footer />
          <Close/>
        </main>
      </>
    );
}

export  {TimerSection}

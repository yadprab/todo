import React from 'react'
import {Footer} from './Footer';
import {Timer} from './Timer';
import { Close } from "../Close";
function TimerSection() {
    return (
      <>
        <section className="pomo--main">
          <Timer />
          <Footer />
          <Close/>
        </section>
      </>
    );
}

export  {TimerSection}

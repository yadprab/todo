import React from 'react'
import {Footer} from './Footer';
import {Timer} from './Timer';
function TimerSection() {
    return (
      <>
        <main className="pomo--main">
          <Timer />
          <Footer />
        </main>
      </>
    );
}

export  {TimerSection}

import React from 'react'

const Nav=()=> {
    return (
      <>
        <nav>
          <section className='logo--section'>
          <img src="./logo.png" alt="logo"/>

          </section>

          <button id="nav--button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#14213D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </>
    );
}

export {Nav}

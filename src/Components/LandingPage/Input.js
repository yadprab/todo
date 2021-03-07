import React, { useState, useContext } from "react";
import { dataContext } from "../Context";
import {Close} from '../Close';
function Input() {
  const [InputVal, setVal] = useState({
    TaskName: "",
    ErrorState: true,
    disabled: true,
  });
  const { Data, setData } = useContext(dataContext);

  const handleChange = (e) => {
    const val = e.target.value;
    
    if (e.target.value === "") {
       
        setVal({
         TaskName: "",
          ErrorState: true,
          disabled:true
        });
    }else{
       
          setVal({
            ErrorState:false,
            TaskName: val,
            disabled:false,
          });

          setData({
            ...Data,
            TaskName: val,
          });
    }
  };
  return (
    <>
      <section className="floating--section">
      <Close/>
        <article className='from--modal'>
          <article className="form--control">
            <label htmlFor="task">Add Taskname</label>
            <input
              type="text"
              name="TaskName"
              id="TaskName"
              value={InputVal.TaskName}
              onChange={handleChange}
            />
            {InputVal.ErrorState && <small>Enter The TaskName</small>}
          </article>

          <button
            id="start-timer"
            className={`button ${InputVal.disabled ? "disabled" : ""}`}
            disabled={InputVal.disabled}
            onClick={()=>{
                setData({
                  ...Data,
                  startTimer:true,
                  
                });
            }}
          >
            Start Timer
          </button>
        </article>
      </section>
    </>
  );
}

export { Input };

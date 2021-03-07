import React, { useContext } from 'react'
import {dataContext} from '../Context';
function Color() {
  
const {Data, setData} = useContext(dataContext);


  
    return (
      <>
        <section className="color--section">
          <h3>Color</h3>
          <button
            id="color-1"
            className={`color--button ${
              Data.color === "initial" ? "active" : ""
            }`}
            onClick={() => {
              setData({
                ...Data,
                color: "initial",
              });
            }}
          ></button>
          <button
            id="color-2"
            className={`color--button ${
              Data.color === "middle" ? "active" : ""
            }`}
            onClick={() => {
              setData({
                ...Data,
                color: "middle",
              });
            }}
          ></button>
          <button
            id="color-3"
            className={`color--button ${
              Data.color === "end" ? "active" : ""
            }`}
            onClick={() => {
              setData({
                ...Data,
                color: "end",
              });
            }}
          ></button>
        </section>
      </>
    );
}

export  {Color}

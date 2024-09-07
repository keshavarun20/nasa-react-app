import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{props.data?.title}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <div>
        <button onClick={props.handleToggleModel} >
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
}

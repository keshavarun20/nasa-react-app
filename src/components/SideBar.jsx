import React from "react";

export default function (props) {
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={props.handleToggleModel}></div>
      <div className="sidebarContents">
        <h2 className="header">{props.data?.title}</h2>
        <hr className="modern-hr"/>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{props.data?.date}</p>
          <p>{props.data?.explanation}</p>
        </div>
        <button onClick={props.handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

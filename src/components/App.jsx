import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">{props.head}</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.src} alt="avatar_img" className="circle-img" />
        </div>
        <div className={"bottom"}>
          <p>{props.tel}</p>
          <p>{props.mail}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

function Pro(props) {

  return (
    <>
      <div className="item">
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={props.image} alt="Jane" style={{ width: "100%" }} />
              <div className="container">
                <h2>{props.name}</h2>
                <p className="title">{props.post}</p>
                <p>{props.description}</p>
                <p>{props.email}</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pro;

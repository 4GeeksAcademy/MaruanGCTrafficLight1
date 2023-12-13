import React, { useState } from "react";
const Home = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <div className="father">
        <div className="leftcaps">
          <div className="leftcap"></div>
          <div className="leftcap"></div>
          <div className="leftcap"></div>
        </div>
        <div>
          <div className="top"></div>
          <div className="housing bg-dark">
            <button
              className={`lights border border-dark-subtle border-3 bg-danger m-1 
                ${active == "red" ? "" : "opacity-50"}`}
              onClick={() => setActive("red")}
            ></button>
            <button
              className={`lights border border-dark-subtle border-3 bg-warning m-1 ${
                active == "yellow" ? "" : "opacity-50"
              }`}
              onClick={() => setActive("yellow")}
            ></button>
            <button
              className={`lights border border-dark-subtle border-3 bg-success m-1  ${
                active == "green" ? "" : "opacity-50"
              }`}
              onClick={() => setActive("green")}
            ></button>
          </div>
          <div className="medium bg-dark"></div>
          <div className="base bg-dark"></div>
        </div>
        <div className="rightcaps">
          <div className="rightcap"></div>
          <div className="rightcap"></div>
          <div className="rightcap"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

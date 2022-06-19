import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" , color:"rgba(101, 52, 78, 0.84)"}}
      >
        <span className="sr-only" style={{ color:"rgba(101, 52, 78, 0.84)"}}>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

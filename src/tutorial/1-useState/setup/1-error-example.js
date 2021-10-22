import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleCick = () => {
    title = "Hello title";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleCick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

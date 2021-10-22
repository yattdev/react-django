import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "Yatt Dev"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle button
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>This is a error...</p>
      ) : (
        <div>
          <h2>There is not a error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "yatt",
    age: 24,
    message: "random msg",
  });

  const changeMsg = () => {
    setPerson({ ...person, age: 25 });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMsg}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;

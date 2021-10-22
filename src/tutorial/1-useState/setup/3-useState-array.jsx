import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      {people.map((book) => {
        const { id, name } = book;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clean item
      </button>
    </>
  );
};

export default UseStateArray;

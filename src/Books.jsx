import React from "react";

const Books = ({ img, title, date }) => {
  // const { img, title, date } = props;
  const clickHandler = () => {
    alert("Tu a cliquer sur le button");
  };

  const complexeHandle = (date) => {
    alert(date);
  };
  return (
    <article>
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{date}</h4>
      <button type="button" onClick={clickHandler}>
        Clique sur moi !
      </button>
      <button type="button" onClick={() => complexeHandle(date)}>
        Plus complexe !
      </button>
    </article>
  );
};

export default Books;

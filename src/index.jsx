import React from "react";
import ReactDom from "react-dom";

const data = [
  {
    id: 1,
    title: "titre 1",
    date: "Avant hier",
    img: "https://www.themoviedb.org/t/p/w220_and_h330_face/53WqEWbwQQ3WsO6cOWkzNbym43.jpg",
  },
  {
    id: 2,
    title: "titre 2",
    date: "Hier",
    img: "https://www.themoviedb.org/t/p/w220_and_h330_face/5qQWZOSD1xn2lNge7kd4QaPTN3O.jpg",
  },
  {
    id: 3,
    title: "titre 1",
    date: "Aujourd'hui",
    img: "https://www.themoviedb.org/t/p/w220_and_h330_face/9X7FovF5n8NQUHUPJYYfxRlF3yp.jpg",
  },
];

// Creat a component
function BookList() {
  return (
    <section>
      {data.map((book) => {
        return <Books key={book.id} {...book}></Books>;
      })}
    </section>
  );
}

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

ReactDom.render(<BookList />, document.getElementById("root"));

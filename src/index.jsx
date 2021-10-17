import React from "react";
import ReactDom from "react-dom";
import { data } from "./data";
import Books from "./Books";

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

ReactDom.render(<BookList />, document.getElementById("root"));

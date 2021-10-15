import React from "react";
import ReactDom from 'react-dom'


// Creat a component
function BookList(){
    return (
        <section>
            <Book/>
        </section>
    )
}

const Book = () => {
    return (
        <article>
            <Image/>
            <Title/>
            <Date/>
        </article>
    )
};

const Title = () => <h2>Good Doctor</h2>
const Date = () => <h3> 25 sept. 2017</h3>
const Image = () => <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/53WqEWbwQQ3WsO6cOWkzNbym43.jpg" alt=""/>

ReactDom.render(<BookList/>, document.getElementById('root'))

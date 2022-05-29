/*
* lessons

1. the hard way is the easy way
2. learn to think in 'react'
3. use className instead of class
*/



/*intro - web components
function HelloWorld() {
    return (
        <h1>hello world</h1>
    )
}
function MainContent() {
    return (
        <p>am learning reactjs</p>
    )
}

ReactDOM.render(
    <div>
        <HelloWorld />
        <MainContent />
    </div>,
    document.getElementById("root")
)*/


/*vanilla js
const h1 = document.createElement("h1")
h1.textContent = "this is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)*/


/*const element = <h1 className="header">this is JSX</h1>
console.log(element)*/

/*JSX
render different tags(h1, p) in one parent (div)

const page = (
    <div>                  
        <h1>this is jsx</h1>
        <p>a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("pag")
)


//task: display nav using jsx
const navbar = (
    <nav>
        <h1>web3</h1>
        <ul>
            <li>pricing</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar, document.getElementById("menu"));*/


/*import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <img className="image" src="https://alvarotrigo.com/blog/assets/imgs/2022-02-22/road-to-react-best-book.jpeg"></img>
        <h1>Fun facts about react</h1>
        <ol>
            <li>released in 2013</li>
            <li>created by jordan walke</li>
            <li>has over 100k stars on gihub</li>
            <li>maintained by FB</li>
            <li>powers thousand of apps</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))









UP NEXT, CUSTOM COMPONENTS!!!!


















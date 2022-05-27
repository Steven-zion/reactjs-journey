/*
* lessons

1. the hard way is the easy way
2. learn to think in 'react'
3. use className instead of class
*/

//intro - web components
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
)


/*vanilla js
const h1 = document.createElement("h1")
h1.textContent = "this is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)*/




const element = <h1 className="header">this is JSX</h1>
console.log(element)
/*JSX
render different tags(h1, p) in one parent (div)
*/
const page = (
    <div>                  
        <h1>this is jsx</h1>
        <p>a paragraph</p>
    </div>
)
ReactDOM.render(
    <page />,
    document.getElementById("root")
)
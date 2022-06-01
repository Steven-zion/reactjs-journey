/**
 * lESSONS
 * 
1. USE PASCAL CASE INSTEAD OF CAMELCASE
2. WRAP FUNCTION IN PARENTHESES
3. header, facts and footer functions are separate components
4. always remember to start with a capital letter
5. always use one parent element for all components!!! 
6. PageOne is the parent component and header,footer,facts are the child components
7. use className instead of class in styling
 */


/*
import react from 'react';
import reactDOM from 'react-dom';
*/
function Header() {
    return(
        <div>
            <header>
                <nav className="nav-bar">
                    <img className="logo" src="https://alvarotrigo.com/blog/assets/imgs/2022-02-22/road-to-react-best-book.jpeg"></img>

                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </nav>
            </header>
        </div>
    )
}

function Facts() {
    return(
        <>
        <h1>Fun facts about react</h1>
            <ol>
                <li>released in 2013</li>
                <li>created by jordan walke</li>
                <li>has over 100k stars on gihub</li>
                <li>maintained by FB</li>
                <li>powers thousand of apps</li>
            </ol>
        </>
    )
}

function Footer() {
    return(
        <>
        <footer className="footer">
            <small>&#169; 2022 Zion development All rights reserved</small>
        </footer>
        </>
    )
}

function PageOne(){
    return(
        <div>
            <Header />
            <Facts />
            <Footer />
        </div>
    )
}


ReactDOM.render(
    <PageOne />, 
    document.getElementById("mainn")
)
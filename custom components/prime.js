/**
 * lESSONS
 * 
1. USE PASCAL CASE INSTEAD OF CAMELCASE
2. WRAP FUNCTION IN PARENTHESES
 */


/*
import react from 'react';
import reactDOM from 'react-dom';
*/

function PageOne(){
    return(
        <div>
            <header>
                <nav>
                    <img className="image" src="https://alvarotrigo.com/blog/assets/imgs/2022-02-22/road-to-react-best-book.jpeg" width="500px"></img>
                </nav>
            </header>
            
            <h1>Fun facts about react</h1>
            <ol>
                <li>released in 2013</li>
                <li>created by jordan walke</li>
                <li>has over 100k stars on gihub</li>
                <li>maintained by FB</li>
                <li>powers thousand of apps</li>
            </ol>
            <footer>&#169; 2022 Zion development All rights reserved</footer>
        </div>
    )
}

ReactDOM.render(
    <PageOne />, 
    document.getElementById("mainn")
)
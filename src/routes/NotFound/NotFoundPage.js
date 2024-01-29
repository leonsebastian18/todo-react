import React from "react";
import './NotFound.css';

function NotFoundPage() {
    return (
        <div id="body">   
            <div id="gameboy">
                <div id="border"></div>
                <div id="border2">
                    <div id="display">
                        <p id="error-text-error">ERROR</p>
                        <h1 id="error-text-404">404</h1>
                        <p id="error-text-notfound">Site not found!</p>
                    </div>
                    <div id="cross">
                        <div id="c1"></div>
                        <div id="c2">
                        <div id="c-dot"></div>
                        </div>
                        <div id="c3"></div>
                    </div>
        <div id="buttons">
            <div id="b1"></div>
            <div id="b2"></div>
        </div>
        <div id="long-buttons">
            <div id="l1"></div>
            <div id="l2"></div>
        </div>
        <div id="grid">
            <div id="bar1"></div>
            <div id="bar2"></div>
            <div id="bar3"></div>
            <div id="bar4"></div>
            <div id="bar5"></div>
            <div id="bar6"></div>
            <div id="bar7"></div>
            <div id="bar8"></div>
        </div>      
        </div>
    </div>
            <div id="shadow">
    
            </div>
        </div>
        
    );
}

export { NotFoundPage };
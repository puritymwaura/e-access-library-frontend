import React from "react";
import image1 from "./images/image.jpg"

function Home(){
    return(
        <div class="container">
            <div className="welcome">
                <div className="getstarted">
                    <h2>Learn Now and Master Your Art</h2>
                    <img src={image1} alt=" library image" />
                    <p><button id="btn">Read Books</button></p>
                </div>
            </div>

        </div>
    )
}

export default Home;
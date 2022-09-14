import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./About.css"


function About(){
    const longText = "We are here to help you find more interesting books and have the best experience of reading and giving more suggestions of books you look forward to finding next time you visit Our site again. We work hard to give You all you need and have fun interacting with Our site"
    return(
        <div class="container-fluid">
            <div className="about">
                <div className="abouttext">
                    <h1>What are We...?</h1>
                    <p>We are the best online rescuers to all readers.</p>
                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {longText}
                    </ReactReadMoreReadLess>
                </div>
            </div>
        </div>
    )
}

export default About;
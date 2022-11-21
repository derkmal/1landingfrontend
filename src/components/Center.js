import React from "react";
import "./Center.css";


const Center = () => {
    return (
        <div className="center">
            <div className="myText">
                <h1>THE COMPLETE FRONT-END DEVELOPER GUIDE,<br/>A PATH FROM BEGINNER TO PROFESSIONAL</h1>
                <div className="divP">
                    <li>Land your first job with just html, css and javascrip - you don't need to know everthing!</li>
                    <li>We'll create your own portifolio to showcase your work to clients and businesses.</li>
                    <li>You will learn how to be 3 times more productive spending much less time.</li>
                    <li>As you will progress in the course you will be able to produce tangible results in real-time. </li>
                    <li>If you alread have the basics, no problem, we can develop your skills to make you an expert.</li>
                </div>
            </div>

            <div className="form-container">
                <h2>Get this Special Offer for Only!</h2>
                <p className="myOffer"><s>$600</s> $400</p>

                <div className="separationLine"></div>

                <h3>Enter your name and email<br/> to buy the book</h3>
                <form>
                    <input type='text' name='name' placeholder="Name"></input>
                    <input type='text' name='email' placeholder='Email'></input>
                    <input type='submit' value='I Want to be a Web Developer!'></input>
                </form>  

                <h3 className="garanteed">Enter your name and email<br/> to buy the book</h3>
            </div>

            {/* <div className="clear"></div> */}
        </div>
    )
}

export default Center;


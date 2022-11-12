import React from "react";
import "./Center.css";


const Center = () => {
    return (
        <div className="center">
            <div className="myText">
                <h1>The complete guide that makes you a Front-end Developer</h1>
                <p>This course introduces you the basic technologies to land your first job - you don't need to know everthing!</p>
                <p>You will learn to create your own portifolio to showcase your work to clients and businesses.</p>
                <p>You will master html, css and javascript to be more productive in less time.</p>
                <p>As you will progress in the course you will be able to produce results in real-time. </p>
            </div>

            <div className="form-container">
                <h2>Enter your name and email<br/> to get the book</h2>
                <form>
                    <input type='text' name='name' placeholder="Name"></input>
                    <input type='text' name='email' placeholder='Email'></input>
                    <input type='submit' value='I Want to be a Web Developer!'></input>
                </form>            
            </div>

            {/* <div className="clear"></div> */}
        </div>
    )
}


export default Center;


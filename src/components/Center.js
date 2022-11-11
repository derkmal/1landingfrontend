import React from "react";
import "./Center.css";

const Center = () => {
    return (
        <div className="center">
            <div className="myText">
                <h1>The complete guide that makes you a Fron-end Developer</h1>
                <p>Find out the necessary technologies to land your first job - you don't need to know everthing!</p>
                <p>You will learn to create your own page with portifolio to show clients and businesses.</p>
                <p>You will master the combination of html, css and javascript to more productive in less time.</p>
             </div>
            <div className="form-container">
                <h2>Enter your name and email<br/> to get the book</h2>
                <form>
                    <input type='text' name='name' placeholder="Name"></input>
                    <input type='text' name='email' placeholder='Email'></input>
                    <input type='submit' value='OK. I Want the Course!'></input>
                </form>            
            </div>
        </div>
    )
}


export default Center;


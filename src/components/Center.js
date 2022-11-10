import React from "react";
import "./Center.css";

const Center = () => {
    return (
        <div className="center">
            <div className="form-container">
                <h2>Enter your name and email to get the book</h2>
                <form>
                    <input type='text' name='name' placeholder="Name"></input>
                    <input type='text' name='email' placeholder='Email'></input>
                </form>            
            </div>
        </div>
    )
}


export default Center;


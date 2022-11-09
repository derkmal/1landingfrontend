import React from "react";
import Image from "../images/Símbolo-Estilizado-BONUS.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="firstMessage">I will make you a Front Developer</div>
            <img src={Image} alt="logo"/>
        </header>
    )
}

export default Header;
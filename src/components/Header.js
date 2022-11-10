import React from "react";
import Image from "../images/Símbolo-Estilizado-BONUS.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="firstMessage"><p>I will make you a Front Developer</p></div>
            <div className="myImage"><img src={Image} alt="logo"/></div>
            {/* <div className="clear"></div> */}
        </header>
    )
}

export default Header;
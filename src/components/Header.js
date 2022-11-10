import React from "react";
import Image from "../images/Símbolo-Estilizado-BONUS.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="firstMessage"><p>I will make you<br/> <span>a Front-end Developer</span></p></div>
            <div className="myImage"><img src={Image} alt="logo"/></div>
            {/* <div className="clear"></div> */}
        </header>
    )
}

export default Header;
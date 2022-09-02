import React from "react";
import NavBar from "../../components/NavBar";
import Logo from "../../images/Logo.png";

import "./styles.scss"


const HeaderNavPost = () => {
    return (
        <div className="container">

            <div className="header">
                <div>
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="header__nav-bar">
                    <NavBar />
                </div>
                <a href="#" className="menu-mobile"
                onClick={()=> console.log ("open li")}
                >MENU</a>
            </div>
            
        </div>

    )

};

export default HeaderNavPost;
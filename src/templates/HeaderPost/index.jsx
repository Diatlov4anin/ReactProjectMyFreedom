import React from "react";
import NavBar from "../../components/NavBar";
import Logo from "../../images/Logo.png";
import { fallDown as Menu } from 'react-burger-menu';
import "./styles.scss"


const HeaderPost = () => {
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
                <div className="menu-mobile">
                    <ul className="level1">
                        <li>
                            <a href="/" className="burger">MENU</a>
                            <ul className="level2">
                                <li>
                                    <a href="/" className="burger">HOME</a>
                                </li>
                                <li>
                                    <a href="/about-us" className="burger">About</a>
                                </li>
                                <li>
                                    <a href="/servicing" className="burger">Servicing</a>
                                </li>
                                <li>
                                    <a href="/pricing" className="burger">Pricing</a>
                                </li>
                                <li>
                                    <a href="/team-info" className="burger">Team</a>
                                </li>
                                <li>
                                    <a href="/blog" className="burger">Blog</a>
                                </li>
                                <li>
                                    <a href="/contacts" className="burger">Contact us</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>



                {/* <a href="#" className="menu-mobile"
                    onClick={() => console.log("open li")}
                >MENU</a> */}



                {/* <div >
                    <a href="" className="menu-mobile">MENU</a>
                    <Menu isOpen={false} >
                        <div isOpen={true} className="header__menu">
                            <NavBar />
                        </div>
                    </Menu >

                </div> */}

            </div>

        </div>

    )

};

export default HeaderPost;
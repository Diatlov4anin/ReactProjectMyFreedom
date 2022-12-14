import React from "react";
import NavBar from "../../components/NavBar";
import GoogleIcon from "../../images/googleicon.png";
import FbIcon from "../../images/fbicon.png";
import TwitterIcon from "../../images/twittericon.png";

import "./styles.scss"

const FooterPost = () => {
    return (
        <div className="container">

            <div className="footer">
                <div className="footer__nav-bar">
                    <NavBar />
                </div>
                <div className="menu-mobile">
                    <ul className="level1">
                        <li >
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
                <div >
                    <p>All rights Reserved &#169;{2017}</p>
                    <div className="footer__link">
                        <img src={GoogleIcon} alt="LinkGoogle" />
                        <img src={TwitterIcon} alt="LinkTwitter" style={{ padding: "0px 10px 0px 0px" }} />
                        <img src={FbIcon} alt="LinkFb" />
                    </div>
                </div>
            </div>

        </div>



    )
};

export default FooterPost;
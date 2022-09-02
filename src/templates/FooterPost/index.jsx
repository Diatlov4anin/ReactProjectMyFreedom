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
                <a href="#" className="menu-mobile"
                onClick={()=> console.log ("open li")}
                >MENU</a>
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
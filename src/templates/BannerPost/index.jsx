import React, { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { HEADER_DATA } from './constants'
import ArrowDown from "./images/arrowdown.png"

import "./styles.scss"

const BannerPost = () => {

    const [buttonStyle, setButtonStyle] = useState("btnStyle-passive");
    const [buttonStyle2, setButtonStyle2] = useState("btnStyle-passive");

    return (
        <div className="containerBanner">
            <div>
                <h1 className="header__title">{HEADER_DATA.title}</h1>
                <p className="header__subtitle">{HEADER_DATA.subtitle}</p>
            </div>
            <div className="header__hire">
                <div
                    className="header__button"
                    onMouseOver={() => setButtonStyle("btnStyle-active")}
                    onMouseLeave={() => setButtonStyle("btnStyle-passive")}
                >
                    <ButtonComponent
                        label={HEADER_DATA.buttonLabelOurServices}
                        buttonStyle={buttonStyle}
                    />
                </div>
                <div className="header__button"
                    onMouseOver={() => setButtonStyle2("btnStyle-active")}
                    onMouseLeave={() => setButtonStyle2("btnStyle-passive")}
                >
                    <ButtonComponent
                        label={HEADER_DATA.buttonLabelHire}
                        buttonStyle={buttonStyle2}
                    />
                </div>

            </div>
            <div className="arrow-down"
                style={{ cursor: "pointer" }}
            // onClick={() => scrollTo()}
            >
                <img src={ArrowDown} alt="arrowdown" />
            </div>

        </div>

    );
};

export default BannerPost;  
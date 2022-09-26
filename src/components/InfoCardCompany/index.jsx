import React from "react";

import "./styles.scss";

const InfoCardCompany = (props) => {
    const { icon, titleInfo, subtitleInfo, titleStyle, subtitleStyle } = props;

    return (
        <div  style={{ cursor: "pointer" }}
        // onClick={() => scrollY}
        className="post-card__label">
            <div>
                {icon}
            </div>
            <div className={titleStyle}>
                {titleInfo}
            </div>
            <div className={subtitleStyle}>
                {subtitleInfo}
            </div>

        </div>
    );
};


export default InfoCardCompany;
import React from "react";

import "./styles.scss";

const InfoCardCompany = (props) => {
    const { icon, titleInfo, subtitleInfo } = props;

    return (
        <div  style={{ cursor: "pointer" }}
        // onClick={() => scrollY}
        className="post-card__label">
            <div>
                {icon}
            </div>
            <div className="post-card__title">
                {titleInfo}
            </div>
            <p>
                {subtitleInfo}
            </p>

        </div>
    );
};


export default InfoCardCompany;
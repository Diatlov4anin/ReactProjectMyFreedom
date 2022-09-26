import React from "react";

import "./style.scss";

const MainTitleComponent = (props) => {
    const { mainTitle, mainSubTitle, titleStyle, subtitleStyle } = props;

    return (
        <div>

            <h2 className={titleStyle}>{mainTitle}</h2>
            <p className={subtitleStyle}>{mainSubTitle}</p>

            {/* <h2 className="post__title">{mainTitle}</h2>
                <p className="post__subtitle">{mainSubTitle}</p> */}
        </div>

    );
};


export default MainTitleComponent;
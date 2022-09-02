import React from "react";

import "./style.scss";

const MainTitleComponent = (props) => {
    const { mainTitle, mainSubTitle } = props;
    
           return (
            <div>
                <h2 className="post__title">{mainTitle}</h2>
                <p className="post__subtitle">{mainSubTitle}</p>
            </div>
        
    );
};


export default MainTitleComponent;
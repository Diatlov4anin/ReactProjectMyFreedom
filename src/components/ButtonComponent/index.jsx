import React, { useState } from "react";

import "./style.scss";

const ButtonComponent = (props) => {
    const { label, id, buttonClick, buttonStyle } = props;
    return (
        <button
            onClick={() => buttonClick(id)}
            className={buttonStyle}
        >
            {label}
        </button>
    )
};


export default ButtonComponent; 
import React from "react";
import ErrorImg from "../../images/error.png";

import "./styles.scss";

const ErrorPage = () => {

    return (
        <>
        <h2 className="error__title">Aw, something went wrong!</h2>
        <img className="error__img" src={ErrorImg} alt="ErrorImg"/>
        </>
        
       
    )
}

export default ErrorPage;
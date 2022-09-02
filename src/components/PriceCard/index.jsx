import React from "react";
import ButtonComponent from "../ButtonComponent"

import "./styles.scss"

const PriceCard = ({ id, title, price, period, options, label, buttonStyle, currency }) => {
    return (
        <>
            <div key={id} className="card-price">
                <div className="container">
                    <div className="row">
                        <div className="card-price__rate col-12">
                            <h4 className="card-price__title">{title}</h4>
                            <div>
                                <span className="card-price__period"><sup>{currency}</sup>{price}</span>
                                <span>{period}</span>
                            </div>
                        </div>
                        {options.map((item, index) => (
                            <div key={index} className="col-12">
                                <p className="card-price__option">{item}</p>
                            </div>
                        ))}
                        <div className="card-price__btn col-12">
                            <ButtonComponent
                                label={label}
                                buttonClick={() => console.log("click")}
                                buttonStyle={buttonStyle}
                            />
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default PriceCard;
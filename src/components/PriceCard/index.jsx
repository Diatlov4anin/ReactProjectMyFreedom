import React from "react";
import {BUTTON_PRICE_STYLE} from "./constants"
import ButtonComponent from "../ButtonComponent"

import "./styles.scss"

const PriceCard = ({ id, title, price, period, options, label, buttonStyle, currency, priceCardStyle }) => {
    return (
        <>
            <div key={id} className={priceCardStyle}>
                <div className="container">
                    <div className="row">
                        <div className="card-price__rate col-12">
                            <h4 className="card-price__title">{title}</h4>
                            <div>
                                <span className="card-price__periods"><sup>{currency}</sup>{price}</span>
                                <span className="card-price__sp">{period}</span>
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
                                buttonStyle={priceCardStyle==="card-price-active" ? BUTTON_PRICE_STYLE.active : BUTTON_PRICE_STYLE.passive}
                            />
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default PriceCard;
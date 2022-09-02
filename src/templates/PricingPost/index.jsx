import React from "react";
import { PRICE_CARD_DATA } from "./constants"

import PriceCard from "../../components/PriceCard"
import MainTitleComponent from "../../components/MainTitle"

import "./styles.scss"

const PricingPost = (props) => {
    const { titlePost, subtitlePost, label } = props

    return (
        <>
            <div className="price-post">
                <MainTitleComponent
                    mainTitle={titlePost}
                    mainSubTitle={subtitlePost}
                />
                <div className="container">
                    <div className="row">
                        {PRICE_CARD_DATA.map(({ id, title, price, period, options, label, buttonStyle, currency }) => (
                            <div key={id} className="col-sm-12 col-lg-4">
                                <PriceCard
                                    id={id}
                                    title={title}
                                    currency= {currency}
                                    price={price}
                                    period={period}
                                    options={options}
                                    label={label}
                                    buttonStyle={buttonStyle} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default PricingPost;
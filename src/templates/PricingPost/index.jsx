import React, { useState } from "react";
import { PRICE_CARD_DATA, PRICE_TITLE_DATA, CARD_PRICE_STYLES } from "./constants"

import PriceCard from "../../components/PriceCard"
import MainTitleComponent from "../../components/MainTitle"

import "./styles.scss"

const PricingPost = (props) => {
    const { label } = props
    const [cardPriceFone, setCardPriceFone] = useState();

    return (
        <>
            <div className="price-post">
                <MainTitleComponent
                    mainTitle={PRICE_TITLE_DATA.titlePost}
                    mainSubTitle={PRICE_TITLE_DATA.subtitlePost}
                    titleStyle = "post__title"
                    subtitleStyle = "post__subtitle" 
                />
                <div className="container">
                    <div className="row">
                        {PRICE_CARD_DATA.map(({ id, title, price, period, options, label, buttonStyle, currency }) => (
                            <div key={id} className="col-sm-12 col-lg-4"
                                onMouseOver={() => setCardPriceFone(id)}
                                onMouseLeave={() => setCardPriceFone()}
                            >
                                <PriceCard
                                    id={id}
                                    title={title}
                                    currency={currency}
                                    price={price}
                                    period={period}
                                    options={options}
                                    label={label}
                                    buttonStyle={buttonStyle}
                                    priceCardStyle={id === cardPriceFone ? CARD_PRICE_STYLES.active : CARD_PRICE_STYLES.passive} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default PricingPost;
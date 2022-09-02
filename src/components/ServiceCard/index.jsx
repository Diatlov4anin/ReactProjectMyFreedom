import React from "react";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import ModalComponent from "../../components/ModalComponent";


import "./styles.scss"

const ServiceCard = ({ id, label, titleCard, description, cardStyle, buttonClick }) => {

    return (
        <>
            <div key={id} className={cardStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cardService__label">{label}</div>
                            <h4 className="cardService__title">{titleCard}</h4>
                            <div className="cardService__description">{description}</div>

                        </div>
                        <div className="cardService__button col-12">
                            <ButtonComponent
                          
                                label={"READ MORE"}
                                buttonStyle={"btnCardServicePassive"}
                               
                            />
                            {/* <ModalComponent
                             title="title"
                             description="description"
                             subtitle="subtitle"
                            /> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;
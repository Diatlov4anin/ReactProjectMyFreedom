import React, { useState } from "react";
import { BUTTON_SERVICE_STYLE } from "./consatnts"
import ButtonComponent from "../ButtonComponent";
import ModalComponent from "../../components/ModalComponent";

import "./styles.scss"


const ServiceCard = ({ id, label, titleCard, description, cardStyle, buttonClick }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div key={id} className={cardStyle}
                onClick={() => setShowModal(true)}>
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
                                buttonStyle={cardStyle === "cardService-active" ? BUTTON_SERVICE_STYLE.active : BUTTON_SERVICE_STYLE.passive}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent
                id={id}
                show={showModal}
                setShow={setShowModal}
                title={titleCard}
                description={description}
            />
        </>
    )
}

export default ServiceCard;
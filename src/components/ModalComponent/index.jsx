import React, { useState } from "react";
import { Button } from "bootstrap";
import {Modal} from "bootstrap";
import ButtonComponent from "../ButtonComponent";

import "./styles.scss"

const ModalComponent = (props) => {
    const {
        title,
        description,
        subtitle,
    } = props;

    const [show, setShow] = useState(false);
    const nandleClose = () => setShow(false);
    const nandleShow = () => setShow(true);

    return (
        <>
            <ButtonComponent
                onClick={nandleShow}
            >
                Show More
            </ButtonComponent>
            <div className="modal">
                <Modal className="modal__item"
                    show={show} onHide={nandleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div>{title}</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <p>{subtitle}</p>
                                </div>
                                <div className="col-12">
                                    <div>{description}</div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>

        </>
    );
}

export default ModalComponent;
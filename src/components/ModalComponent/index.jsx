import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./styles.scss"

const ModalComponent = (props) => {
    const {
        id,
        title,
        description,
        subtitle,
        show,
        setShow
    } = props;

    return (
        <>
            <div className={show ? "modal active" : "modal"}
                onClick={() => setShow(false)}
                key={id}
            >
                <div className={show ? "modal__item active" : "modal__item"}
                    onClick={e => e.stopPropagation}
                >
                    <div>{title}</div>
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

                    {/* <Modal
                        key={id}>
                        <Modal.Header >
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
                    </Modal> */}
                </div>
            </div>
        </>
    );
}

export default ModalComponent;
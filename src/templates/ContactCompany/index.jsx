import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataFromFormAC } from "../../store/actionCreators";
import { POSTS_TITLE_DATA, CONTACT_INFO_COMPANY } from "./constans";
import MainTitleComponent from "../../components/MainTitle";
import InfoCardCompany from "../../components/InfoCardCompany";
import ButtonComponent from "../../components/ButtonComponent";
import Form from 'react-bootstrap/Form';

import "./styles.scss";

const ContactCompany = () => {

    const [nameUser, setNameUser] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [invalidName, setInvalidName] = useState({ display: 'none' });
    const [invalidEmail, setInvalidEmail] = useState({ display: 'none' });
    const [invalidPhoneNumber, setInvalidPhoneNumber] = useState({ display: 'none' });
    const [invalidUserMessage, setInvalidUserMessage] = useState({ display: 'none' });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameUserHandler = (e) => {
        setNameUser(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    const userMessageHandler = (e) => {
        setUserMessage(e.target.value)
    }

    const showDataFromForm = () => {
        const dataFromForm = {
            nameUser,
            email,
            phoneNumber,
            userMessage,
        }
        dispatch(dataFromFormAC(dataFromForm))
        localStorage.setItem("dataFromFormKey", JSON.stringify(dataFromForm))
        // if (dataFromForm.nameUser === "Admin") {
        //     navigate("/client-page")
        // }
        // if (dataFromForm.nameUser === "User") {
        //     navigate("/client-page")
        // }
        // else {
        //     setInvalidName({ display: 'block' })
        // }


        if (dataFromForm.nameUser === "Admin" && dataFromForm.email !== "" && dataFromForm.phoneNumber !== "" && dataFromForm.userMessage !== "") {
            navigate("/client-page")
        }
        if (dataFromForm.nameUser === "User" && dataFromForm.email !== "" && dataFromForm.phoneNumber !== "" && dataFromForm.userMessage !== "") {
            navigate("/client-page")
        }
        if (dataFromForm.nameUser === "Admin" && dataFromForm.email === "" && dataFromForm.phoneNumber !== "" && dataFromForm.userMessage !== "") {
            setInvalidEmail({ display: 'block' })
        }
        if (dataFromForm.nameUser === "Admin" && dataFromForm.email === "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage !== "") {
            setInvalidEmail({ display: 'block' })
            setInvalidPhoneNumber({ display: 'block' })
        }
        if (dataFromForm.nameUser === "Admin" && dataFromForm.email === "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage === "") {
            setInvalidEmail({ display: 'block' })
            setInvalidPhoneNumber({ display: 'block' })
            setInvalidUserMessage({ display: 'block' })
        }
        if (dataFromForm.nameUser === "Admin" && dataFromForm.email !== "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage !== "") {
            setInvalidPhoneNumber({ display: 'block' })
        }
        if (dataFromForm.nameUser === "Admin" && dataFromForm.email !== "" && dataFromForm.phoneNumber !== "" && dataFromForm.userMessage === "") {
            setInvalidUserMessage({ display: 'block' })
        }
        if (dataFromForm.nameUser === "Admin" && dataFromForm.email !== "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage === "") {
            setInvalidPhoneNumber({ display: 'block' })
            setInvalidUserMessage({ display: 'block' })
        }
        
        if (dataFromForm.nameUser === "User" && dataFromForm.email === "" && dataFromForm.phoneNumber !== "" && dataFromForm.userMessage !== "") {
            setInvalidEmail({ display: 'block' })
        }
        if (dataFromForm.nameUser === "User" && dataFromForm.email === "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage !== "") {
            setInvalidEmail({ display: 'block' })
            setInvalidPhoneNumber({ display: 'block' })
        }
        if (dataFromForm.nameUser === "User" && dataFromForm.email === "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage === "") {
            setInvalidEmail({ display: 'block' })
            setInvalidPhoneNumber({ display: 'block' })
            setInvalidUserMessage({ display: 'block' })
        }
        if (dataFromForm.nameUser === "User" && dataFromForm.email !== "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage !== "") {
            setInvalidPhoneNumber({ display: 'block' })
        }
        if (dataFromForm.nameUser === "User" && dataFromForm.email !== "" && dataFromForm.phoneNumber !== "" && dataFromForm.userMessage === "") {
            setInvalidUserMessage({ display: 'block' })
        }
        if (dataFromForm.nameUser === "User" && dataFromForm.email !== "" && dataFromForm.phoneNumber === "" && dataFromForm.userMessage === "") {
            setInvalidPhoneNumber({ display: 'block' })
            setInvalidUserMessage({ display: 'block' })
        }
         else {
            setInvalidName({ display: 'block' })
        }

    }

    return (
        <div className="contact-post row">

            <MainTitleComponent
                mainTitle={POSTS_TITLE_DATA.titlePost}
                mainSubTitle={POSTS_TITLE_DATA.subtitlePost}
                titleStyle="post__title-contact"
                subtitleStyle="post__subtitle-contact"
            />

            <div className="post-card row">

                {CONTACT_INFO_COMPANY.map(({ icon, titleInfo, subtitleInfo, id }) => (
                    <div className="col-sm-12 col-lg-4">
                        <InfoCardCompany
                            key={id}
                            icon={icon}
                            titleInfo={titleInfo}
                            subtitleInfo={subtitleInfo}
                            titleStyle="post-card__title-contact"
                            subtitleStyle="post-card__subtitle-contact"
                        />
                    </div>
                ))}
            </div>
            <div className="form row">
                <Form>
                    <div className="form__data col-sm-12 col-lg-4">
                        <Form.Group className="mb-3 " controlId="formBasicName">
                            <Form.Control
                                type="nameUser"
                                placeholder="YOUR NAME"
                                defaultValue={nameUser}
                                onChange={e => nameUserHandler(e)}
                                required
                            />
                            <Form.Text
                                style={invalidName}
                                className="text-muted-error"
                            >
                                Please, enter correct your User Name.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">

                            <Form.Control
                                type="email"
                                placeholder="YOUR EMAIL"
                                defaultValue={email}
                                onChange={e => emailHandler(e)}
                                required
                            />
                            <Form.Text
                                style={invalidEmail}
                                className="text-muted-error"
                            >
                                Please, enter correct your E-mail.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">

                            <Form.Control
                                type="phoneNumber"
                                placeholder="YOUR PHONE"
                                defaultValue={phoneNumber}
                                onChange={e => phoneNumberHandler(e)}
                                required
                            />
                            <Form.Text
                                style={invalidPhoneNumber}
                                className="text-muted-error"
                            >
                                Please, enter correct your Phone Number.
                            </Form.Text>
                        </Form.Group>

                    </div>
                    <div div className="form__message col-sm-12 col-lg-4">
                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control
                                className="form__message-control"
                                type="userMessage"
                                placeholder="WRITE MESSAGE"
                                defaultValue={userMessage}
                                onChange={e => userMessageHandler(e)}
                                required
                            />
                            <Form.Text
                                style={invalidUserMessage}
                                className="text-muted-error"
                            >
                                Please, enter your message.
                            </Form.Text>
                        </Form.Group>
                    </div>

                </Form>
            </div >
            <div className="blog-post__button">
                <ButtonComponent
                    type="submit"
                    buttonClick={() => showDataFromForm(dispatch)}
                    label={"SEND"}
                    buttonStyle={"btnStyle-ContactActive"}
                />
            </div>

        </div >
    )
};

export default ContactCompany;
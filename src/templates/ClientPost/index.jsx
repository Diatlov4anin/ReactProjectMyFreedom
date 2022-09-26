import React from "react";
import { CLIENT_TITLE_DATA } from "./constants";
// import { useSelector, useDispatch } from "react-redux/es/exports";
import { useSelector, useDispatch } from "react-redux";
import MainTitleComponent from "../../components/MainTitle";
import ButtonComponent from "../../components/ButtonComponent";
import ClientAvatar from "../../images/contract.png"

import "./styles.scss"

const ClientPost = () => {

    const dataFromFormLS = JSON.parse(localStorage.getItem("dataFromFormKey"));
    const dataFromFormStore = useSelector(state => state.addDataFromFormReducer.dataFromForm);


    return (
        <>
            <div className="client-post">
                <MainTitleComponent
                    mainTitle={CLIENT_TITLE_DATA.titlePost}
                    mainSubTitle={CLIENT_TITLE_DATA.subtitlePost}
                    titleStyle="post__title"
                    subtitleStyle="post__subtitle"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 px-10">
                            <img src={ClientAvatar} alt="ClientAvatar" />
                        </div>

                        {dataFromFormStore.nameUser === "Admin" &&
                            <div className="client-post__block col-sm-12 col-lg-6 ">
                                <h2>{`NAME: ${dataFromFormLS.nameUser}`}</h2>
                                <h2>{`E-MAIL: ${dataFromFormLS.email}`}</h2>
                                <h2>{`PHONE NUMBER: ${dataFromFormLS.phoneNumber}`}</h2>
                                <span>{`MESSAGE:   ${dataFromFormLS.userMessage}`}</span>
                            </div>}

                            {dataFromFormStore.nameUser === "User" &&
                            <div className="client-post__block col-sm-12 col-lg-6 ">
                                <h2>{`You cannot see this information`}</h2>
                            </div>}

                    </div>

                </div>
                <div className="blog-post__button">
                    <ButtonComponent
                        label={"AGREE"}
                        buttonStyle={"btnStyle-active"}
                    />
                </div>

            </div>

        </>
    )

};

export default ClientPost;
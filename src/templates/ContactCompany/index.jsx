import React from "react";
import MainTitleComponent from "../../components/MainTitle"

import "./styles.scss"

const ContactCompany = (props) => {
    const { titlePost, subtitlePost, label } = props
    return (
        <>
            <div className="contact-post">
                <MainTitleComponent
                    mainTitle={titlePost}
                    mainSubTitle={subtitlePost}
                />
            </div>

        </>
    )
};

export default ContactCompany;
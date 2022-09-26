import React, { useState, useEffect } from "react";
import { TEAM_PERSON_DATA, TEAM_TITLE_DATA } from "./constants"
import MainTitleComponent from "../../components/MainTitle"
import TeamCard from "../../components/TeamCard"

import "./styles.scss";

const TeamInfo = (props) => {
    const { label } = props
    const [teamCardInfo, setTeamCardInfo] = useState([]);

    useEffect(() => {
        const fetchDataFromServer = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const responseData = await response.json();
            setTeamCardInfo(responseData);
        }
        fetchDataFromServer()

    }, []);

    const serverLimitedData = teamCardInfo.slice(0, 3);
    const familyCompany = TEAM_PERSON_DATA.map((item, index) => ({ ...item, ...serverLimitedData[index] }))

    return (
        <>
            <div className="team-post">
                <MainTitleComponent
                    mainTitle={TEAM_TITLE_DATA.titlePost}
                    mainSubTitle={TEAM_TITLE_DATA.subtitlePost}
                    titleStyle = "post__title"
                    subtitleStyle = "post__subtitle" 
                />
                <div className="container">
                    <div className="row">

                        {familyCompany.map(({ id, photo, name, username, item, index, connection, email, linkMail }) => (
                            <div key={id} className="col-sm-12 col-lg-4">
                                <TeamCard
                                    id={id}
                                    photo={photo}
                                    employee={name}
                                    rank={username}
                                    item={item}
                                    index={index}
                                    connection={connection}
                                    mailPerson={email}
                                    linkMail={linkMail}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )

};

export default TeamInfo;
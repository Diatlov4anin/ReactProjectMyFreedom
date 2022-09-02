import React, { useState, useEffect } from "react";
import { TEAM_PERSON_DATA } from "./constants"
import MainTitleComponent from "../../components/MainTitle"
import TeamCard from "../../components/TeamCard"

import "./styles.scss";

const TeamInfo = (props) => {
    const { titlePost, subtitlePost, label } = props
    const [teamCardInfo, setTeamCardInfo] = useState([]);

    useEffect(() => {
        const fetchDataFromServer = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users?limit=3");
            const responseData = await response.json();
            setTeamCardInfo(responseData);
        }
        fetchDataFromServer()

    }, []);

    return (
        <>
            <div className="team-post">
                <MainTitleComponent
                    mainTitle={titlePost}
                    mainSubTitle={subtitlePost}
                />
                <div className="container">
                    <div className="row">
                        {TEAM_PERSON_DATA.map(({ id, photo, employee, rank, item, index, connection, mailPerson, linkMail }) => (
                            <div key={id} className="col-sm-12 col-lg-4">
                                <TeamCard
                                    id={id}
                                    photo={photo}
                                    employee={employee}
                                    rank={rank}
                                    item={item}
                                    index={index}
                                    connection={connection}
                                    mailPerson={mailPerson}
                                    linkMail={linkMail}
                                />
                            </div>
                        ))}
                        {/* {teamCardInfo.map(({ id, name, username, email }) => (
                            <div key={id} className="col-4">
                                <TeamCard
                                    id={id}
                                    employee={name}
                                    rank={username}
                                    mailPerson={email}
                              
                                />
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>

        </>
    )

};

export default TeamInfo;
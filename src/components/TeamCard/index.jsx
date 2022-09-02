import React from "react";

import "./styles.scss"

const TeamCard = ({ id, photo, employee, rank, item, index, connection, mailPerson, linkMail }) => {
    return (
        <>
            <div key={id} className="TeamCard">
                <div >
                    <div className="row">
                        <div className="col-12">
                            <div className="TeamCard__photo">{photo}</div>
                            <h4 className="TeamCard__employee">{employee}</h4>
                            <p className="TeamCard__rank">{rank}</p>
                            <div
                                onClick = {() => {window.open({linkMail}, "_blank")}} 
                                // onClick = {() => {window.open("localhost:3000", "_blank")}} 
                                style={{ cursor: "pointer" }}>
                                {mailPerson}</div>
                        </div>
                        {connection.map((item, index) => (
                            <div key={index} className="col-3">
                                <p className="TeamCard__connection"
                                    style={{ cursor: "pointer" }}
                                >{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard;
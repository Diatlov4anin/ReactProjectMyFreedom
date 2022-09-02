import React from "react";
import CalendarLabel from "../../images/calendar.png"
import DocLabel from "../../images/doc.png"

import "./styles.scss"

const BlogCard = ({ link, date, development, detail }) => {
    return (
        <>
            <div className="blog-card">
                <div className="container">
                    <a className="blog-card__link" href="#">{link}</a>
                    <div className="blog-card__calendar row">
                        <div className="col-6">
                            <img className="blog-card__img" src={CalendarLabel} alt="CalendarLabel" />
                            <span className="blog-card__date">{date}</span>
                        </div>
                        <div className="col-6">
                            <img className="blog-card__img" src={DocLabel} alt="DocLabel" />
                            <span className="blog-card__development">{development}</span>
                        </div>

                    </div>
                    <div className="row">
                        <p className="blog-card__detail col-12">{detail}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogCard;
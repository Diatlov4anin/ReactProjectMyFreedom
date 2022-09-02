import React from "react";
import { BLOG_DATA } from './constants'

import MainTitleComponent from "../../components/MainTitle"
import FirstAvaBlog from "../../images/blog1.png"
import SecondAvaBlog from "../../images/blog2.png"
import ThirdAvaBlog from "../../images/blog3.png"
import ButtonComponent from "../../components/ButtonComponent";
import BlogCard from "../../components/BlogCard";

import "./styles.scss"

const BlogPost = (props) => {

    const { titlePost, subtitlePost, label } = props
    return (
        <>
            <div className="blog-post">
                <MainTitleComponent
                    mainTitle={titlePost}
                    mainSubTitle={subtitlePost}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src={FirstAvaBlog} alt="FirstAvaBlog" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <BlogCard
                                link={BLOG_DATA.link}
                                date={BLOG_DATA.date}
                                development={BLOG_DATA.development} 
                                detail={BLOG_DATA.detail}/>
                        </div>
                    </div>
                    <div className="blog-post__average row">
                        <div className="col-sm-12 col-lg-6">
                            <BlogCard
                                link={BLOG_DATA.link}
                                date={BLOG_DATA.date}
                                development={BLOG_DATA.development}
                                detail={BLOG_DATA.detail} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <img src={SecondAvaBlog} alt="SecondAvaBlog" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src={ThirdAvaBlog} alt="ThirdAvaBlog" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <BlogCard
                               link={BLOG_DATA.link}
                               date={BLOG_DATA.date}
                               development={BLOG_DATA.development}
                               detail={BLOG_DATA.detail} />
                        </div>
                    </div>
                </div>
                <div className="blog-post__button">
                    <ButtonComponent
                        label={"MORE ALL"}
                        buttonStyle={"btnStyle-active"}
                    />
                </div>

            </div>

        </>
    )

};

export default BlogPost;
import React from "react";
import { BLOG_DATA, BLOG_TITLE_DATA } from './constants'
import MainTitleComponent from "../../components/MainTitle"
import FirstAvaBlog from "../../images/blog1.png"
import SecondAvaBlog from "../../images/blog2.png"
import ThirdAvaBlog from "../../images/blog3.png"
import ButtonComponent from "../../components/ButtonComponent";
import BlogCard from "../../components/BlogCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogMiddleware } from "../../store/middleware";

import "./styles.scss"

const BlogPost = () => {

    const dispatch = useDispatch();
    const showBlogInfo = fetchBlogMiddleware();
    const categoriesFetch = useSelector(state => state.fetchBlogReducer.blog);
    const categoryObj = categoriesFetch.slice(0, 4);

    return (
        <>
            <div className="blog-post">
                <MainTitleComponent
                    mainTitle={BLOG_TITLE_DATA.titlePost}
                    mainSubTitle={BLOG_TITLE_DATA.subtitlePost}
                    titleStyle="post__title"
                    subtitleStyle="post__subtitle"
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
                                detail={BLOG_DATA.detail} />
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
                        buttonClick={() => showBlogInfo(dispatch)}
                    />
                </div>

                <div>
                    {categoryObj.map(({ name, image, id }) => (
                        <div key={id} className=" blog-post__disclosure row" >
                            <div className="blog-post__disclosureCard col-sm-12 col-lg-6 p-2">

                                <div >
                                    <img src={image} alt="Product" />
                                </div>
                                <div >Category: {name}</div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )

};

export default BlogPost;
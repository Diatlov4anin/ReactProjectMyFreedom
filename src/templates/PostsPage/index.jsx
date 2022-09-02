import React from "react";
import { useEffect, useState } from "react";
import { POSTS_TITLE_DATA } from "./constants";
import HeaderBanner from "../HeaderBanner";
import AboutUs from "../AboutUs";
import HeaderNavPost from "../HeaderNavPost";
import ServicesInfo from "../ServicesInfo";
import PricingPost from "../PricingPost";
import TeamInfo from "../TeamInfo";
import BlogPost from "../BlogPost";
import ContactCompany from "../ContactCompany";
import FooterPost from "../FooterPost";

const PostsPage = () => {

  return (
    <>
      <header>
        <HeaderNavPost />
        <HeaderBanner />
      </header>
      <main>
        <AboutUs
          titlePost={POSTS_TITLE_DATA.titlePost[0]}
          subtitlePost={POSTS_TITLE_DATA.subtitlePost}
        />
        <ServicesInfo 
        titlePost={POSTS_TITLE_DATA.titlePost[1]}
        subtitlePost={POSTS_TITLE_DATA.subtitlePost}
        />
        <PricingPost 
        titlePost={POSTS_TITLE_DATA.titlePost[2]}
        subtitlePost={POSTS_TITLE_DATA.subtitlePost}/>
        <TeamInfo 
        titlePost={POSTS_TITLE_DATA.titlePost[3]}
        subtitlePost={POSTS_TITLE_DATA.subtitlePost}/>
        <BlogPost 
        titlePost={POSTS_TITLE_DATA.titlePost[4]}
        subtitlePost={POSTS_TITLE_DATA.subtitlePost}/>
        <ContactCompany 
        titlePost={POSTS_TITLE_DATA.titlePost[5]}
        subtitlePost={POSTS_TITLE_DATA.subtitlePost}/>
      </main>
      <footer>
        <FooterPost />
      </footer>
    </>
  );

};
export default PostsPage;

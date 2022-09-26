import React from "react";
import BannerPost from "../BannerPost";
import AboutUs from "../AboutUs";
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
      
      </header>
      <main>
          <BannerPost />
        <AboutUs />
        <ServicesInfo />
        <PricingPost />
        <TeamInfo />
        <BlogPost />
        <ContactCompany />
      </main>
      <footer>
        <FooterPost />
      </footer>
    </>
  );

};
export default PostsPage;

import React from "react"
import MainTitleComponent from "../../components/MainTitle"
import InfoCardCompany from "../../components/InfoCardCompany"
import { LABEL_INFO_COMPANY, TITLE_DATA } from "./constants"

import "./styles.scss";

const AboutUs = () => {


   return (
      <div className="first-container row">

         <MainTitleComponent
            mainTitle={TITLE_DATA.titlePost}
            mainSubTitle={TITLE_DATA.subtitlePost}
            titleStyle="post__title"
            subtitleStyle="post__subtitle"
         />
         <div className="post-card row">
            {LABEL_INFO_COMPANY.map(({ icon, titleInfo, subtitleInfo, id }) => (
               <div className="col-sm-12 col-lg-4">
                  <InfoCardCompany
                     key={id}
                     icon={icon}
                     titleInfo={titleInfo}
                     subtitleInfo={subtitleInfo}
                     titleStyle="post-card__title"
                     subtitleStyle="post-card__subtitle" />
               </div>
            ))}
         </div>
      </div>
   );
};

export default AboutUs;  
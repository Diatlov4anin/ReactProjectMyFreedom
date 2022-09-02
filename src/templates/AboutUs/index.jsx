import React from "react"
import MainTitleComponent from "../../components/MainTitle"
import InfoCardCompany from "../../components/InfoCardCompany"
import { LABEL_INFO_COMPANY } from "./constants"

import "./styles.scss";

const AboutUs = (props) => {
   const { titlePost, subtitlePost } = props

   return (
      <div className="first-container row">

         <MainTitleComponent
            mainTitle={titlePost}
            mainSubTitle={subtitlePost}
         />
         <div className="post-card">
            {LABEL_INFO_COMPANY.map(({ icon, titleInfo, subtitleInfo, id }) => (
               <InfoCardCompany
               className="col-sm-12 col-lg-4"
                  key={id}
                  icon={icon}
                  titleInfo={titleInfo}
                  subtitleInfo={subtitleInfo} />
            ))}
         </div>
      </div>
   );
};

export default AboutUs;  
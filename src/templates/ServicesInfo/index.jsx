import React, { useState } from "react";
import { SERVICE_CARD_DATA } from "./constants"
import MainTitleComponent from "../../components/MainTitle"
import ButtonComponent from "../../components/ButtonComponent";
import ServiceCard from "../../components/ServiceCard";


import "./styles.scss";

const cardStyle = {
   active: "cardService-active",
   passive: "cardService",
}


const ServicesInfo = (props) => {
   const { titlePost, subtitlePost, label } = props;
   const [cardStyle, setCardStyle] = useState("cardService");

   return (
      <div className="second-container">
         <MainTitleComponent
            mainTitle={titlePost}
            mainSubTitle={subtitlePost}
         />
         <div className="post-card">
            <div className="row">
               {SERVICE_CARD_DATA.map(({ id, label, titleCard, description }) => (
                  <div key={id} className="col-sm-12 col-lg-4"
                     onMouseOver={() => setCardStyle("cardService-active")}
                     onMouseLeave={() => setCardStyle("cardService")}
                  >
                     <ServiceCard
                        id={id}
                        label={label}
                        titleCard={titleCard}
                        description={description}
                        cardStyle={cardStyle}
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className="second-container__button">
            <ButtonComponent
               label={"VIEW ALL"}
               buttonStyle={"btnStyle-active"}
            />
         </div>
      </div>
   );

};

export default ServicesInfo;
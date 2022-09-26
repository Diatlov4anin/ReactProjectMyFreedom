import React, { useState } from "react";
import { SERVICE_CARD_DATA, SERVICE_TITLE_DATA, CARD_SERVICE_STYLES } from "./constants"
import MainTitleComponent from "../../components/MainTitle"
import ButtonComponent from "../../components/ButtonComponent";
import ServiceCard from "../../components/ServiceCard";


import "./styles.scss";


const ServicesInfo = (props) => {
   const { label } = props;
   const [cardFone, setCardFone] = useState();

   return (
      <div className="second-container">
         <MainTitleComponent
            mainTitle={SERVICE_TITLE_DATA.titlePost}
            mainSubTitle={SERVICE_TITLE_DATA.subtitlePost}
            titleStyle = "post__title"
            subtitleStyle = "post__subtitle" 
         />
         <div className="post-card">
            <div className="row">
               {SERVICE_CARD_DATA.map(({ id, label, titleCard, description }) => (
                  <div key={id} className="col-sm-12 col-lg-4"
                     onMouseOver={() => setCardFone(id)}
                     onMouseLeave={() => setCardFone()}
                  >
                     <ServiceCard
                        id={id}
                        label={label}
                        titleCard={titleCard}
                        description={description}
                        cardStyle={id === cardFone ? CARD_SERVICE_STYLES.active : CARD_SERVICE_STYLES.passive}
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
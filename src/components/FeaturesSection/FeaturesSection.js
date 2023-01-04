import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import SectionHeadingDesc from "../SectionHeadingDesc/SectionHeadingDesc";

import "./FeaturesSection.scss";

function FeaturesSection() {
  return (
    <section className="Features_main">
      <div className="container">
        <SectionHeadingDesc
          Heading="Slik fungerer det."
          Desc="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
        />
        <div className="row row_custom">
          <FeatureCard
            IconClass="ri-heart-fill Icon"
            IconClass2="ri-heart-fill Icon2"
            CardHeading="Søk etter aktivitet"
            CardDesc="Se igjennom forslag og les mer om de aktivitetene som virker interssante."
          />
          <FeatureCard
            IconClass="ri-heart-fill Icon"
            IconClass2="ri-heart-fill Icon2"
            // CardTitle="Enjoy time"
            CardHeading="Kjøp aktivitet"
            CardDesc="Få bookingbekreftselse og deretter book dato direkte med aktivitetsleverandør"
          />
          <FeatureCard
            IconClass="ri-heart-fill Icon"
            IconClass2="ri-heart-fill Icon2"
            // CardTitle="Enjoy time"
            CardHeading="Gled deg"
            CardDesc="Nå er det bare å glede seg til enda et minne i opplevelsesbanken!"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

import React from "react";
import AboutRow from "../AboutRow/AboutRow";
import InnerHeader from "../InnerHeader/InnerHeader";

import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="about_page">
      <InnerHeader HeaderHeading="Om Funtlers" hideHome={true} />
      <div className="about_main">
        <div className="container">
          <AboutRow
            desc1="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i. Vi forsøker å leve i nuet hver dag, og huske på at Hverdagen består av nettopp det. Små øyeblikk som til slutt former livene våre."
            desc2="For oss finnes lykke i det å ta tekoppen ute på terrassen eller å gå seg en tur i nærskogen."
            desc3="Men vi tror også på å skape fine øyeblikk sammen med andre. Det kan være med vennegjengen, familien, kollegaer eller en nøye utvalgt date. Disse øyeblikkene kan ofte skapes i hjemmet eller på kontoret, men iblant kan det være utrolig deilig med et lite miljøskifte. Bare det å besøke et nytt sted, og gå ut av komfortsonen litt. Skape ny magi ved å teste noe helt annerledes og bare le sammen. Prøve og feile sammen. Vinne - eller tape sammen. Skape minner sammen."
            desc4="Så i håp om å skape mer lykke, og motivere til gode møteplasser - så har vi designet en samleplass for morsomme opplevelser som finnes rundt i vårt vakre land."
            desc5="Vårt ønske er at det skal inspirere deg til å fylle på med hverdagseventyr som får deg til å smile. Om det er grillings i naturen, eller å konkurrere i en klatrepark. Det er helt opp til deg :-)"
            desc6="Nå er det ihvertfall litt enklere å få til."
            desc7="Fra oss til dere,"
            desc8="Benedicte & Jennifer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

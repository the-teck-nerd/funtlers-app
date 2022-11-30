import React from 'react'
import SectionHeadingDesc from '../SectionHeadingDesc/SectionHeadingDesc'
import AboutRow from '../AboutRow/AboutRow';

import './AboutSection.scss';


function AboutSection(props) {
    return (
        <section className='about_main'>
            <div className='container'>
                <SectionHeadingDesc
                    Heading="Om Funtlers"
                    Desc="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
                />
                <AboutRow
                    desc1="Vi forsøker å leve i nuet hver dag, og huske på at Hverdagen består av nettopp det. Små øyeblikk som til slutt former livene våre. For oss finnes lykke i det å ta tekoppen ute på terrassen eller å gå seg en tur i nærskogen. Men vi tror også på å skape fine øyeblikk sammen med andre. Det kan være med vennegjengen, familien, kollegaer eller en nøye utvalgt date. Disse øyeblikkene kan ofte skapes i hjemmet eller på kontoret miljøskifte."
                    desc2="Skape ny magi ved å teste noe helt annerledes og bare le sammen. Prøve og feile sammen. Vinne - eller tape sammen. Skape minner sammen. Så i håp om å skape mer lykke, og motivere til gode møteplasser - så har vi designet en samleplass for morsomme opplevelser som finnes rundt i vårt vakre land. Vårt ønske er at det skal inspirere deg til å fylle på med hverdagseventyr som får deg til å smile. Om det er grillings i naturen."
                    desc3="Nå er det ihvertfall litt enklere å få til. 🧡"
                    desc4="Fra oss til dere, "
                    desc5="Benedicte & Jennifer"
                />
            </div>
        </section>
    )
}

export default AboutSection
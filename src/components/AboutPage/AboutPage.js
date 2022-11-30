import React from 'react'
import AboutRow from '../AboutRow/AboutRow';
import InnerHeader from '../InnerHeader/InnerHeader';


import './AboutPage.scss';

function AboutPage(props) {
    return (
        <div className='about_page'>
            <InnerHeader
                HeaderHeading="About"
                PageText="About"
            />
            <div className='about_main'>
                <div className='container'>
                    <AboutRow
                        AboutHeading="Om Funtlers"
                        desc1="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
                        desc2="Vi forsøker å leve i nuet hver dag, og huske på at Hverdagen består av nettopp det. Små øyeblikk som til slutt former livene våre. For oss finnes lykke i det å ta tekoppen ute på terrassen eller å gå seg en tur i nærskogen. Men vi tror også på å skape fine øyeblikk sammen med andre. Det kan være med vennegjengen, familien, kollegaer eller en nøye utvalgt date. Disse øyeblikkene kan ofte skapes i hjemmet eller på kontoret miljøskifte."
                        desc3="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
                    />
                    <AboutRow
                        AboutHeading="Om Funtlers"
                        desc1="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
                        desc2="Vi forsøker å leve i nuet hver dag, og huske på at Hverdagen består av nettopp det. Små øyeblikk som til slutt former livene våre. For oss finnes lykke i det å ta tekoppen ute på terrassen eller å gå seg en tur i nærskogen. Men vi tror også på å skape fine øyeblikk sammen med andre. Det kan være med vennegjengen, familien, kollegaer eller en nøye utvalgt date. Disse øyeblikkene kan ofte skapes i hjemmet eller på kontoret miljøskifte."
                        desc3="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
                        AboutRowClass="about_row_custom2"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage
import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader';
import SectionHeadingDesc from '../SectionHeadingDesc/SectionHeadingDesc';
import TeamCard from '../TeamCard/TeamCard';

import './TeamPage.scss';


import TeamImg1 from '../../img/team-img1.png';
import TeamImg2 from '../../img/team-img2.png';
import TeamImg3 from '../../img/team-img3.png';
import TeamImg4 from '../../img/team-img4.png';
import TeamImg5 from '../../img/team-img5.png';
import TeamImg6 from '../../img/team-img6.png';

function TeamPage() {
    return (
        <div className='team_page'>
            <InnerHeader
                HeaderHeading="Team"
                PageText="Team"
            />
            <div className='team_main'>
                <div className='container'>
                    <SectionHeadingDesc
                        Heading="Our Team Funtlers"
                        Desc="Bookingbekreftelse er sendt på mail til xxxx@gmail.com"
                    />
                    <div className='row row_custom'>
                        <TeamCard
                            CardImg={TeamImg1}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg2}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg3}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg4}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg5}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg6}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg1}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                        <TeamCard
                            CardImg={TeamImg2}
                            CardHeading="Usman Ali"
                            CardDesc="Frontend Developer"
                            CardLink=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage
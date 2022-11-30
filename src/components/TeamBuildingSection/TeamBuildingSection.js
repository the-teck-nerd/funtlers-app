import React from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'
import { Link } from "react-router-dom";

import './TeamBuildingSection.scss';

import Logo1 from '../../img/client-logo.png';
import Logo2 from '../../img/client-logo2.png';
import Logo3 from '../../img/client-logo3.png';
import Logo4 from '../../img/client-logo4.png';

function TeamBuildingSection() {
    return (
        <section className='Team_building_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-10 col_otr'>
                        <div className='col_team_building_inr'>
                            <h3 className='heading-h3 heading'>
                                Makes teambuilding funtlier
                            </h3>
                            <div className='search_otr'>
                                <Input
                                    InputPlaceholder="Vet du hvilken aktivitet du vil gjøre"
                                    InputName="search"
                                    Inputype="search"
                                    InputClass="Theme_input_white search_input"
                                />
                                <div className='search_icon_otr'>
                                    <i class="ri-search-2-line search_icon"></i>
                                </div>
                            </div>
                            <h3 className='heading-lb heading activity_heading'>
                                Aktivitet (52)
                            </h3>
                            <div className='activity_main'>
                                <ul className='activity_ul'>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Fysisk"
                                        />
                                    </li>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Antall"
                                        />
                                    </li>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Budsjett"
                                        />
                                    </li>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Anledning"
                                        />
                                    </li>
                                </ul>
                                <div className='filter_otr'>
                                    <Select
                                        defaultText="Flere filtere"
                                    />
                                </div>
                            </div>
                            <div className='relevent_select_otr'>
                                <Select
                                    defaultText="Vis: Mest relevant"
                                />
                            </div>
                        </div>
                        <div className='col_inpiration_inr'>
                            <h3 className='heading-h3 heading'>
                                Eller ønsker du inpirasjon?
                            </h3>
                            <ul className='inspiration_ul'>
                                <li className='inspiration_li'>
                                    <button className='inspiration_btn'>
                                        Teambuilding
                                    </button>
                                </li>
                                <li className='inspiration_li'>
                                    <button className='inspiration_btn'>
                                        Julebord
                                    </button>
                                </li>
                                <li className='inspiration_li'>
                                    <button className='inspiration_btn'>
                                        Sommerfest
                                    </button>
                                </li>
                                <li className='inspiration_li'>
                                    <button className='inspiration_btn'>
                                        Afterwork
                                    </button>
                                </li>
                                <li className='inspiration_li'>
                                    <button className='inspiration_btn'>
                                        Online
                                    </button>
                                </li>
                                <li className='inspiration_li'>
                                    <button className='inspiration_btn'>
                                        Dagsutflukt
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='col_logo_inr'>
                            <h3 className='heading-h3 heading'>
                                Eller ønsker du inpirasjon?
                            </h3>
                            <ul className='logo_ul'>
                                <li className='logo_li'>
                                    <Link className='logo_a'>
                                        <img className='logo_img' src={Logo1} alt='logo' />
                                    </Link>
                                </li>
                                <li className='logo_li'>
                                    <Link className='logo_a'>
                                        <img className='logo_img' src={Logo2} alt='logo' />
                                    </Link>
                                </li>
                                <li className='logo_li'>
                                    <Link className='logo_a'>
                                        <img className='logo_img' src={Logo3} alt='logo' />
                                    </Link>
                                </li>
                                <li className='logo_li'>
                                    <Link className='logo_a'>
                                        <img className='logo_img' src={Logo4} alt='logo' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamBuildingSection
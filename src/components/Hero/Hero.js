import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Select from "../Select/Select";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "./Hero.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroImg from "../../img/hero-img.png";
import HeroImg2 from "../../img/hero-img2.png";
import HeroImg3 from "../../img/hero-img3.png";
import HeroImg4 from "../../img/hero-img4.png";
import HeroImg5 from "../../img/hero-img5.png";

import SearchActivity from "../SearchActivity/SearchActivity";
import TeamBuildingSection from "../TeamBuildingSection/TeamBuildingSection";

import FetchService from "../../api/FetchService";
import { getFilters } from "../../commons/activity-filters/Helpers";

let searchModal = {
  name: "",
  category: "",
  type: "",
  city: "",
  peopleNumber: "",
  budgetOptions: "",
};

function Hero() {
  const navigate = useNavigate();

  const filters = getFilters();

  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [budget, setBudget] = useState("");

  const [activities, setActivities] = useState([]);

  const fetchData = () => {
    let ownerid = 1;
    let apicall = FetchService.getAllActivities(ownerid);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setActivities(data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    searchModal.type = type;
    searchModal.category = category;
    searchModal.budget = budget;
    searchModal.peopleNumber = peopleNumber;
    searchModal.city = city;

    navigate("/activities", { state: searchModal });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="hero_header">
        <div className="Hero_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-7 col_team_building_otr">
                <div className="col_team_building_inr">
                  <h3 className="heading-h3 heading_market">
                    Din markedsplass for sosiale aktiviter
                  </h3>
                  <div className="inpiration_teambuilding">
                    <form className="teambuilding_Form" onSubmit={handleSubmit}>
                      <div className="activity_main">
                        <ul className="activity_ul">
                          <li className="activity_li">
                            <Select
                              options={filters.types}
                              defaultText="Acitivity Type"
                              value={type}
                              setValue={setType}
                            />
                          </li>
                          {/* <li className="activity_li">
                          <Select
                            value={category}
                            setValue={setCategory}
                            options={filters.categories}
                            defaultText="Category"
                          />
                        </li> */}
                          <li className="activity_li">
                            <Select
                              value={city}
                              setValue={setCity}
                              options={filters.cities}
                              defaultText="Cities"
                            />
                          </li>
                          <li className="activity_li">
                            <Select
                              value={budget}
                              setValue={setBudget}
                              options={filters.budgetOptions}
                              defaultText="Budget Options"
                            />
                          </li>
                          <li className="activity_li">
                            <Select
                              setValue={setPeopleNumber}
                              value={peopleNumber}
                              options={filters.peopleNumber}
                              defaultText="Number of people"
                            />
                          </li>
                        </ul>
                        <div className="search_icon_otr_local">
                          <button
                            class="ri-search-2-line search_icon_local"
                            type="submit"
                          ></button>
                        </div>
                        {/* <div className="filter_otr">
                  <Select options={categories} defaultText="Number of people" />
                </div> */}
                      </div>
                      <div className="activity-container">
                        <b>Aktivitet ({activities.length})</b>
                      </div>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <div className="col_inpiration_inr">
                        <h3 className="heading-lb heading">
                          Eller ønsker du inpirasjon?
                        </h3>
                        <ul className="inspiration_ul">
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("vennegjeng");
                              }}
                            >
                              Vennegjeng
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("datenight");
                              }}
                            >
                              Datenight
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("barnebursdag");
                              }}
                            >
                              Barnebursdag
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("bursdag");
                              }}
                            >
                              Bursdag
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              //here we are setting the type instead of category
                              onClick={() => {
                                setType("online");
                              }}
                            >
                              Online
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("familiedag");
                              }}
                            >
                              Familiedag
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("egentid");
                              }}
                            >
                              Egentid
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("dagsutflukt");
                              }}
                            >
                              Dagsutflukt
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("teambuilding");
                              }}
                            >
                              Teambuilding
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("sommerfest");
                              }}
                            >
                              Sommerfest
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("afterWork");
                              }}
                            >
                              After work
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("julebord");
                              }}
                            >
                              Julebord
                            </button>
                          </li>
                          <li className="inspiration_li">
                            <button
                              className="inspiration_btn Theme_btn_primary"
                              onClick={() => {
                                setCategory("utdrikningslag");
                              }}
                            >
                              Utdrikningslag
                            </button>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_img_otr">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Pagination]}
              className="mySwiper hero_swiper"
            >
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg2} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg3} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg4} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg5} alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../../components/InnerHeader/InnerHeader";
import Input from "../../components/Input/Input";
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";
import FetchService from "../../api/FetchService";
import LoadingOverlay from "react-loading-overlay";
import { ImageUploader } from "../../utility-components/ImageUploader/ImageUploader";
import { getFilters } from "../../commons/activity-filters/Helpers";
import { useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Form from "react-bootstrap/Form";
import "./EditActivity.scss";
import AttachActivity from "../AttachActivity/AttachActivity";

let activityRequest = {
  id: 0,
  name: "",
  activityType: "",
  city: "",
  price: 0,
  originalPrice: 0,
  validPeriodEnd: "",
  validPeriodStart: "",
  liveDate: "",
  terms: "",
  description: "",
  imagePath: "",
  minPerson: 0,
  maxPerson: 0,
  discountPercent: 0,
  addDate: new Date().toISOString().slice(0, 10),
};

function EditActivity() {
  const location = useLocation();
  const activity = location.state;

  debugger;

  const [showImagePreview, setShowImagePreview] = useState(false);
  const [name, setName] = useState(activity.name);
  const [type, setType] = useState(activity.activityType);
  const [city, setCity] = useState(activity.city);
  const [price, setPrice] = useState(activity.price);
  const [images, setImages] = useState(JSON.parse(activity.images));
  const [originalPrice, setOriginalPrice] = useState(activity.originalPrice);
  const [validPeriodStart, setValidPeriodStart] = useState(
    activity.validPeriodStart?.slice(0, 10)
  );
  const [validPeriodEnd, setValidPeriodEnd] = useState(
    activity.validPeriodEnd?.slice(0, 10)
  );

  const [liveDate, setLiveDate] = useState(activity.liveDate?.slice(0, 10));

  const [terms, setTerms] = useState(activity.terms);
  const [description, setDescription] = useState(activity.description);

  const [minPerson, setMinPerson] = useState(activity.minPerson);
  const [maxPerson, setMaxPerson] = useState(activity.maxPerson);
  const [category, setCategory] = useState(activity.category);
  const [isLoading, setIsLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [partnerId, setPartnerId] = useState(activity?.ownerID);
  const [partnerName, setPartnerName] = useState(activity?.partnerName);

  const [response, setResponse] = useState("");

  const filters = getFilters("add");

  const handleSubmit = async (e) => {
    e.preventDefault();

    activityRequest.id = activity.id;
    activityRequest.ownerID = activity.ownerID;
    activityRequest.name = name;
    activityRequest.city = city;
    activityRequest.price = price;
    activityRequest.originalPrice = originalPrice;
    activityRequest.validPeriodEnd = validPeriodEnd;
    activityRequest.validPeriodStart = validPeriodStart;

    activityRequest.liveDate = liveDate;

    activityRequest.terms = terms;

    activityRequest.description = description;
    activityRequest.minPerson = minPerson;
    activityRequest.maxPerson = maxPerson;
    activityRequest.category = category;
    activityRequest.activityType = type;
    activityRequest.discountPercent = 100 - (price / originalPrice) * 100;

    activityRequest.ownerID = partnerId;

    activityRequest.images = images.map((x) => x.data_url);

    FetchService.UpdateActivity(activityRequest).then((response) => {
      if (response) {
        setTimeout(() => {
          setResponse("Success");
          clearForm();
          setIsLoading(false);
        }, 3000);
      } else {
        setTimeout(() => {
          setResponse("Failed");
          setIsLoading(false);
        }, 2000);
      }
    });
  };

  function clearForm() {
    setName("");
    setPrice(0);
    setOriginalPrice(0);
    setMinPerson(0);
    setMaxPerson(0);
    setValidPeriodEnd("");
    setValidPeriodStart("");
    setDescription("");
    setTerms("");
    setLiveDate("");

    setImages([]);
  }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Behandler forespørselen din"
    >
      <div className="Register_page">
        {/* Todo: might need to change this in future for better design
        <InnerHeader HeaderHeading="Activity" PageText="Add Activity" />
     */}

        <section>
          <div className="container">
            <div className="row row_custom">
              <div className="col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">
                    Oppdater aktivitet
                  </h3>
                  {response === "Failed" && (
                    <div className="error_message">
                      {
                        "Feil: Systemet kunne ikke lagre aktiviteten. Vær så snill, prøv på nytt."
                      }
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {"Aktiviteten er oppdatert."}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="row">
                    <div className="col">
                      <div className="Input_otr">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="text"
                          InputName="name"
                          label="Aktivitetsnavn"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </div>
                      <div className="Input_otr">
                        {"Kategori"}
                        <Form.Select
                          className="Theme_input_white form_input"
                          aria-label="Default select example"
                          value={category}
                          onChange={(event) => {
                            setCategory(event.target.value);
                          }}
                        >
                          {filters.categories.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </Form.Select>
                      </div>
                      <div className="Input_otr">
                        {"By"}
                        <Form.Select
                          className="Theme_input_white form_input"
                          aria-label="Default select example"
                          value={city}
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                        >
                          {filters.cities.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </Form.Select>
                      </div>
                      <div className="Input_otr">
                        {"Aktivitetstype"}
                        <Form.Select
                          className="Theme_input_white form_input"
                          aria-label="Default select example"
                          value={type}
                          onChange={(event) => {
                            setType(event.target.value);
                          }}
                        >
                          {filters.types.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </Form.Select>
                      </div>

                      <div className="row">
                        <div className="Input_otr col">
                          <Input
                            InputClass="Theme_input_white form_input"
                            Inputype="number"
                            InputName="number"
                            label="Pris"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                        </div>
                        <div className="Input_otr col">
                          <Input
                            InputClass="Theme_input_white form_input"
                            Inputype="number"
                            InputName="number"
                            label="Orginalpris"
                            value={originalPrice}
                            onChange={(event) =>
                              setOriginalPrice(event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col_img_otr">
                      <div className="col_img_inr">
                        <div className="image-uploader">
                          {!showImagePreview && (
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
                              {images?.map((image) => (
                                <SwiperSlide>
                                  <div className="img_otr">
                                    <img
                                      className="campaign_img"
                                      height="50"
                                      width="70"
                                      src={image.imageURL}
                                      alt="img"
                                    />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          )}
                          <ImageUploader
                            showImagePreview={showImagePreview}
                            setShowImagePreview={setShowImagePreview}
                            setImagesCallBack={setImages}
                            editMode={true}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="number"
                          InputName="number"
                          label="Minimumspersoner"
                          value={minPerson}
                          onChange={(event) => setMinPerson(event.target.value)}
                        />
                      </div>
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="number"
                          InputName="number"
                          label="Maksimumspersoner"
                          value={maxPerson}
                          onChange={(event) => setMaxPerson(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="date"
                          InputName="number"
                          label="Gyldig fra"
                          value={validPeriodStart}
                          onChange={(event) =>
                            setValidPeriodStart(event.target.value)
                          }
                        />
                      </div>
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="date"
                          InputName="number"
                          label="Gyldig Til"
                          value={validPeriodEnd}
                          onChange={(event) =>
                            setValidPeriodEnd(event.target.value)
                          }
                        />
                      </div>
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="date"
                          InputName="number"
                          label="Live fra"
                          value={liveDate}
                          onChange={(event) => setLiveDate(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input description"
                        Inputype="text"
                        InputName="description"
                        label="Beskrivelse"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input description"
                        Inputype="text"
                        InputName="terms"
                        label="Vilkår"
                        value={terms}
                        onChange={(event) => setTerms(event.target.value)}
                      />
                    </div>

                    <div className="change-partner">
                      {/* Add activity button if the partner is not attached. */}
                      {partnerId !== 0 && (
                        <div className="Input_otr">
                          <p>
                            <b>Partner Id: </b> {partnerId}
                          </p>
                          <br />
                          <p>
                            <b>Partnernavn: </b> {partnerName}
                          </p>
                        </div>
                      )}
                      <button
                        type="button"
                        className="Theme_btn_primary h-50 bg-danger mt-2"
                        onClick={() => {
                          setShowPopup(true);
                        }}
                      >
                        Bytte partner
                      </button>
                    </div>

                    <div className="Input_otr action_otr">
                      <button
                        type="submit"
                        className="Theme_btn_primary form_btn"
                      >
                        Oppdater aktivitet
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showPopup && (
          <div className="backdrop">
            <div className="backdrop-container">
              <AttachActivity
                setShowPopup={setShowPopup}
                setPartnerID={setPartnerId}
                setPartnerName={setPartnerName}
              />
            </div>
          </div>
        )}
      </div>
    </LoadingOverlay>
  );
}

export default EditActivity;

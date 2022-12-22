import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../InnerHeader/InnerHeader";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";
import FetchService from "../../api/FetchService";
import LoadingOverlay from "react-loading-overlay";
import ImageUploading from "react-images-uploading";
import { ImageUploader } from "../../utility-components/ImageUploader/ImageUploader";
import { getFilters } from "../../commons/activity-filters/Helpers";

import Form from "react-bootstrap/Form";
import "./AddActivity.scss";
import AttachActivity from "../../Dashboard/AttachActivity/AttachActivity";

let activity = {
  name: "",
  type: "",
  city: "",
  price: 0,
  originalPrice: 0,
  validPeriodEnd: "",
  validPeriodStart: "",
  description: "",
  imagePath: "",
  minPerson: 0,
  maxPerson: 0,
  discountPercent: 0,
  //todo: remove this static value going forward in future
  ownerId: 0,
  addDate: new Date().toISOString().slice(0, 10),
  occassion: "",
};

function AddActivity() {
  const [images, setImages] = useState([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("fysisk");
  const [city, setCity] = useState("oslo");
  const [price, setPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [validPeriodStart, setValidPeriodStart] = useState("");
  const [validPeriodEnd, setValidPeriodEnd] = useState("");
  const [description, setDescription] = useState("");

  const [minPerson, setMinPerson] = useState(0);
  const [maxPerson, setMaxPerson] = useState(0);
  const [category, setCategory] = useState("vennegjeng");
  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [partnerId, setPartnerID] = useState(0);
  const [partnerName, setPartnerName] = useState("");

  const filters = getFilters("add");

  const handleSubmit = async (e) => {
    e.preventDefault();

    activity.name = name;
    activity.city = city;
    activity.price = price;
    activity.originalPrice = originalPrice;
    activity.validPeriodEnd = validPeriodEnd;
    activity.validPeriodStart = validPeriodStart;
    activity.description = description;
    activity.minPerson = minPerson;
    activity.maxPerson = maxPerson;
    activity.category = category;
    activity.activityType = type;
    activity.discountPercent = 100 - (price / originalPrice) * 100;
    activity.ownerID = partnerId;

    setIsLoading(true);
    activity.images = images.map((x) => x.data_url);


    FetchService.AddActivity(activity).then((response) => {
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
    setPartnerID(0);
    setPartnerName(0);
    setImages([]);
  }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="Register_page">
        {/* Todo: might need to change this in future for better design
        <InnerHeader HeaderHeading="Activity" PageText="Add Activity" />
     */}

        <section className="add_activity_main">
          <InnerHeader
            HeaderHeading="Add Activity"
            PageText="Add Activity"
          />
          <div className="container">
            <div className="row_custom">
              <div className="col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">
                    Add a new activity
                  </h3>
                  {response === "Failed" && (
                    <div className="error_message">
                      {
                        "Error: System was not able to save the activity. Please try again."
                      }
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {"Activity has been added successfully."}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="form_main">
                    <div className="row row_custom_inr row_custom_inr1">
                      <div className="col-lg-6 col_input_otr">
                        <div className="col_input_inr">
                          <div className="Input_otr">
                            <Input
                              InputClass="Theme_input_white form_input"
                              Inputype="text"
                              InputName="name"
                              label="Activity Name"
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                            />
                          </div>
                          <div className="Input_otr">
                            {"Categories"}
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
                            {"City"}
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
                            {"Activity Type"}
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
                          <div className="input_main">
                            <div className="Input_otr ">
                              <Input
                                InputClass="Theme_input_white form_input"
                                Inputype="number"
                                InputName="number"
                                label="Price"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                              />
                            </div>
                            <div className="Input_otr ">
                              <Input
                                InputClass="Theme_input_white form_input"
                                Inputype="number"
                                InputName="number"
                                label="Original Price"
                                value={originalPrice}
                                onChange={(event) =>
                                  setOriginalPrice(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col_img_otr">
                        <div className="col_img_inr">
                          <div className="image-uploader">
                            <ImageUploader setImagesCallBack={setImages} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row_custom_inr">
                      <div className="col-lg-6 col_input_otr">
                        <div className="col_input_inr">
                          <div className="Input_otr ">
                            <Input
                              InputClass="Theme_input_white form_input"
                              Inputype="number"
                              InputName="number"
                              label="Minimum Person"
                              value={minPerson}
                              onChange={(event) => setMinPerson(event.target.value)}
                            />
                          </div>
                          <div className="Input_otr ">
                            <Input
                              InputClass="Theme_input_white form_input"
                              Inputype="date"
                              InputName="number"
                              label="Valid from"
                              value={validPeriodStart}
                              onChange={(event) =>
                                setValidPeriodStart(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col_img_otr">
                        <div className="col_img_inr">
                          <div className="Input_otr ">
                            <Input
                              InputClass="Theme_input_white form_input"
                              Inputype="number"
                              InputName="number"
                              label="Maximum Person"
                              value={maxPerson}
                              onChange={(event) => setMaxPerson(event.target.value)}
                            />
                          </div>
                          <div className="Input_otr ">
                            <Input
                              InputClass="Theme_input_white form_input"
                              Inputype="date"
                              InputName="number"
                              label="Valid Til"
                              value={validPeriodEnd}
                              onChange={(event) =>
                                setValidPeriodEnd(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input description"
                        Inputype="text"
                        InputName="description"
                        label="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </div>
                    <div >
                      {/* Add activity button if the partner is not attached. */}
                      {partnerId !== 0 && (
                        <>
                          <div className="Input_otr">
                            <p><b>Partner Id: </b> {partnerId}</p>
                            <br />
                            <p><b>Partner Name: </b> {partnerName}</p>
                          </div>
                          <div className="Input_otr action_otr">
                            <button
                              type="submit"
                              className="Theme_btn_primary form_btn"
                            >
                              Add Activity
                            </button>
                          </div>
                        </>
                      )}
                      {partnerId === 0 && (
                        <button
                          type="button"
                          className="Theme_btn_primary form_btn"
                          onClick={() => {
                            setShowPopup(true);
                          }}
                        >
                          Attach Partner
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className="backdrop">
          <div className="backdrop-container">
            <AttachActivity
              setShowPopup={setShowPopup}
              setPartnerID={setPartnerID}
              setPartnerName={setPartnerName}
            />
          </div>
        </div>
      )}
    </LoadingOverlay>
  );
}

export default AddActivity;

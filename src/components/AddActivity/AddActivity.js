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
import "./AddActivity.scss";
import Select from "../Select/Select";

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
  addDate: new Date().toISOString().slice(0, 10),
  occassion: "",
};

function AddActivity() {
  const [images, setImages] = useState([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [validPeriodStart, setValidPeriodStart] = useState("");
  const [validPeriodEnd, setValidPeriodEnd] = useState("");
  const [description, setDescription] = useState("");

  const [minPerson, setMinPerson] = useState(0);
  const [maxPerson, setMaxPerson] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filters = getFilters();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    activity.name = name;
    activity.activityType = type;
    activity.city = city;
    activity.price = price;
    activity.originalPrice = originalPrice;
    activity.validPeriodEnd = validPeriodEnd;
    activity.validPeriodStart = validPeriodStart;
    activity.description = description;
    activity.minPerson = minPerson;
    activity.maxPerson = maxPerson;
    activity.category = category;
    activity.activityType=type;
    activity.discountPercent = 100 - (price / originalPrice) * 100;

    //setIsLoading(true);
    activity.images = images.map((x) => x.data_url);

    FetchService.AddActivity(activity).then((response) => {
      
      if (response) {
        alert("added");
      } else {
        alert("failed");
      }
    });
  };

  function clearForm() {}

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="Register_page">
        <InnerHeader HeaderHeading="Activity" PageText="Add Activity" />
        <section className="Register_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">
                    Add a new activity
                  </h3>
                  {/* {response === "Failed" && (
                    <div className="error_message">
                      {
                        "User with this email address already exists. Please try again with different email."
                      }
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {
                        "User successfully registered! Please login to access your account!"
                      }
                    </div>
                  )} */}

                  <form onSubmit={handleSubmit} className="row">
                    <div className="col">
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
                        <Select
                          hideDefault
                          className={"Theme_input_white form_input"}
                          setValue={setCategory}
                          value={category}
                          options={filters.categories}
                          defaultText=""
                        />
                      </div>
                      <div className="Input_otr">
                        {"City"}
                        <Select
                          hideDefault
                          className={"Theme_input_white form_input"}
                          setValue={setCity}
                          value={city}
                          options={filters.cities}
                          defaultText=""
                        />
                      </div>
                      <div className="Input_otr">
                        {"Activity Type"}
                        <Select
                          hideDefault
                          className={"Theme_input_white form_input"}
                          setValue={type}
                          value={type}
                          options={filters.types}
                          defaultText=""
                        />
                      </div>

                      <div className="row">
                        <div className="Input_otr col">
                          <Input
                            InputClass="Theme_input_white form_input"
                            Inputype="number"
                            InputName="number"
                            label="Price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                        </div>
                        <div className="Input_otr col">
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
                    <div className="col">
                      <div className="image-uploader">
                        <ImageUploader setImagesCallBack={setImages} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="number"
                          InputName="number"
                          label="Minimum Person"
                          value={minPerson}
                          onChange={(event) => setMinPerson(event.target.value)}
                        />
                      </div>
                      <div className="Input_otr col">
                        <Input
                          InputClass="Theme_input_white form_input"
                          Inputype="number"
                          InputName="number"
                          label="Maximum Person"
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
                          label="Valid from"
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
                          label="Valid Til"
                          value={validPeriodEnd}
                          onChange={(event) =>
                            setValidPeriodEnd(event.target.value)
                          }
                        />
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

                    <div className="Input_otr action_otr">
                      <button
                        type="submit"
                        className="Theme_btn_primary form_btn"
                      >
                        Add Activity
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LoadingOverlay>
  );
}

export default AddActivity;

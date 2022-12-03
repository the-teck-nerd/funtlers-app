import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactPage from "./components/ContactPage/ContactPage";
import FaqPage from "./components/FaqPage/FaqPage";
import AboutPage from "./components/AboutPage/AboutPage";
import PartnersPage from "./components/PartnersPage/PartnersPage";
import Activities from "./components/Activities/Activities";
import ActivityDetails from "./components/Activity-Details/ActivityDetails";
import Payments from "./components/Payments/Payments";
import Login from "./components/Login/Login";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import TeamPage from "./components/TeamPage/TeamPage";
import BookingConPage from "./components/BookingConPage/BookingConPage";
import CampaignPage from "./components/CampaignPage/CampaignPage";
import Register from "./components/Register/Register";
import React   from "react";
import { getToken } from "./api/LoginService";
import { useState } from "react";

function App() {

  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/contact" exact={true} element={<ContactPage />} />
        <Route path="/faq" exact={true} element={<FaqPage />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="/partner" exact={true} element={<PartnersPage />} />
        <Route path="/activity" exact={true} element={<Activities />} />
        <Route path="/payment" exact={true} element={<Payments />} />

        {/* <Route
          path="/activity-details"
          exact={true}
          element={<ActivityDetails />}
        /> */}
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/register" exact={true} element={<Register />} />
        <Route path="/contact" exact={true} element={<ContactPage />} />
        <Route path="/faq" exact={true} element={<FaqPage />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="/partner" exact={true} element={<PartnersPage />} />
        <Route
          path="/activities"
          exact={true}
          element={<SearchResultPage />}
        />
        <Route path="/team" exact={true} element={<TeamPage />} />
        <Route
          path="/booking-confirmation"
          exact={true}
          element={<BookingConPage />}
        />
        <Route path="/activity-detail" exact={true} element={<CampaignPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

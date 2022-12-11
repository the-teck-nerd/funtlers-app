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
import React from "react";
import AddActivity from "./components/AddActivity/AddActivity";
import AddPartner from "./components/AddPartner/AddPartner";
import EditPartner from "./components/EditPartner/EditPartner";
import ProfilePage from "./Dashboard/ProfilePage/ProfilePage";
import DashboardHeader from "./Dashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "./Dashboard/DashboardSidebar/DashboardSidebar";
import EditProfilePage from "./Dashboard/EditProfilePage/EditProfilePage";
import ActivityPage from "./Dashboard/ActivityPage/ActivityPage";
import PartnerPage from "./Dashboard/PartnerPage/PartnerPage";
import CustomerPage from "./components/CustomerPage/CustomerPage";

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
        <Route path="/activities" exact={true} element={<SearchResultPage />} />
        <Route path="/team" exact={true} element={<TeamPage />} />
        <Route
          path="/booking-confirmation"
          exact={true}
          element={<BookingConPage />}
        />
        <Route
          path="/activity-detail"
          exact={true}
          element={<CampaignPage />}
        />
        <Route path="/add-activity" exact={true} element={<AddActivity />} />
        <Route path="/edit-activity" exact={true} element={<AddActivity />} />

        <Route path="/add-partner" exact={true} element={<AddPartner />} />
        <Route path="/edit-partner" exact={true} element={<EditPartner />} />
        <Route path="/my-page" exact={true} element={<CustomerPage />} />
      </Routes>
      <Footer />
    </>
    // <>
    //   <div className="dashboard_main">
    //     <div className="sidebar_content_main">
    //       <div className="sidebar_main">
    //         <DashboardSidebar />
    //       </div>
    //       <div className="Header_content_main">
    //         <div className="dashboard_header_main">
    //           <DashboardHeader />
    //         </div>
    //         <div className="content_main">
    //           <Routes>
    //             <Route path="/" exact={true} element={<ActivityPage />} />
    //             <Route path="/profile" exact={true} element={<ProfilePage />} />
    //             <Route path="/profile-edit" exact={true} element={<EditProfilePage />} />
    //             <Route path="/partner-dashboard" exact={true} element={<PartnerPage />} />
    //           </Routes>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default App;

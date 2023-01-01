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
import React, { useState, useEffect } from "react";
import AddActivity from "./components/AddActivity/AddActivity";
import AddPartner from "./components/AddPartner/AddPartner";
import EditPartner from "./Dashboard/EditPartner/EditPartner";
import ProfilePage from "./Dashboard/ProfilePage/ProfilePage";
import DashboardHeader from "./Dashboard/DashboardHeader/DashboardHeader";

import PartnerDashboardHeader from "./Dashboard/PartnerDashboardHeader/PartnerDashboardHeader";

import DashboardSidebar from "./Dashboard/DashboardSidebar/DashboardSidebar";
import EditProfilePage from "./Dashboard/EditProfilePage/EditProfilePage";
import ActivityPage from "./Dashboard/ActivityPage/ActivityPage";
import PartnerPage from "./Dashboard/PartnerPage/PartnerPage";
import PartnerOrderPage from "./Dashboard/PartnerOrders/PartnerOrder";

import CustomerPage from "./components/CustomerPage/CustomerPage";
import PartnerAnalyticsPage from "./Dashboard/PartnerAnalyticsPage/PartnerAnalyticsPage";
import OrderPage from "./Dashboard/OrderPage/OrderPage";
import EditOrderPage from "./Dashboard/EditOrderPage/EditOrderPage";
import LoadingOverlay from "react-loading-overlay";
import EditActivity from "./Dashboard/EditActivity/EditActivity";
import { isLoggedIn } from "./api/NewLoginService";
import { useLocation, useNavigate } from "react-router-dom";
import PartnerDashboardSidebar from "./Dashboard/PartnerDashboardSidebar/PartnerDashboardSidebar";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import AdminLandingPage from "./Dashboard/AdminLandingPage/AdminLandingPage";
import TermsPage from "./components/TermsPage/TermsPage";
import EditProfile from "./components/EditProfile/EditProfile";
import OrderedActivity from "./components/OrderedActivity/OrderedActivity";
import PartnerActivities from "./Dashboard/PartnerActivities/PartnerActivities";
import AnalyticsPage from './Dashboard/Analytics/AnalyticsPage';
import PartnerProfilePage from './Dashboard/PartnerProfilePage/PartnerProfilePage';

function App() {
  const [SideBar, setSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userObject, setUser] = useState(isLoggedIn());
  
  const navigate = useNavigate();

  useEffect(() => {
    // navigate(0);
  }, [userObject]);

  const SideMenuClick = () => {
    setSideBar(!SideBar);
  };
  return userObject && userObject.user.userTypeId == 3 ? (
    <>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Behandler forespørselen din"
      >
        <div className="dashboard_main">
          <div className="sidebar_content_main">
            <div className="sidebar_main">
              <PartnerDashboardSidebar SidebarAddClass={SideBar} />
            </div>
            <div className="Header_content_main">
              <div className="dashboard_header_main">
                <PartnerDashboardHeader
                  SidebarStrech={SideMenuClick}
                  setUser={setUser}
                />
              </div>
              <div className="content_main">
                <Routes>
                  <Route
                    path="/"
                    exact={true}
                    element={<PartnerActivities setIsLoading={setIsLoading} />}
                  />

                  <Route
                    path="/profile"
                    exact={true}
                    element={<PartnerProfilePage />}
                  />
                  <Route
                    path="/profile-edit"
                    exact={true}
                    element={<EditProfilePage />}
                  />

                  <Route
                    path="/partner-analytics"
                    exact={true}
                    element={<PartnerAnalyticsPage setIsLoading={setIsLoading}  />}
                  />
                  <Route
                    path="/order"
                    exact={true}
                    element={<PartnerOrderPage setIsLoading={setIsLoading} />}
                  />
                  <Route
                    path="/edit-order"
                    exact={true}
                    element={<EditOrderPage />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  ) : userObject && userObject.user.userTypeId == 2 ? (
    <>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Behandler forespørselen din"
      >
        <div className="dashboard_main">
          <div className="sidebar_content_main">
            <div className="sidebar_main dashboard-header-color">
              <DashboardSidebar SidebarAddClass={SideBar} />
            </div>
            <div className="Header_content_main dashboard-header-color">
              <div className="dashboard_header_main dashboard-header-color">
                <DashboardHeader
                  SidebarStrech={SideMenuClick}
                  setUser={setUser}
                  userObject={userObject}
                />
              </div>
              <div className="content_main dashboard-body-color">
                <Routes>
                  <Route
                    path="/"
                    exact={true}
                    element={<AdminLandingPage setIsLoading={setIsLoading} />}
                  />
                  <Route
                    path="/activity-page"
                    exact={true}
                    element={<ActivityPage setIsLoading={setIsLoading} />}
                  />
                  <Route
                    path="/add-activity"
                    exact={true}
                    element={<AddActivity />}
                  />
                  <Route
                    path="/edit-activity"
                    exact={true}
                    element={<EditActivity />}
                  />
                  <Route
                    path="/add-partner"
                    exact={true}
                    element={<AddPartner />}
                  />
                  <Route
                    path="/edit-partner"
                    exact={true}
                    element={<EditPartner />}
                  />

                  <Route
                    path="/profile"
                    exact={true}
                    element={<ProfilePage />}
                  />
                  <Route
                    path="/profile-edit"
                    exact={true}
                    element={<EditProfilePage />}
                  />
                  <Route
                    path="/partner-dashboard"
                    exact={true}
                    element={<PartnerPage  setIsLoading={setIsLoading}/>}
                  />
                  <Route
                    path="/partner-orders"
                    exact={true}
                    element={<PartnerOrderPage  setIsLoading={setIsLoading} />}
                  />
                  <Route
                    path="/partner-activities"
                    exact={true}
                    element={<PartnerActivities setIsLoading={setIsLoading}/>}
                  />
                  <Route
                    path="/analytics"
                    exact={true}
                    element={<AnalyticsPage  setIsLoading={setIsLoading}/>}
                  />
                  <Route path="/order" exact={true} element={<OrderPage  setIsLoading={setIsLoading} />} />
                  <Route
                    path="/edit-order"
                    exact={true}
                    element={<EditOrderPage  setIsLoading={setIsLoading} />}
                  />
                  <Route
                    path="/ordered-activity"
                    exact={true}
                    element={<OrderedActivity  setIsLoading={setIsLoading}/>}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  ) : (
    <>
      <Header setUser={setUser} userObject={userObject} />
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/contact" exact={true} element={<ContactPage />} />
        <Route path="/faq" exact={true} element={<FaqPage />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="/terms" exact={true} element={<TermsPage />} />
        <Route path="/partner" exact={true} element={<PartnersPage />} />
        <Route path="/activity" exact={true} element={<Activities />} />
        <Route path="/payment" exact={true} element={<Payments />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/register" exact={true} element={<Register />} />
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

        <Route path="/features" exact={true} element={<FeaturesPage />} />
        {userObject && (
          <>
            <Route
              path="/edit-profile"
              exact={true}
              element={<EditProfile />}
            />
            <Route path="/my-page" exact={true} element={<CustomerPage />} />
            <Route
              path="/ordered-activity"
              exact={true}
              element={<OrderedActivity />}
            />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

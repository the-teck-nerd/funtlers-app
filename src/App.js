import React from 'react'
import './App.scss';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import FaqPage from './components/FaqPage/FaqPage';
import AboutPage from './components/AboutPage/AboutPage';
import PartnersPage from './components/PartnersPage/PartnersPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<LandingPage />}
        />
        <Route
          path="/login"
          exact={true}
          element={<Login />}
        />
        <Route
          path="/contact"
          exact={true}
          element={<ContactPage />}
        />
        <Route
          path="/faq"
          exact={true}
          element={<FaqPage />}
        />
        <Route
          path="/about"
          exact={true}
          element={<AboutPage />}
        />
        <Route
          path="/partner"
          exact={true}
          element={<PartnersPage />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
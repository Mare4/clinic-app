import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import MainBlock from "./components/MainBlock/MainBlock";
import Services from "./components/Services/Services";
import DoctorBlock from "./components/DoctorBlock/DoctorBlock";
import AboutUs from "./components/AboutUs/AboutUs";
import CheckUp from "./components/CheckUp/CheckUp";
import OurServices from "./components/OurServices/OurServices";
import Carousel from "./components/Carousel/Сarousel";
import News from "./components/News/News";
import DoctorInfo from "./components/DoctorInfo/DoctorInfo";
import Question from "./components/Question/Question";
import Instagram from "./components/Instagram/Instagram";
import Reviews from "./components/Reviews/Reviews";
import OurMotto from "./components/OurMotto/OurMotto";
import ContactUs from "./components/ContactUs/ContactUs";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <MainBlock />
      <Services />
      <DoctorBlock />
      <AboutUs />
      <CheckUp />
      <OurServices />
      <Carousel />
      <News />
      <DoctorInfo />
      <Question />
      <Instagram />
      <Reviews />
      <OurMotto />
      <ContactUs />
      {/* <Map /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;

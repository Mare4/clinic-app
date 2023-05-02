import React from "react";
import "./App.css";
import Nav from "./Nav";
import MainBlock from "./MainBlock";
import Services from "./Services";
import DoctorBlock from "./DoctorBlock";
import AboutUs from "./AboutUs";
import CheckUp from "./CheckUp";
import OurServices from "./OurServices";
import Carousel from "./Сarousel";
import News from "./News";
import DoctorInfo from "./DoctorInfo";
import Question from "./Question";

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
    </React.Fragment>
  );
}

export default App;

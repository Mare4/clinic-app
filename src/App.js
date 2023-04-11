import React from "react";
import "./App.css";
import Nav from "./Nav";
import MainBlock from "./MainBlock";
import Services from "./Services";
import DoctorBlock from "./DoctorBlock";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <MainBlock />
      <Services />
      <DoctorBlock />
    </React.Fragment>
  );
}

export default App;

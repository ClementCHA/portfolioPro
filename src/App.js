import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SlideMenu from "./Menu/Menu.jsx";
import MainPageContainer from "./MainPage";
import ContactFormContainer from "./ContactForm/ContactForm.container";
import ConvertisseurAndCo from "./Convert/convertisseurAndCo";
import Spotify from "./Spotify";
import Calculator from "./Calculator";

const App = () => {
  return (
    <Router>
      <SlideMenu />
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route path="/contact" element={<ContactFormContainer />} />
        <Route path="/convertor" element={<ConvertisseurAndCo />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
};

export default App;

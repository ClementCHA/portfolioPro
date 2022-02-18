import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SlideMenu from "./Menu/Menu.jsx";
import MainPageContainer from "./MainPage";
import ContactFormContainer from "./ContactForm/ContactForm.container";
import ConvertisseurAndCo from "./Convert/convertisseurAndCo";
import Spotify from "./Spotify";
import Calculator from "./Calculator";
import BackGroundContainer from "./FormationAndExperiences";
import Games from "./Game";
import NotFound from "./404";

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
        <Route path="/background" element={<BackGroundContainer />} />
        <Route path="/games" element={<Games />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

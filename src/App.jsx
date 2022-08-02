import { Hidden } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FollowUs from "./components/FollowUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./Pages/Features";
import Token from "./components/Token/Token";
import Multichain from "./components/Multichain";
import Team from "./components/Team/Team";
import Presale from "./components/Presale/Presale.jsx";
import Footer from "./components/Footer/Footer";
import Roadmap from "./Pages/Roadmap";
import MobileRoadmap from "./Pages/MobileRoadmap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <FollowUs />
                <Multichain />
                <Token />
                <Hidden mdDown>
                  <Roadmap />
                </Hidden>
                <Hidden mdUp>
                  <MobileRoadmap />
                </Hidden>
                <Team />
                <Presale />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useEffect, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import { getAllCountries } from "../requests.js";
import Nav from "./Nav.jsx";

const Homepage = lazy(() => import("./Homepage/Homepage.jsx"));
const CountryDetails = lazy(() => import("./CountryDetails/CountryDetails.jsx"));

const App = () => {

  const [countries, setCountries] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getAllCountries().then((res) => {
      setCountries(res.data);
      setDisplayed(res.data);
    });
  }, []);

  return (
    <>
      <Helmet bodyAttributes={darkMode && { class: "dark" }} />
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/:id" component={CountryDetails} />
            <Route path="/">
              <Homepage countries={countries} displayed={displayed} setDisplayed={setDisplayed} darkMode={darkMode} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;

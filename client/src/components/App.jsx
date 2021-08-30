import React, { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import { getAllCountries } from "../requests.js";
import CountryDetails from "./CountryDetails/CountryDetails.jsx";
import Loading from "./Homepage/Loading.jsx";
import Nav from "./Nav.jsx";

const Homepage = lazy(() => import("./Homepage/Homepage.jsx"));

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
      <Helmet bodyAttributes={{ class: darkMode && "dark" }} />
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="container" style={{position:'relative'}}>
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/:id" component={CountryDetails} />
              <Route path="/">
                <Suspense fallback={<Loading />}>
                  <Homepage
                    countries={countries}
                    displayed={displayed}
                    setDisplayed={setDisplayed}
                    darkMode={darkMode}
                  />
                </Suspense>
              </Route>
            </Switch>
          </AnimatePresence>
      </div>
    </>
  );
};

export default App;

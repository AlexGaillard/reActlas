import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAllCountries } from "../requests.js";
import Nav from "./Nav.jsx";

const Homepage = lazy(() => import("./Homepage/Homepage.jsx"));
const CountryDetails = lazy(() => import("./CountryDetails/CountryDetails.jsx"));

const App = () => {

  const [countries, setCountries] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
        <Suspense fallback={null}>
          <Router>
            <Switch>
              <Route path="/:id" component={CountryDetails} />
              <Route path="/">
                <Homepage countries={countries} displayed={displayed} setDisplayed={setDisplayed} darkMode={darkMode} />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </>
  );
};

export default App;

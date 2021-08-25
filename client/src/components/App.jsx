import React, { useState, useEffect, lazy, Suspense } from "react";
import { getAllCountries } from "../requests.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "./Nav.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";

const Homepage = lazy(() => import("./Homepage.jsx"));
const CountryDetails = lazy(() => import("./CountryDetails.jsx"));

const App = () => {
  const [countries, setCountries] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filterString, setFilterString] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!countries.length) {
      getAllCountries().then((res) => {
        setCountries(res.data);
        setDisplayed(res.data);
      });
    }
  }, [countries]);

  useEffect(() => {
    handleFilterSearch();
  }, [searchString]);

  useEffect(() => {
    handleFilterSearch();
  }, [filterString]);

  const handleFilterSearch = () => {
    const filteredCountries = countries.filter((country) => {
      let name = country.name.toLowerCase();
      let region = country.region.toLowerCase();
      if (searchString && filterString)
        return (
          name.includes(searchString.toLowerCase()) && region === filterString
        );
      else if (searchString && !filterString)
        return name.includes(searchString.toLowerCase());
      else if (!searchString && filterString) return region === filterString;
      else return country;
    });
    setDisplayed(filteredCountries);
  };

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
                <div id="filter-search">
                  <Search
                    searchString={searchString}
                    setSearchString={setSearchString}
                  />
                  <Filter
                    filterString={filterString}
                    setFilterString={setFilterString}
                  />
                </div>
                <Homepage
                  displayed={displayed}
                  searchString={searchString}
                  darkMode={darkMode}
                />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </>
  );
};

export default App;

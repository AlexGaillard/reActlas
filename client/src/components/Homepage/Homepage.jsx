import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SearchFilter from "./SearchFilter/SearchFilter.jsx";
import NotFound from "./NotFound.jsx";
import CountryList from "./CountryList.jsx";
import Loading from "./Loading.jsx";
import BackToTop from "./BackToTop.jsx";

const Homepage = ({ countries, displayed, setDisplayed, darkMode }) => {

  const [searchString, setSearchString] = useState("");
  const [filterString, setFilterString] = useState("");

  return (
    <>
      <SearchFilter
        searchString={searchString}
        setSearchString={setSearchString}
        filterString={filterString}
        setFilterString={setFilterString}
        countries={countries}
        setDisplayed={setDisplayed}
      />
      <div id="countries">
        <Helmet>
          {darkMode ? (
            <link id="favicon" rel="icon" href="favicon_dark.png" />
          ) : (
            <link id="favicon" rel="icon" href="favicon_light.png" />
          )}
        </Helmet>
        {!displayed.length && searchString ? (
          <NotFound />
        ) : displayed.length ? (
          <CountryList displayed={displayed} />
        ) : (
          <Loading />
        )}
      </div>
      <BackToTop />
    </>
  );
};

export default Homepage;

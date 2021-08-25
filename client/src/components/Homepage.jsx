import React from "react";
import NotFound from "./Homepage/NotFound.jsx";
import { Helmet } from "react-helmet";
import DisplayCountries from "./Homepage/DisplayCountries.jsx";
import Loading from "./Homepage/Loading.jsx";

const Homepage = ({ displayed, searchString, darkMode }) => {
  return (
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
        <DisplayCountries displayed={displayed} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Homepage;

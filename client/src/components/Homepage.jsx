import React from "react";
import NotFound from "./Homepage/NotFound.jsx";
import DisplayCountries from "./Homepage/DisplayCountries.jsx";
import Loading from "./Homepage/Loading.jsx";

const Homepage = ({ displayed, searchString }) => {
  return (
    <div id="countries">
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

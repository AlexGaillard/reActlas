const axios = require("axios");

const getAllCountries = () => {
  let options = {
    method: "get",
    url: "https://restcountries.eu/rest/v2/all",
    params: {
      fields:
        "flag;name;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders",
    },
  };

  return axios(options);
};

const getBorders = (searchString) => {
  let options = {
    method: "get",
    url: `https://restcountries.eu/rest/v2/alpha`,
    params: {
      codes: searchString,
      fields:
        "flag;name;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders",
    },
  };

  return axios(options);
};

module.exports = {
  getAllCountries,
  getBorders,
};

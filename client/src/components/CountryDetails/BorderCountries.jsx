import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBorders } from "../../requests.js";

const BorderCountries = ({ countryBorders }) => {
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    let queryString = "";
    if (countryBorders.length) {
      countryBorders.forEach((border) => (queryString += border + ";"));
      getBorders(queryString).then((res) => {
        setBorders(res.data);
      });
    }
  }, []);

  return (
    <div>
      <p>
        <span>Border Countries:</span>
      </p>
      {borders.length ? (
        borders.map((border) => {
          return (
            <Link
              to={{ pathname: `/${border.name}`, state: { border } }}
              key={border.name}
            >
              <button>{border.name}</button>
            </Link>
          );
        })
      ) : (
        <p>None</p>
      )}
    </div>
  );
};

export default BorderCountries;

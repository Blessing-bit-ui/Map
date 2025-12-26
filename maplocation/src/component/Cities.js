import CityList from "./CityList";
import { useEffect, useState } from "react";
import { useCities } from "../ContextProvider/CityProvider";

function Cities() {
  const { cities, fetchCities } = useCities();
  useEffect(
    function () {
      fetchCities();
    },
    [cities]
  );
  return (
    <ul>
      {cities.map((city) => (
       <CityList city={city} key={city.id}/>
      ))}
    </ul>
  );
}

export default Cities;

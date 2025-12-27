import CityList from "./CityList";
import styles from "../modules/Cities.module.css";
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
    <ul  className={styles.cityList}>
      {cities.map((city) => (
       <CityList city={city} key={city.id}/>
      ))}
    </ul>
  );
}

export default Cities;

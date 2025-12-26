import CountryLists from "./CountryList";
import { useEffect } from "react";
import { useCities } from "../ContextProvider/CityProvider";

function Countries() {
  const { cities, fetchCities } = useCities();
  useEffect(
      function () {
        fetchCities();
      },
      [cities]
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country,
     emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul>
      {countries.map((country) => (
       <CountryLists country={country}/>
      ))}
    </ul>
  );
}

export default Countries;

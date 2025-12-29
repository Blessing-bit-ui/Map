import styles from "../modules/CityList.module.css"
import { NavLink } from "react-router-dom"
import { useCities } from "../ContextProvider/CityProvider"
function CityList({city}) {
    const {cityName, emoji, id, position} =city
    const {currentCity} = useCities()
    return (
      <ul>
        <NavLink
          className={`${styles.cityItem} ${
            id === currentCity.id ? styles["cityItem--active"] : ""
          }`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          {cityName}
        </NavLink>
      </ul>
    );
}

export default CityList

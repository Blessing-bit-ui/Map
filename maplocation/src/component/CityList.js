import styles from "../modules/CityList.module.css"
import { NavLink } from "react-router-dom"
function CityList({city}) {
    const {cityName, emoji, id, position} =city
    return (
        <ul>
         <NavLink  className={styles.cityItem} to={`${cityName}&id=${id}?lat=${position.lat}&lng=${position.lng}`}>
         {cityName}
         </NavLink>   
        </ul>
    )
}

export default CityList

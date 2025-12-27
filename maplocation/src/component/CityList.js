 import { Link } from "react-router-dom"
function CityList({city}) {

    const {cityName, emoji, id, position} =city
    return (
        <ul>
         <Link to={`${cityName}&id=${id}?lat=${position.lat}&lng=${position.lng}`}>
         {cityName}
         </Link>   
        </ul>
    )
}

export default CityList

 import {useEffect, useState} from "react"
 const Base_Url = "http://localhost:8000";

function Cities() {
const [cities, setCities] =useState([])
 useEffect(function(){
 async function fetchCities(){
const res= await fetch (`${Base_Url}/cities`)
const data = await res.json()
setCities(data)
}
fetchCities()
 },[cities])

    return (
       <div>
        {cities.map((city)=>(
            <li key={city.id}>
              {city.cityName}
            </li>
        ))}
       </div>
    )
}

export default Cities

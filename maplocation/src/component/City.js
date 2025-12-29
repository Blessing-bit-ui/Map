import {useEffect} from "react"
import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useCities } from "../ContextProvider/CityProvider"

function City() {
   // const [searchParams, setSearchParams] =useSearchParams()
    //const lat =searchParams.get("lat")
    //const lng =searchParams.get("lng")
    const {id} = useParams()
    const {getCity, currentCity} = useCities()

    const {cityName} = currentCity

    useEffect(function(){
     getCity(id)
    }, [getCity, id])
    return (
        <div>
          <p>
      This is the City {cityName}
      his is the emoji
            </p>  
        </div>
    )
}

export default City

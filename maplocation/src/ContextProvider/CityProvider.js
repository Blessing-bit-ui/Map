 import {useEffect, useState, useContext, createContext} from "react"
 const Base_Url = "http://localhost:8000";

 const citiesContext = createContext()

 function CityProvider({children}) {
const [cities, setCities] =useState([])
 async function fetchCities(){
const res= await fetch (`${Base_Url}/cities`)
const data = await res.json()
setCities(data)
}
    return (
        <div>
           <citiesContext.Provider value={{
            cities,
            setCities,
            fetchCities,
           }}>
            {children}
            </citiesContext.Provider> 
        </div>
    )
}
 function useCities(){
    const context= useContext(citiesContext)
    if(!context) throw new Error (" This is used outside of Its context")
    return context
 }

export {CityProvider, useCities}
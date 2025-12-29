import { useSearchParams } from "react-router-dom"
import { MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import styles from "../modules/Map.module.css"
import { useState } from "react";

function Map() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [position, setPosition] =useState()
 


return (
  <div className={styles.mapContainer}>
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);}

export default Map




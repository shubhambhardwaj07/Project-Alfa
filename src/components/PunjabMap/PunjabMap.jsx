"use client";

import React from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import styles from "./PunjabMap.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const iconImage = "/images/location.gif";
import L from "leaflet";
import dynamic from "next/dynamic";

// const { MapContainer, TileLayer, Marker, Popup } = dynamic(
//   () => import("react-leaflet"),
//   {
//     ssr: false, // This ensures the component is not SSR'd
//   }
// );
// const L = dynamic(() => import("leaflet"), {
//   ssr: false, // This ensures the component is not SSR'd
// });

const svg = `
<svg id="mePin" xmlns="http://www.w3.org/2000/svg" width="43.3" height="42.4" viewBox="0 0 43.3 42.4">
  <path class="ring_outer" fill="#878787" d="M28.6 23c6.1 1.4 10.4 4.4 10.4 8 0 4.7-7.7 8.6-17.3 8.6-9.6 0-17.4-3.9-17.4-8.6 0-3.5 4.2-6.5 10.3-7.9.7-.1-.4-1.5-1.3-1.3C5.5 23.4 0 27.2 0 31.7c0 6 9.7 10.7 21.7 10.7s21.6-4.8 21.6-10.7c0-4.6-5.7-8.4-13.7-10-.8-.2-1.8 1.2-1 1.4z"/>
  <path class="ring_inner" fill="#5F5F5F" d="M27 25.8c2 .7 3.3 1.8 3.3 3 0 2.2-3.7 3.9-8.3 3.9-4.6 0-8.3-1.7-8.3-3.8 0-1 .8-1.9 2.2-2.6.6-.3-.3-2-1-1.6-2.8 1-4.6 2.7-4.6 4.6 0 3.2 5.1 5.7 11.4 5.7 6.2 0 11.3-2.5 11.3-5.7 0-2-2.1-3.9-5.4-5-.7-.1-1.2 1.3-.7 1.5z"/>
  <path class="mePin" d="M21.6 8.1a4 4 0 0 0 4-4 4 4 0 0 0-4-4.1 4.1 4.1 0 0 0-4.1 4 4 4 0 0 0 4 4.1zm4.9 8v-3.7c0-1.2-.6-2.2-1.7-2.6-1-.4-1.9-.6-2.8-.6h-.9c-1 0-2 .2-2.8.6-1.2.4-1.8 1.4-1.8 2.6V16c0 .9 0 2 .2 2.8.2.8.8 1.5 1 2.3l.2.3.4 1 .1.8.2.7.6 3.6c-.6.3-.9.7-.9 1.2 0 .9 1.4 1.7 3.2 1.7 1.8 0 3.2-.8 3.2-1.7 0-.5-.3-.9-.8-1.2l.6-3.6.1-.7.2-.8.3-1 .1-.3c.3-.8 1-1.5 1.1-2.3.2-.8.2-2 .2-2.8z" fill="#282828"/>
</svg>
`;

const iconPerson = new L.DivIcon({
  className: "leaflet-data-marker",
  html: svg.replace("#", "%23"), // Replace # with %23 for URL encoding
  iconAnchor: [22, 28],
  iconSize: [26, 32],
  popupAnchor: [0, -30],
});

const position = [31.634, 74.8723]; // Coordinates for Amritsar, Punjab

export const PunjabMap = () => {
  return (
    <div className={styles.mapContainer} style={{ backgroundColor: "#171717" }}>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }} // Ensure full width and height
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png" // Use a dark-themed tile layer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={position} icon={iconPerson}>
          <Popup>Wanna join for coffee?, if yes then hit the 💌</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

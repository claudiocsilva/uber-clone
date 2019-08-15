import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCrk18P8IlS2TsXbL8We-u8Uyu0ozIVrAM"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;

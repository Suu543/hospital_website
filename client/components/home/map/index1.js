import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { mapStyles } from "./mapStyles";
import styled from "styled-components";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const containerStyle = {
  width: "50vw",
  height: "70vh",
};

const center = {
  lat: 35.8543040967178,
  lng: 128.61540044041718,
};

const options = {
  styles: mapStyles,
};

function Map() {
  const [zoomLevel, setZoomLevel] = useState(process.env.zoomLevel);
  const [lat, setLat] = useState(
    process.env.latitudeForFocusingMap || 35.8543040967178
  );
  const [lng, setLng] = useState(
    process.env.longitudeForFocusingMap || 128.61540044041718
  );

  const [state, setState] = useState({
    activeMarker: {},
    showingInfoWindow: false,
    text: "",
  });

  const onMarkerClick = (props, marker) => {
    setState({
      ...state,
      activeMarker: marker,
      showingInfoWindow: true,
      text: marker.text || "",
    });
  };

  const onInfoWindowClose = () => {
    setState({
      activeMarker: null,
      showingInfoWindow: false,
    });
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCaEskbiBzXNfuPVaZqD5HCwWXjuMX3Y6s",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
        options={options}
      >
        <Marker
          position={{
            lat: process.env.latitudeForMarker,
            lng: process.env.longitudeForMarker,
          }}
          icon={process.env.googleMapsMarkerIcon}
          onClick={onMarkerClick}
          text="some text"
        />
      </GoogleMap>
    </MapContainer>
  );
}

export default Map;

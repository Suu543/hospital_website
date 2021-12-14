import React, { useState } from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import mapStyles from "./mapStyle";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MapWrapper = styled.div`
  height: 60vh;
  width: 50vw;
`;

function MapComponent(props) {
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

  return (
    <MapWrapper>
      <Map
        google={props.google}
        zoom={zoomLevel}
        styles={mapStyles}
        disableDefaultUI={process.env.useDefaultUI}
        initialCenter={{
          lat,
          lng,
        }}
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
        <InfoWindow
          marker={state.activeMarker}
          onClose={onInfoWindowClose}
          visible={state.showingInfoWindow}
        >
          <div>
            <p>{state.text}</p>
          </div>
        </InfoWindow>
      </Map>
    </MapWrapper>
  );
}

export default GoogleApiWrapper({ apiKey: process.env.apiKey })(MapComponent);

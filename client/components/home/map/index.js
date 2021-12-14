import React, { useState, Fragment, useEffect } from "react";
import styled from "styled-components";

import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapContainer = styled.div`
  position: relative;
`;

const NavigateContainer = styled.div`
  position: absolute;
  z-index: 5;
  left: 12px;
  top: 61px;
  display: flex;
  flex-direction: column;
  background-color: white;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 15%;

  a {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    font-weight: 600;
  }
`;

const Map = () => {
  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [center, setCenter] = useState({
    lat: 35.8543040967178,
    lng: 128.61540044041718,
  });
  const [zoom, setZoom] = useState(5);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [infoOpen, setInfoOpen] = useState(true);

  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Enter your own Google Maps API key
    googleMapsApiKey: process.env.apiKey,
  });

  // The places I want to create markers for.
  // This could be a data-driven prop.
  const myPlaces = [
    {
      id: "마리아유외과",
      pos: { lat: 35.8543040967178, lng: 128.61540044041718 },
    },
  ];

  // Iterate myPlaces to size, center, and zoom map to contain all markers
  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    myPlaces.map((place) => {
      bounds.extend(place.pos);
      return place.id;
    });
    map.fitBounds(bounds);
  };

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
    setSelectedPlace(myPlaces[0]);
  };

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, place) => {
    return setMarkerMap((prevState) => {
      return { ...prevState, [place.id]: marker };
    });
  };

  const markerClickHandler = (event, place) => {
    console.log(place);
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // If you want to zoom in a little on marker click

    // if you want to center the selected Marker
    setCenter(place.pos);
  };

  const renderMap = () => {
    return (
      <MapContainer>
        <NavigateContainer>
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%88%98%EC%84%B1%EA%B5%AC+%EB%AA%85%EB%8D%95%EB%A1%9C+414/@35.8541302,128.6154219,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3565e24a16e67feb:0x7d10869af14437f1!2m2!1d128.6154219!2d35.8541302"
          >
            <img src="./navigation.png" />
            길찾기
          </a>
        </NavigateContainer>
        <GoogleMap
          // Do stuff on map initial laod
          onLoad={loadHandler}
          // Save the current center position in state
          // Save the user's map click position
          onClick={(e) => setClickedLatLng(e.latLng.toJSON())}
          center={center}
          zoom={zoom}
          mapContainerStyle={{
            height: "70vh",
            width: "100%",
          }}
        >
          {myPlaces.map((place) => (
            <Marker
              key={place.id}
              position={place.pos}
              onLoad={(marker) => markerLoadHandler(marker, place)}
              onClick={(event) => markerClickHandler(event, place)}
              // Not required, but if you want a custom icon:
              icon={{
                path: "M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602",
                fillColor: "004C52f",
                fillOpacity: 1.0,
                strokeWeight: 3,
                scale: 2,
              }}
            />
          ))}

          {infoOpen && selectedPlace && (
            <InfoWindow
              anchor={markerMap[selectedPlace.id]}
              onCloseClick={() => setInfoOpen(!infoOpen)}
            >
              <div>
                <h3>{selectedPlace.id}</h3>
                <div>대구광역시 수성구 명덕로 414</div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </MapContainer>
    );
  };

  setTimeout(() => {
    setZoom(18);
  }, 1000);

  return isLoaded ? renderMap() : null;
};

export default Map;

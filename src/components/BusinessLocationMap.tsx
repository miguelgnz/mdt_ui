import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "380px",
};

// Dark, low-contrast map that matches the site palette.
const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#151515" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#a3a09a" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#2a2a2a" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0f0f0f" }],
    },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
  ],
};

const center = {
  lat: 14.61954,
  lng: -90.514122,
};

const BusinessLocationMap = () => {
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState<any>(null);

  useEffect(() => {
    if (map) {
      setMarkerPosition(center);
    }
  }, [map]);
  const onLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    map.setCenter(bounds);

    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <GoogleMap
      onLoad={onLoad}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={mapOptions}
      onUnmount={onUnmount}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
};

export default BusinessLocationMap;

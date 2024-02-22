import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "16px",
};

const center = {
  lat: 14.619540,
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
      zoom={20}
      onUnmount={onUnmount}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
};

export default BusinessLocationMap;

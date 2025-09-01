import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const SetViewOnPosition = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position && position.length === 2) {
 
      map.flyTo(position, 13, {
        animate: true,
        duration: 3,
      });
    }
  }, [position, map]);

  return null;
};

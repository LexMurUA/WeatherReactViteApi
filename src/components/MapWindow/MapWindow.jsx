import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useAppContext } from "../../Context/Context";
import "./MapWindow.scss";
import { Loading } from "../Loading/Loading";
import { SetViewOnPosition } from "../SetViewOnPosition/SetViewOnPosition";

let DefaultIcon = L.icon({ iconUrl, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

export const MapWindow = () => {
  const { position, city } = useAppContext();

  if (!position || position.length !== 2 || city === null) {
    return;
  }

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Ваши координаты: {position[0].toFixed(3)}, {position[1].toFixed(3)}
        </Popup>
        <SetViewOnPosition position={position} />
      </Marker>
    </MapContainer>
  );
};

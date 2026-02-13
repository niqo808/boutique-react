import { useEffect, useRef, useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Sucursal } from "@/data/sucursales";
import markerLogo from "@/assets/logo.svg";

// Custom SVG marker icon
function createMarkerIcon(isActive) {
  const html = `
  <img
    src="${markerLogo}"
    class="marker-logo"
    style="width: 32px; height: 44px;"
  />
`;


  return L.divIcon({
    html,
    className: "custom-marker",
    iconSize: [32, 44],
    iconAnchor: [16, 44],
    popupAnchor: [0, -44],
  });
}


// Component to fly to a location
function FlyTo({ center, zoom }: { center: [number, number] | null; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

interface MapViewProps {
  sucursales: Sucursal[];
  selectedId: number | null;
  onMarkerClick: (id: number) => void;
}

export default function MapView({ sucursales, selectedId, onMarkerClick }: MapViewProps) {
  const mapRef = useRef<L.Map | null>(null);

  const flyCenter: [number, number] | null = selectedId
    ? (() => {
        const s = sucursales.find((s) => s.id === selectedId);
        return s ? [s.lat, s.lng] : null;
      })()
    : null;

  const handleMapReady = useCallback((map: L.Map) => {
    mapRef.current = map;
  }, []);

  // Center to fit all markers
  const defaultCenter: [number, number] = [-34.46, -58.75];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={11}
      className="w-full h-full"
      zoomControl={false}
      ref={handleMapReady as any}
      style={{ background: "#e8e0d0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo center={flyCenter} zoom={15} />
      {sucursales.map((s) => (
        <Marker
          key={s.id}
          position={[s.lat, s.lng]}
          icon={createMarkerIcon(selectedId === s.id)}
          eventHandlers={{
            click: () => onMarkerClick(s.id),
          }}
        />
      ))}
    </MapContainer>
  );
}

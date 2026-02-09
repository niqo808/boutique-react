import { useEffect, useRef, useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Sucursal } from "@/data/sucursales";

// Custom SVG marker icon
function createMarkerIcon(isActive: boolean) {
  const color = isActive ? "#C5A55A" : "#722F37";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 28 16 28s16-16 16-28C32 7.163 24.837 0 16 0z" fill="${color}" stroke="#fff" stroke-width="1.5"/>
    <circle cx="16" cy="15" r="7" fill="#fff" opacity="0.9"/>
    <circle cx="16" cy="15" r="4" fill="${color}"/>
  </svg>`;

  return L.divIcon({
    html: svg,
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

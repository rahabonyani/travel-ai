"use client";

import dynamic from "next/dynamic";

const MapContainer = dynamic(() =>
  import("react-leaflet").then((mod) => mod.MapContainer)
);
const TileLayer = dynamic(() =>
  import("react-leaflet").then((mod) => mod.TileLayer)
);

export default function LeafletPage() {
  const position = { lat: 51.505, lng: -0.09 };
  return (
    <div className="p-4 h-60 w-80 relative">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

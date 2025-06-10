"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/Leaflet"
import "leaflet/dist/leaflet-src"
import "leaflet/dist/leaflet-src.esm"

export default function Map() {
  useEffect(() => {
    const container = document.getElementById("map");
    if (!container) return;

    const map = L.map("map").setView([35.700105, 51.400394], 14);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map);

    L.marker([35.700105, 51.400394], {
      icon: L.icon({
        iconUrl: "/images/map/marker-icon.png",
        shadowUrl: "/images/map/marker-shadow.png",
      }),
    })
      .addTo(map)
      .bindPopup("<b>Location</b>")
      .openPopup();
  }, []);

  return (
    <div
      className="w-full h-[400px] rounded-xl overflow-hidden shadow-md"
      id="map"
    ></div>
  );
}

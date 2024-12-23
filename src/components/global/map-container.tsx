"use client";

import { useState } from "react";

import { Map, Marker, Popup } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import { MapPin } from "@phosphor-icons/react";

interface MapContainerProps {
  long: number;
  lat: number;
  peakName: string;
  peakHeight: number;
}

export const MapContainer = ({
  long,
  lat,
  peakName,
  peakHeight,
}: MapContainerProps) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Map
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: 7,
      }}
      style={{ width: 600, height: 400, borderRadius: 12 }}
      mapStyle="https://tiles.stadiamaps.com/styles/stamen_terrain.json"
    >
      <Marker
        longitude={long}
        latitude={lat}
        onClick={(e: { originalEvent: MouseEvent }) => {
          e.originalEvent.stopPropagation();
          setShowPopup(true);
        }}
        color="#FF0000"
        style={{ cursor: "pointer", zIndex: 1 } as const}
      >
        <div className="flex cursor-pointer flex-col items-center">
          <MapPin weight="fill" className=" fill-branding-green size-9" />
        </div>
      </Marker>

      {showPopup && (
        <Popup
          longitude={long}
          latitude={lat}
          anchor="top"
          offset={[0, 10]}
          onClose={() => setShowPopup(false)}
          closeOnClick={true}
          style={{ zIndex: 2 }}
          className="flex flex-col gap-y-2.5 items-center justify-center"
        >
          <h2 className="text-xl font-serif font-bold">{peakName}</h2>
          <p>{peakHeight} m</p>
        </Popup>
      )}
    </Map>
  );
};

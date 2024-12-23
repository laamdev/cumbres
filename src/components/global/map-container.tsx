"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import { useState } from "react";
import clsx from "clsx";
import Map, { Marker, Popup } from "react-map-gl";
import { MapPin } from "@phosphor-icons/react";

interface PopupProps {
  latitude: number;
  longitude: number;
  peakName: string;
  peakHeight: number;
}

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
  const [popupInfo, setPopupInfo] = useState<PopupProps | undefined>();

  return (
    <Map
      style={{ width: "100%", height: "100%", borderRadius: "12px" }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        latitude: lat,
        longitude: long,
        zoom: 11,
      }}
      attributionControl={false}
      doubleClickZoom
    >
      <Marker
        latitude={lat}
        longitude={long}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo({
            peakName,
            peakHeight,
            latitude: lat,
            longitude: long,
          });
        }}
      >
        <div className="flex cursor-pointer flex-col items-center">
          <MapPin
            weight="fill"
            className="tw-transition size-7 fill-branding-green  sm:size-9 hover:scale-110 tw-transition"
          />
        </div>
      </Marker>

      {popupInfo && (
        <Popup
          anchor="top"
          latitude={popupInfo?.latitude}
          longitude={popupInfo?.longitude}
          closeButton={false}
          onClose={() => setPopupInfo(null!)}
          offset={[0, 5]}
        >
          {popupInfo && (
            <div>
              <div
                className={clsx(
                  "sm:text-base text-sm font-bold text-branding-green"
                )}
              >
                {peakName}
              </div>
              <p className="text-medium">{peakHeight} m</p>
            </div>
          )}
        </Popup>
      )}
    </Map>
  );
};

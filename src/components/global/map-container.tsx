"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import { useMemo, useState } from "react";
import clsx from "clsx";
import getCenter from "geolib/es/getCenter";
import { FlagTriangleRightIcon } from "lucide-react";
import Map, { Marker, Popup } from "react-map-gl";

interface IPopup {
  latitude: number;
  longitude: number;
  name: string;
  elevation: number;
}

interface MapContainerProps {
  peaks: Array<IPopup & { id: string }>;
  zoom: number;
}

export const MapContainer = ({ peaks, zoom }: MapContainerProps) => {
  const [popupInfo, setPopupInfo] = useState<IPopup | undefined>();
  const coordinates = peaks.map((peak) => ({
    latitude: peak.latitude,
    longitude: peak.longitude,
  }));

  const center = getCenter(coordinates);

  const pins = useMemo(
    () =>
      peaks.map((peak) => (
        <Marker
          key={peak.id}
          latitude={peak.latitude}
          longitude={peak.longitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(peak);
          }}
        >
          <div className="flex cursor-pointer flex-col items-center">
            <FlagTriangleRightIcon className="tw-transition h-5 w-5 fill-white stroke-branding-green hover:fill-branding-green sm:h-7 sm:w-7" />
          </div>
        </Marker>
      )),
    [peaks]
  );

  return (
    <Map
      style={{ width: "100%", height: "100%", borderRadius: "12px" }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        // @ts-expect-error xxx
        latitude: center.latitude,
        // @ts-expect-error xxx
        longitude: center.longitude,
        zoom: zoom,
      }}
      attributionControl={false}
      doubleClickZoom
    >
      {pins}

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
                {popupInfo.name}
              </div>
              <p className="text-medium">{popupInfo.elevation} m</p>
            </div>
          )}
        </Popup>
      )}
    </Map>
  );
};

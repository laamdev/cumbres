"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import { useMemo, useState } from "react"
import clsx from "clsx"
import getCenter from "geolib/es/getCenter"
import { MapPinIcon } from "lucide-react"
import Map, { Marker, Popup } from "react-map-gl"

import { UserPeak } from "@/types/payloads"

interface ICoordinates {
  lat: number
  lng: number
}

interface IPopup {
  latitude: number
  longitude: number
  name: string
  elevation: number
}

export const MapContainer = ({
  peaks,
  zoom,
}: {
  peaks: UserPeak[]
  zoom: number
}) => {
  const [popupInfo, setPopupInfo] = useState<IPopup | undefined>()
  const coordinates = peaks.map((peak) => ({
    latitude: peak.latitude,
    longitude: peak.longitude,
  }))

  const center = getCenter(coordinates)

  const pins = useMemo(
    () =>
      peaks.map((peak) => (
        <Marker
          key={peak.id}
          latitude={peak.latitude}
          longitude={peak.longitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation()
            setPopupInfo(peak)
          }}
        >
          <div className="flex cursor-pointer flex-col items-center">
            <MapPinIcon className="tw-transition h-7 w-7 fill-branding-white stroke-branding-green hover:scale-110 sm:h-10 sm:w-10" />
          </div>
        </Marker>
      )),
    [peaks]
  )

  return (
    <Map
      style={{ width: "100%", height: "100%" }}
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
  )
}

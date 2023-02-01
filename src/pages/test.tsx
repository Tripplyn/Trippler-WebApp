import * as React from "react";
import { useRef, useCallback, useEffect, useState } from "react";
import type { Container } from "react-dom";
import { render } from "react-dom";
import type { MapRef } from "react-map-gl";
import Map from "react-map-gl";

import ControlPanel from "./control-panel";
import Image from "next/image";

const initialViewState = {
  latitude: 37.7751,
  longitude: -122.4193,
  zoom: 11,
  bearing: 0,
  pitch: 0,
};

export default function App() {
  const mapRef = useRef<MapRef>() ?? null;

  const onSelectCity = useCallback(
    ({ longitude, latitude }: { longitude: number; latitude: number }) => {
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
    },
    [mapRef]
  );

  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="flex flex-row items-center justify-center pt-4">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <h1 className="text-8xl text-indigo-900">Trippler</h1>
          </div>
          <ControlPanel onSelectCity={onSelectCity} />
        </div>
        <Map
          ref={mapRef}
          initialViewState={initialViewState}
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
          mapboxAccessToken={
            "pk.eyJ1IjoieXVyaWFjaGVybWFubiIsImEiOiJja3o0Y2hxZ28wNGRoMnhwazdhYm1qdzkzIn0.d80_ASGDAuZ7uGhIDCMXbw"
          }
          style={{ width: 1200, height: "100vh" }}
        />
      </div>
    </div>
  );
}

export function renderToDom(container: Container | null) {
  render(<App />, container);
}

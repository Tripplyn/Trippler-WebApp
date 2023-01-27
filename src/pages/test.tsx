import * as React from "react";
import { useRef, useCallback } from "react";
import type { Container } from "react-dom";
import { render } from "react-dom";
import type { MapRef } from "react-map-gl";
import Map from "react-map-gl";

import ControlPanel from "./control-panel";

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
    <>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        mapboxAccessToken={
          "pk.eyJ1IjoieXVyaWFjaGVybWFubiIsImEiOiJja3o0Y2hxZ28wNGRoMnhwazdhYm1qdzkzIn0.d80_ASGDAuZ7uGhIDCMXbw"
        }
      />
      <ControlPanel onSelectCity={onSelectCity} />
    </>
  );
}

export function renderToDom(container: Container | null) {
  render(<App />, container);
}

import * as React from "react";

import CITIES from "../../.data/cities.json";

function ControlPanel(props: {
  onSelectCity: (arg0: {
    city: string;
    population: string;
    image: string;
    state: string;
    latitude: number;
    longitude: number;
  }) => void;
}) {
  return (
    <div className="ag-row-position-absolute top-0 right-0 m-8 max-w-4xl rounded-lg bg-slate-300 p-12">
      <hr />

      {CITIES.map(
        (city, index) => (
          <div key={`btn-${index}`} className="input">
            <input
              type="radio"
              name="city"
              id={`city-${index}`}
              defaultChecked={city.city === "San Francisco"}
              onClick={() => props.onSelectCity(city)}
            />
            <label htmlFor={`city-${index}`}>{city.city}</label>
          </div>
        )
      )}
    </div>
  );
}

export default React.memo(ControlPanel);

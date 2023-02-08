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
    <div className="top-0  ml-20 mr-20 mt-1 rounded-lg  p-6">

      <div className='pb-2'>
        <input type="text"
               className="bg-gray-700 text-white text-sm rounded-lg w-full p-2.5"
               placeholder="Add a new place"
        />
      </div>

      {CITIES.filter((city) => city.state === "California").map(
        (city, index) => (
          <div key={`btn-${index}`} className="pt-5">
              <div
                className="cursor-pointer flex flex-row items-center rounded-lg bg-principal p-2 text-white"
                onClick={() => props.onSelectCity(city)}
              >
                <img
                  src={city.image}
                  alt=""
                  className="max-h-20 max-w-3xl rounded-lg object-scale-down"
                />
                <div className="flex flex-col pl-4">
                  <p className="text-3xl font-semibold">{city.city}</p>
                  <p className="text-sm italic ">Lat: {city.latitude}</p>
                  <p className="text-sm italic ">Long: {city.longitude}</p>
                </div>
              </div>
          </div>
        )
      )}
    </div>
  );
}

export default React.memo(ControlPanel);

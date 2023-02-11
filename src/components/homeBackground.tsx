import * as React from "react";

export default function HomeBackground() {
  return (
    <div
      className="min-h-screen bg-cover bg-center "
      style={{ backgroundImage: "url(/homepage/mikonos.jpg)" }}
    >
      <div className="flex items-center p-14">
        <img src="/logo.png" className="mr-2 h-20 h-20" alt="Trippler Logo" />
        <span className="self-center text-6xl text-white">Trippler</span>
      </div>
      <div className="flex flex-row-reverse pr-6 text-2xl text-white">
        <div className="flex flex-col">
          <p>Your unique route pathfinder.</p>
          <p>the ultimate photo album.</p>
        </div>
      </div>
      <div className="flex flex-col text-white pl-16">
        <p className="text-8xl">Mykonos</p>
        <div className="flex flex-row">
          <p className="text-lg pr-8 pt-4 cursor-pointer">Travel Guide</p>
          <p className="text-lg pr-8 pt-4 cursor-pointer">Entertainment</p>
          <p className="text-lg pr-8 pt-4 cursor-pointer">Parties</p>
          <p className="text-lg pr-8 pt-4 cursor-pointer">Hidden Gems</p>
        </div>
      </div>
      <div className="flex flex-row justify-between text-white items-center p-16 absolute inset-x-0 bottom-0 ">
        <div />
        <button className="bg-buttonCities rounded-xl p-4">Start my journey now!</button>
        <span className="cursor-pointer text-lg">About us</span>
      </div>
    </div>

  );
}

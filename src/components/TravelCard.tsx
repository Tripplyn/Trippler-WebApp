import * as React from "react";

interface Props {
  name: string;
}
export default function TravelCard({ name }: Props) {
  return (
    <div className="relative p-6 text-white">
      <div className="top-0 rounded-lg bg-principal p-6 text-2xl text-white shadow-md">
        {name}
      </div>
      <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-red-500 text-lg">
        -
      </button>
    </div>
  );
}

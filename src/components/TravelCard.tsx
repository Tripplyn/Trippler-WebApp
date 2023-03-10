import * as React from "react";
import { Travel } from "@prisma/client";

interface Props {
  travel: Travel;
  onDelete: (id: number) => void;
}
export default function TravelCard({ travel, onDelete }: Props) {
  return (
    <div className="relative p-6 text-white">
      <div className="top-0 rounded-lg bg-principal p-6 text-2xl text-white shadow-md">
        {travel.travelName}
      </div>
      <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-red-500 text-lg" onClick={() => onDelete(travel.id)}>
        -
      </button>
    </div>
  );
}

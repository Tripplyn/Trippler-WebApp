import * as React from "react";

interface Props {
  onClose: () => void;
}
const Createtravel: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="text-whit w-1/2 rounded-lg bg-principal p-4 shadow-md ">
      <div>
        <h1 className="text-4xl text-white">Create a new trip</h1>
      </div>
      <div className="pt-5 pb-2">
        <hr />
      </div>
      <div className="flex flex-col items-center pb-4">
        <div className="w-full pt-4">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-700 p-4 text-sm text-white"
            placeholder="Add the name"
          />
        </div>
        <div className="w-full pt-4">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-700 p-4 text-sm text-white"
            placeholder="Add the start date"
          />
        </div>
        <div className="w-full pt-4">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-700 p-4 text-sm text-white"
            placeholder="Add the end name"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="flex items-center justify-end  rounded bg-red-500 p-4 text-sm text-white"
          onClick={onClose}
        >
          Cancel
        </button>
        <div className="px-2" />
        <button
          type="button"
          className="flex items-center justify-end  rounded bg-blue-800 p-4 text-sm text-white"
        >
          New trip
        </button>
      </div>
    </div>
  );
};

export default Createtravel;

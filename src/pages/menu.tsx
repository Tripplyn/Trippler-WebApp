import * as React from "react";
import Toolbar from "~/components/Toolbar";
import TravelCard from "~/components/TravelCard";
import { api } from "~/utils/api";
import Createtravel from "~/components/CreateTravel";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Menu() {
  const [showCreateTravel, setShowCreateTravel] = React.useState(false);
  const [travelCode, setTravelCode] = React.useState("");

  const travelAll = api.travel.read.useQuery({}).data;

  const handleShowCreateTravel = () => {
    setShowCreateTravel(false);
  };

  return (
    <div className="h-screen w-screen bg-background text-white">
      <Toolbar />
      <div className="flex flex-row p-6 px-20">
        <div className="w-1/2 ">
          <div className="flex flex-row items-center justify-between px-4">
            <h1 className="text-6xl text-white">Your travels</h1>
            <button
              type="button"
              className="flex items-center justify-center  rounded bg-blue-800 p-4 text-sm text-white"
              onClick={() => setShowCreateTravel(!showCreateTravel)}
            >
              New trip
            </button>
          </div>
          <div className="p-1">
            {travelAll?.map((travel) => (
              <QueryClientProvider
                client={queryClient}
                contextSharing={true}
                key={travel.id}
              >
                <TravelCard name={travel.travelName}/>
              </QueryClientProvider>
            ))}
          </div>
        </div>
        {showCreateTravel && <Createtravel onClose={handleShowCreateTravel} />}
      </div>
    </div>
  );
}

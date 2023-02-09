import * as React from "react";
import Toolbar from "~/components/Toolbar";
import TravelCard from "~/components/TravelCard";
import { api } from "~/utils/api";
import Createtravel from "~/components/CreateTravel";
import { QueryClient, QueryClientProvider } from "react-query";
import { Travel } from "@prisma/client";

const queryClient = new QueryClient();

export default function Menu() {
  const [showCreateTravel, setShowCreateTravel] = React.useState(false);
  const [travels, setTravels] = React.useState([] as Travel[]); //NOVO

  const travelAll = api.travel.read.useQuery({}).data;
  const deleteTravel = api.travel.delete.useMutation();

  React.useEffect(() => {
    if (travelAll) {
      setTravels(travelAll);
    }
  }, [travelAll]);

  const handleShowCreateTravel = () => {
    setShowCreateTravel(false);
  };


  const handleOnCreate = (data: any) => {
    const newTravel: Travel = {
      id: data.id,
      travelID: data.travelID,
      travelName: data.travelName,
      travelDateStart: data.travelDateStart,
      travelDateEnd: data.travelDateEnd,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    setTravels((prevTravels) => [...prevTravels, newTravel]);
  };

  const handleOnDelete = async (id: number) => {
    try{
      await deleteTravel.mutate({ id: id });
      console.log(queryClient.invalidateQueries(["travel.read"]));
      setTravels((prevTravels) => prevTravels.filter((travel) => travel.id !== id));
    }catch (error) {
      console.error(error)
    }
  }

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
          <div className="p-3 scrollbar scrollbar-track-slate-700 scrollbar-thumb-principal"
               style={{ height: "500px" }}
          >
            {travels?.map((travel) => (
              <QueryClientProvider
                client={queryClient}
                contextSharing={true}
                key={travel.id}
              >
                <TravelCard travel={travel} onDelete={() => handleOnDelete(travel.id)}/>
              </QueryClientProvider>
            ))}
          </div>
        </div>
        <div className="p-2"/>
        {showCreateTravel && <Createtravel onClose={handleShowCreateTravel} onSuccess={handleOnCreate} />}
      </div>
    </div>
  );
}

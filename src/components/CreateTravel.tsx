import * as React from "react";
import { api } from "~/utils/api";
import { QueryClient } from "react-query";
interface Props {
  onClose: () => void;
  onSuccess: (data: any) => void;
}

interface FormValues {
  name?: string;
}

const queryClient = new QueryClient();

const CreateTravel: React.FC<Props> = ({ onClose, onSuccess }) => {
  const [formValues, setFormValues] = React.useState<FormValues>({});

  const { mutateAsync: createTravel } = api.travel.create.useMutation({
    onSuccess: async (data) => {
      await queryClient.setQueryData(["travel.read"], data);
      onSuccess(data);
    },
    onError: () => {
      console.log("error while creating Travel");
    },
  });

  function handleTextFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleCreateTravel() {
    if (formValues.name) {
      console.log(
        createTravel({
          travelName: formValues.name,
          travelDateStart: new Date(2022, 9, 21),
          travelDateEnd: new Date(2022, 9, 21),
        })
      );
      onClose();
    }
  }

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
            name="name"
            onChange={handleTextFieldChange}
          />
        </div>
        <div className="w-full pt-4">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-700 p-4 text-sm text-white"
            placeholder="Add the start date"
            name="travelDateStart"
          />
        </div>
        <div className="w-full pt-4">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-700 p-4 text-sm text-white"
            placeholder="Add the end name"
            name="travelDateEnd"
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
          onClick={handleCreateTravel}
        >
          New trip
        </button>
      </div>
    </div>
  );
};

export default CreateTravel;

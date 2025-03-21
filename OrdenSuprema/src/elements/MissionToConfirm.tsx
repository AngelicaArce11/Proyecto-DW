import axios from "axios";
import { useEffect, useState } from "react";

interface MissionProps {
  mission: Mission;
  onMissionUpdated: () => void;
}

export const MissionToConfirm = ({
  mission,
  onMissionUpdated,
}: MissionProps) => {
  const [executioner, setExecutioner] = useState<User>();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  //Fijar Executioner
  useEffect(() => {
    axios
      .get(`http://localhost:3000/UserById/${mission.assignedToId}`)
      .then((response) => setExecutioner(response.data))
      .catch((error) => console.error("Error fetching executioner:", error));
  }, []);

  useEffect(() => {
    setImageUrl(`http://localhost:3000/Mission/image/${mission.id}`);
  }, [mission.id]);

  const handleUpdate = async (isConfirmed: boolean) => {
    try {
      await axios
        //Actualizamos el estado de la misión a completed o failed
        .put(`http://localhost:3000/Mission/confirm/${mission.id}`, {
          isConfirmed,
        })
        //Enviamos el pago al ejecutor si la misión es aprobada
        .then(() => {
          if (isConfirmed) {
            axios.put(`http://localhost:3000/UserById/${executioner?.id}`, {
              coins: mission.paymentValue,
            });
          }
          // Llama a al función recibida por props para actualizar las misiones por pantalla
          onMissionUpdated();
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error("Error updating mission:", error);
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-3xl bg-transparent shadow-inner md:h-auto">
              <a href= {imageUrl}>
                <img
                  src={imageUrl}
                  loading="lazy"
                  alt="Foto de Prueba"
                  className="h-full w-full object-cover object-center"
                />
              </a>
            </div>
          </div>

          <div className="md:pt-2 ">
            <p className="text-center font-bold text-indigo-500 md:text-left">
              misión #{mission.id}
            </p>

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-600 !mb-0 mt-8 sm:text-3xl md:text-left">
              Objetivo:
            </h2>
            <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left">
              {mission.targetName}
            </h1>

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-600 !mb-0 sm:text-3xl md:text-left">
              Asesino:
            </h2>
            <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left">
              {executioner?.name}
            </h1>
            <p className="mb-6 text-gray-400 md:text-left text-center sm:text-lg md:mb-8">
              {mission.description}
            </p>
            <div className="mb-6 md:text-left text-center sm:text-lg ">
              <p className="inline text-gray-300 md:mb-8">Pago:</p>
              <p className="mx-2 inline text-green-600 md:mb-8">
                ${mission.paymentValue}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 my-10 mx-auto">
              <h2 className="w-full mb-2 text-center text-xl font-semibold sm:text-2xl md:mb-4 ">
                ¿Confirmar misión?
              </h2>
              <button
                className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold !text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
                onClick={() => {
                  handleUpdate(true);
                }}
              >
                Completa
              </button>
              <button
                className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold !text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base"
                onClick={() => {
                  handleUpdate(false);
                }}
              >
                Fracaso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

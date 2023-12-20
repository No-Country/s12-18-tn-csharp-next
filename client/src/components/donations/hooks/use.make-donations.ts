import { SubmitHandler } from "react-hook-form";

import type { EventIdProps, DonationModel } from "@/components/donations/models";
import { usePostDonationMutation } from "@/components/donations/hooks";
//import { useToggle } from "@/hooks";

export const useMakeDonation = ({ eventId }: EventIdProps) => {
    // Estado para saber si se esta editando el usuario.
    //const { status, toggleStatus } = useToggle();
    // Funcionalidades del hook de la api para realizar donaciones.
    const [
        makeDonation,
        {
            data: donation,
            isSuccess,
            isLoading,
            isError,
            error
        }
    ] = usePostDonationMutation();

    /**
     * Función para manejar la creación de donaciones.
     * 
     * @param { DonationModel } values - Modelo de los valores de donaciones.
     */
    const handleMakeDonation: SubmitHandler<DonationModel> = async (
        values: DonationModel
    ) => {
        await makeDonation({ eventId, ...values });
    };

    return {
        handlers: {
            handleMakeDonation
        },
        status: {
            isSuccess,
            isLoading,
            isError,
            error
        }
    };
};
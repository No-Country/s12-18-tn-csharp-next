import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

import type { EventIdProps, DonationModel } from "@/components/donations/models";
import { usePostDonationMutation } from "@/components/donations/hooks";
import { useToast } from "@/components/ui/use-toast";

export const useMakeDonation = ({ eventId }: EventIdProps) => {
    // Funcionalidades del toaster.
    const { toast } = useToast();
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

    useEffect(() => {
        if (error) {
            toast({
                title: "Ocurrio un error en tu donación.",
                description: "No se pudo enviar tu donativo, por favor revisa tus datos bancarios y tu sesión."
            })
        }
    }, [isError]);

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
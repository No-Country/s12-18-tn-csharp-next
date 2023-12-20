import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

import type { EventIdProps, DonationModel } from "@/components/donations/models";
import { usePostDonationMutation } from "@/components/donations/hooks";
import { useToast } from "@/components/ui/use-toast";

export const useMakeDonation = ({ eventId }: EventIdProps) => {
    const router = useRouter();
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
        if (isSuccess) {
            toast({
                title: "Donación exitosa",
                description: "Haz hecho una donación éxitosa."
            });
            
            router.refresh();
        }
        if (error) {
            toast({
                title: "Ocurrio un error en tu donación.",
                description: "No se pudo enviar tu donativo, por favor revisa tus datos bancarios y tu sesión."
            })
        }
    }, [isError, isSuccess]);

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
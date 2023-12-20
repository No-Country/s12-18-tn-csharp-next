import type { FC, JSX } from "react";

import { EventIdProps } from "@/components/donations/models";
import { DonationForm } from "@/components/donations";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    Button,
} from "@/components/ui";

/**
 * Componente del dialogo de donación.
 * 
 * @returns { JSX.Element } Componente del dialogo de donación.
 */
export const DonationDialog: FC<EventIdProps> = ({
    eventId
}: EventIdProps): JSX.Element => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button> Donacion </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle> Hacer una donación </DialogTitle>
                    <DialogDescription>
                        Al realizar esta donación, !Estás apoyando a una buena causa :)¡
                    </DialogDescription>
                </DialogHeader>
                <DonationForm eventId={eventId} />
            </DialogContent>
        </Dialog>
    );
};
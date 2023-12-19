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
                    <DialogTitle> Hacer una donacion </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're
                        done.
                    </DialogDescription>
                </DialogHeader>
                <DonationForm eventId={eventId} />
            </DialogContent>
        </Dialog>
    );
};
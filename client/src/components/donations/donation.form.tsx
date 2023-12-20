"use client";

import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { donationSchema } from "@/components/donations/schemas";
import { useMakeDonation } from "@/components/donations/hooks";
import { LoaderSVG } from "@/components/loader";
import {
    DonationModel,
    EmptyDonation,
    type EventIdProps
} from "@/components/donations/models";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    DialogFooter,
    Textarea,
    Input,
    Button
} from "@/components/ui";

/**
 * Componente del formulario de donaciones.
 * 
 * @returns { JSX.Element } Componente del formulario de donaciones.
 */
export const DonationForm: FC<EventIdProps> = ({
    eventId
}: EventIdProps): JSX.Element => {
    /**
     * Hook del formulario de donaciones en la aplicación.
     */
    const form = useForm<DonationModel>({
        resolver: zodResolver(donationSchema),
        defaultValues: EmptyDonation
    });

    // Funcionalidades del hook para manipular las funcionalidades de realizar una donación.
    const { handlers, status } = useMakeDonation({ eventId });
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handlers.handleMakeDonation)}>
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 items-center gap-4">
                                    <FormLabel className="text-center sm:text-left"> Monto </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Ingresa un Monto"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 items-center gap-4">
                                    <FormLabel className="text-center sm:text-left">
                                        Mensaje
                                    </FormLabel>
                                    <Textarea
                                        className="max-h-[50px]"
                                        placeholder="Ingresa un Mensaje"
                                        {...field}
                                    />
                                    <FormMessage />

                                </div>
                            </div>
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <Button type="submit">
                        Donar
                        {status.isLoading && (
                            <svg className="animate-spin h-5 w-5 ml-1.5" viewBox="0 0 24 24">
                                <LoaderSVG />
                            </svg>
                        )}
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
};
"use client";

import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormLabel,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    Input,
    Button
} from "@/components/ui";
import { BankDetailsModel, EmptyBankDetails } from "@/app/(main)/(routes)/me/models";
import { bankDetailsSchema } from "@/app/(main)/(routes)/me/schemas";
import { useBankDetails } from "@/app/(main)/(routes)/me/hooks";
import { selectBankDetails } from "@/app/(main)/(routes)/me/store";
import { LoaderSVG } from "@/components/loader";
import { useAppSelector } from "@/hooks";

/**
 * Componente del formulario para modificar la información bancaria del usuario.
 * 
 * @returns { JSX.Element } Formulario para modificar la información bancaria del usuario.
 */
export const BankDetailsForm: FC = (): JSX.Element => {
    /**
     * Persistencia de la información bancaria.
     */
    const bankDetails = useAppSelector(selectBankDetails);

    /**
     * Formulario de los datos bancarios del usuario.
     */
    const form = useForm<BankDetailsModel>({
        resolver: zodResolver(bankDetailsSchema),
        defaultValues: bankDetails
    });

    // Funcionalidades del hook para manipular las funcionalidades de la información bancaria del usuario.
    const { handlers, status } = useBankDetails();

    return (
        <Form {...form}>
            <form
                className="flex flex-col gap-y-5"
                onSubmit={form.handleSubmit(handlers.handleBankDetails)}
            >
                <h2 className="text-4xl text-center"> Datos Bancarios </h2>
                <FormField
                    control={form.control}
                    disabled={!status.isEditing}
                    name="accountNumber"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> Numero de cuenta : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu Número de cuenta"
                                    type="number"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={!status.isEditing}
                    name="type"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> Tipo de cuenta: </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu Número de cuenta"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={!status.isEditing}
                    name="bank"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Nombre del banco : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa el Nombre de tu banco"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {status.isEditing && (
                    <Button
                        className="
                            mt-5 bg-black text-white hover:border hover:border-black dark:hover:border-white
                            dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black
                            dark:hover:text-white
                        "
                        type="submit"
                    >
                        Guardar
                        {status.isLoading && (
                            <svg className="animate-spin h-5 w-5 ml-1.5" viewBox="0 0 24 24">
                                <LoaderSVG />
                            </svg>
                        )}
                    </Button>
                )}
            </form>
            {!status.isEditing && (
                <Button
                    className="
                        mt-5 bg-black text-white hover:border hover:border-black dark:hover:border-white
                        dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black
                        dark:hover:text-white w-full
                    "
                    type="button"
                    onClick={handlers.handleEditing}
                >
                    Editar
                </Button>
            )}
        </Form>
    );
};
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
    Popover,
    PopoverContent,
    PopoverTrigger,
    RadioGroup,
    RadioGroupItem,
    Input,
    Button
} from "@/components/ui";
import { EmptyBankDetails } from "@/app/(main)/(routes)/me/models";
import { bankDetailsSchema } from "@/app/(main)/(routes)/me/schemas";
import { useBankDetails } from "@/app/(main)/(routes)/me/hooks";

/**
 * Componente del formulario para modificar la información bancaria del usuario.
 * 
 * @returns { JSX.Element } Formulario para modificar la información bancaria del usuario.
 */
export const BankDetailsForm: FC = (): JSX.Element => {
    /**
     * Formulario de los datos bancarios del usuario.
     */
    const form = useForm({
        resolver: zodResolver(bankDetailsSchema),
        defaultValues: EmptyBankDetails
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
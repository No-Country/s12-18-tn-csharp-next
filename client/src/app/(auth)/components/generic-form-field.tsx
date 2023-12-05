import type { FC, JSX } from "react";
import type { ControllerRenderProps } from "react-hook-form";

import {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    Input
} from "@/components/ui";

/**
 * Modelo de las props del campo de formulario génerico.
 */
interface GenericFormFieldProps extends ControllerRenderProps {
    field: any;
    title: string;
}

/**
 * Componente génerico de un campo en un formulario.
 * 
 * @param { GenericFormFieldProps } param0 - Props del campo de formulario génerico..
 * 
 * @returns { JSX.Element } Campo en un formulario.
 */
export const GenericFormField: FC<GenericFormFieldProps> = ({
    field,
    title
}: GenericFormFieldProps): JSX.Element => (
    <FormItem>
        <FormLabel> { title } </FormLabel>
        <FormControl>
            <Input
                placeholder={`Ingresa tu ${title}`}
                {...field} />
        </FormControl>
        <FormMessage />
    </FormItem>
);
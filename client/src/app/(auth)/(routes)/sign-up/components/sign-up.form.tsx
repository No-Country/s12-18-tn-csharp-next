"use client"

import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";

import {
    Button,
    Input,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui";

export const SignUpForm: FC = (): JSX.Element => {
    const form = useForm();
    const handleSignUp = () => {};
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSignUp)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> Nombre : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu Nombre :"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> E-Mail : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu E-mail :"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> Contraseña : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu Contraseña :"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dni"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> DNI : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu DNI :"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> Fecha de Nacimiento : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu Fecha de Nacimiento :"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="gendre"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel> Género : </FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="I prefer not to say" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Prefiero no decirlo
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Masculino
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="female" />
                                        </FormControl>
                                        <FormLabel className="font-normal"> Femenino </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit"> Registrarse </Button>
            </form>
        </Form>
    );
};
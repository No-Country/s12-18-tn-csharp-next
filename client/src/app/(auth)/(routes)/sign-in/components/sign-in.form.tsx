"use client"

import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Button,
    Input,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui";
import { signInSchema } from "@/app/(auth)/(routes)/sign-in/schemas";
import type { SignInSchema } from "@/app/(auth)/(routes)/sign-in/models";

export const SignInForm: FC = (): JSX.Element => {
    /**
     * Hook del formulario de autenticación en la aplicación.
     */
    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema)
    });

    const handleSignIn = () => {};

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSignIn)} className="flex flex-col gap-y-5">
                <h1 className="text-4xl text-center"> Iniciar Sesión </h1>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> E-Mail : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu E-mail"
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
                                    placeholder="Ingresa tu Contraseña"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="mt-5 bg-black text-white hover:border hover:border-black dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white" type="submit"> Iniciar Sesión </Button>
            </form>
        </Form>
    );
};
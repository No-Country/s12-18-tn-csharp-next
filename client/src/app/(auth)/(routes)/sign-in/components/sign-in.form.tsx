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
import { signUpDefaultValues, type SignInSchema } from "@/app/(auth)/(routes)/sign-in/models";
import { useSignIn } from "@/app/(auth)/(routes)/sign-in/hooks";

export const SignInForm: FC = (): JSX.Element => {
    /**
     * Hook del formulario de autenticación en la aplicación.
     */
    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: signUpDefaultValues
    });

    const { handleSignIn } = useSignIn();

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
                                    value={field.value}
                                    onChange={field.onChange}
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
                                    value={field.value}
                                    onChange={field.onChange}
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
"use client"

import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
    Calendar,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui";
import { cn } from "@/lib";
import { signUpSchema } from "@/app/(auth)/(routes)/sign-up/schemas";
import type { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";

export const SignUpForm: FC = (): JSX.Element => {
    /**
     * Hook del formulario de registro en la aplicación.
     */
    const form = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema)
    });

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
                        <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value as any, "PPP")
                                            ) : (
                                                <span> Pick a date </span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value as any}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription>
                            <FormMessage />
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
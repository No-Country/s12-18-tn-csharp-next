"use client";

import { useState, type FC, type JSX } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { selectAuth } from "@/app/(auth)/store";
import { validDate } from "@/app/(auth)/(routes)/sign-up/models";
import { userInfoSchema } from "@/app/(main)/(routes)/me/schemas";
import { UserInfoModel } from "@/app/(main)/(routes)/me/models";
import { userInfoAdapter } from "@/app/(main)/(routes)/me/adapters";
import { useUpdateUserMutation } from "@/app/(main)/(routes)/me/hooks";
import { useAppSelector } from "@/hooks";
import { cn } from "@/lib";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    Input,
    Button,
    RadioGroup,
    RadioGroupItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Calendar
} from "@/components/ui";

export const UserForm: FC = (): JSX.Element => {
    // Estado para saber si se esta editando el usuario.
    const [isEditing, setIsEditing] = useState<boolean>(false);

    /**
     * Información del usuario autenticado.
     */
    const auth = useAppSelector(selectAuth);

    if (!auth.token) return redirect("/sign-up");

    /**
     * Formulario de la información del usuario.
     */
    const form = useForm<UserInfoModel>({
        resolver: zodResolver(userInfoSchema),
        defaultValues: userInfoAdapter(auth.user)
    });

    /**
     * Función para manejar la edición de información del usuario.
     */
    const handleEditing = () => {
        setIsEditing((currentValue) => !currentValue);
    };

    const handleUserInfo = (values: any) => {
        console.log(values);    
    };

    return (
        <Form {...form}>
            <form
                className="flex flex-col gap-y-5 "
                onSubmit={form.handleSubmit(handleUserInfo)}
            >
                <FormField
                    control={form.control}
                    disabled={!isEditing}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> Nombre : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu Nombre"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={!isEditing}
                    name="dni"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel> DNI : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu DNI"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={!isEditing}
                    name="dateOfBirth"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <FormLabel> Fecha de Nacimiento : </FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            disabled={!isEditing}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground",
                                                !isEditing && "hover:cursor-no-drop pointer-events-auto disabled:pointer-events-auto"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span> Selecciona una Fecha </span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        defaultMonth={validDate}
                                        disabled={(date) =>
                                            date > new Date() ||
                                            date < new Date("1900-01-01") ||
                                            date > validDate
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={!isEditing}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel> Género : </FormLabel>
                            <FormControl>
                                <RadioGroup
                                    className="flex flex-col space-y-1"
                                    disabled={!isEditing}
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
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
                {isEditing && (
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
            {!isEditing && (
                <Button
                    className="
                        mt-5 bg-black text-white hover:border hover:border-black dark:hover:border-white
                        dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black
                        dark:hover:text-white w-full
                    "
                    type="button"
                    onClick={handleEditing}
                >
                    Editar
                </Button>
            )}
        </Form>
    );
};
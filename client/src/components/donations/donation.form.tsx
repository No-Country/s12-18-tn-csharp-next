"use client";

import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    DialogFooter,
    Textarea,
    Input,
    Button
} from "@/components/ui";

export const DonationForm: FC = (): JSX.Element => {

    const form = useForm();
    
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(() => {})}
                className="w-full"
            >
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel className="text-left"> Monto </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Ingresa un Monto"
                                            onChange={(e) =>
                                                field.onChange(Number(e.target.value))
                                            }
                                            {...field}
                                        />
                                    </FormControl>
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
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel className="text-left">
                                        Mensaje
                                    </FormLabel>
                                    <Textarea
                                        placeholder="Ingresa un Mensaje"
                                        {...field}
                                    />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <Button type="submit"> Donar </Button>
                </DialogFooter>
            </form>
        </Form>
    );
};
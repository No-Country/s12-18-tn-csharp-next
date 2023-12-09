"use client";

import React from "react";
// import { selectAuth } from "@/app/(auth)/store";
// import { useAppSelector } from "@/hooks";

import { useCreateEventMutation } from "@/components/sections/card-event-detail/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  
} from "@/components/ui";

import { Textarea } from "@/components/ui/textarea"

const schema = z.object({
  title: z.string(),
  description: z.string(),
  collect_Goal: z.number(),
  collected: z.number(),
  geo: z.object({
    country: z.string().min(3),
    provice: z.string().min(3),
    city: z.string(),
    lat: z.number(),
    long: z.number(),
  }),
});

interface FormData {
  title: string;
  description: string;
  collect_Goal: number;
  collected: number;
  geo: {
    country: string;
    provice: string;
    city: string;
    lat: number;
    long: number;
  };
}
export default function page() {
  // const auth = useAppSelector(selectAuth);

  // console.log(auth);

  const [createEvent, { data }] = useCreateEventMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "Ejemplo 5",
      description: "Descripción de ejemplo 5",
      collect_Goal: 1000,
      collected: 0,
      geo: {
        country: "Ejemplo",
        provice: "Ejemplo",
        city: "Ejemplo",
        lat: 0,
        long: 0,
      },
    },
  });

  const onSubmit = async (formData: any) => {
    try {
      console.log("Datos del formulario:", formData);
      await createEvent(formData).unwrap();
      console.log("Evento creado exitosamente");
    } catch (error) {
      console.error("Error al crear el evento:", error);
    }
  };

  React.useEffect(() => {
    if (data) {
      console.log("Datos del evento creado:", data);
    }
  }, [data]);
  return (
    <section className="flex flex-col items-center justify-center container">
      <h1 className="underline">Crear evento</h1>
      <Form {...form}>
        <form className="w-6/12" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título:</FormLabel>
                <FormControl>
                  <Input placeholder="Título" {...field} />
                </FormControl>
                {form.formState.errors.title && (
                  <span>{form.formState.errors.title.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción:</FormLabel>
                <FormControl>
                  <Textarea  placeholder="Descripción" className="resize-none" {...field} />
                </FormControl>
                {form.formState.errors.description && (
                  <span>{form.formState.errors.description.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collect_Goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de Recaudación:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Meta de Recaudación"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                {form.formState.errors.collect_Goal && (
                  <span>{form.formState.errors.collect_Goal.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collected"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recaudado:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Recaudado"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                {form.formState.errors.collected && (
                  <span>{form.formState.errors.collected.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="geo.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>País:</FormLabel>
                <FormControl>
                  <Input placeholder="País" {...field} />
                </FormControl>
                {form.formState.errors.geo?.country && (
                  <span>{form.formState.errors.geo?.country.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="geo.provice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Provincia:</FormLabel>
                <FormControl>
                  <Input placeholder="Provincia" {...field} />
                </FormControl>
                {form.formState.errors.geo?.provice && (
                  <span>{form.formState.errors.geo?.provice.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="geo.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad:</FormLabel>
                <FormControl>
                  <Input placeholder="Ciudad" {...field} />
                </FormControl>
                {form.formState.errors.geo?.city && (
                  <span>{form.formState.errors.geo?.city.message}</span>
                )}
              </FormItem>
            )}
          />

          {/* Campos adicionales */}
          <FormField
            control={form.control}
            name="geo.lat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitud:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Latitud"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                {form.formState.errors.geo?.lat && (
                  <span>{form.formState.errors.geo?.lat.message}</span>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="geo.long"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitud:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Longitud"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                {form.formState.errors.geo?.long && (
                  <span>{form.formState.errors.geo?.long.message}</span>
                )}
              </FormItem>
            )}
          />

          <Button type="submit" className="mb-3 mt-3 w-full">
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
}

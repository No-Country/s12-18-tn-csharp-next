"use client";
import React from "react";
// import { selectAuth } from "@/app/(auth)/store";
// import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";

import { useCreateEventMutation } from "@/components/sections/card-section-post-page/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useGetEventsQuery } from "@/components/sections/card-section-lading-page/hooks/";

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui";

import { Textarea } from "@/components/ui/textarea";

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
  const router = useRouter();

  const [createEvent, { data }] = useCreateEventMutation();
  const { refetch: refetchEvents } = useGetEventsQuery(null, {});

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "Festival de Jazz en Nueva Orleans",
      description:
        "Disfruta de un increíble festival de jazz en la ciudad de Nueva Orleans.",
      collect_Goal: 8000,
      collected: 2500,
      geo: {
        country: "Estados Unidos",
        provice: "Luisiana",
        city: "Nueva Orleans",
        lat: 29.9511,
        long: -90.0715,
      },
    },
  });

  const onSubmit = async (formData: any) => {
    try {
      console.log("Datos del formulario:", formData);
      await createEvent(formData).unwrap();
      console.log("Evento creado exitosamente");
      refetchEvents();
      router.push("/");
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
    <section className="container mx-auto mt-2 mb-2 w-full rounded-lg bg-white p-8 shadow-md md:w-2/3 lg:w-1/2 xl:w-1/3">
      <h1 className="mb-6 text-2xl font-bold">Crear evento</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Título */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.title.message}
                  </span>
                )}
              </FormItem>
            )}
          />
          {/* Descripción */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descripción"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.description && (
                  <span className="text-sm text-red-500">
                    {form.formState.errors.description.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Meta de Recaudación */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.collect_Goal.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Recaudado */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.collected.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* País */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.geo?.country.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Provincia */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.geo?.provice.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Ciudad */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.geo?.city.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Latitud */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.geo?.lat.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Longitud */}
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
                  <span className="text-sm text-red-500">
                    {form.formState.errors.geo?.long.message}
                  </span>
                )}
              </FormItem>
            )}
          />

          {/* Botón de Enviar */}
          <Button
            type="submit"
            className=" w-full px-4 py-2 text-white"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
}

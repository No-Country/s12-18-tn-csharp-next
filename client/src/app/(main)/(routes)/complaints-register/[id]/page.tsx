"use client"
import React, { useState } from "react";
import { FC, JSX } from "react";
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
  FormMessage,
} from "@/components/ui";

import { complaintSchema } from "@/app/(main)/(routes)/complaints-register/schemas/validation-schemas";
import { useSubmitComplaint } from "@/app/(main)/(routes)/complaints-register/hooks/use-submit-complaint";
import { useFetchDataComplaint } from "@/app/(main)/(routes)/complaints-register/hooks/useFetchDataComplaint";
import { useFieldArray, FieldValues } from "react-hook-form";

type ComplaintSchema = {
  title: string;
  description: string;
  reporter_Id: string;
  reporter_Name: string;
  Media_Collection: {
    file: FileList | null;
  }[];
};

interface MediaCollectionItem {
  file: FileList | null;
}

interface ComplaintFormProps {
  event_id: number;
}

const ComplaintForm: FC<ComplaintFormProps> = ({ event_id }): JSX.Element => {
  const [fileNames, setFileNames] = useState<string[][]>([]);

  const form = useForm<ComplaintSchema>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      Media_Collection: [], // Inicializar sin elementos null
    },
  });

  const { submitComplaint } = useSubmitComplaint();
  const { control, register, setValue, watch } = form;
  const { fields, append, remove } = useFieldArray<
    ComplaintSchema,
    "Media_Collection"
  >({
    control,
    name: "Media_Collection",
  });

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("Title", form.getValues("title"));
      formData.append("Description", form.getValues("description"));
      formData.append("Reporter_Id", form.getValues("reporter_Id"));
      formData.append("Reporter_Name", form.getValues("reporter_Name"));

      console.log(
        "Media_Collection array before submitting:",
        fields.map((field) => field.file),
      );

      fields.forEach((field, index) => {
        if (field.file && field.file.length > 0) {
          for (let i = 0; i < field.file.length; i++) {
            // Asegúrate de que field.file[i] sea un objeto File válido
            console.log("File:", field.file[i]);

            // Adjunta cada archivo al FormData con un nombre único
            formData.append(`Media_Collection`, field.file[i]);
          }
        }
      });

      console.log("Datos a enviar al backend:", formData);

      // Obtén el array de Media_Collection directamente del FormData
      const mediaCollectionArray = formData.getAll("Media_Collection");

      // Filtra solo las entradas relacionadas con Media_Collection que son de tipo File
      const fileEntries = mediaCollectionArray.filter(
        (entry) => entry instanceof File,
      );

      const fileCount = fileEntries.length;
      console.log("Cantidad de archivos en Media_Collection:", fileCount);

      // Realiza el envío al backend solo si hay al menos un archivo seleccionado
      if (fileCount > 0) {
        await submitComplaint(event_id, formData);
        console.log("Reclamo enviado correctamente");

        // Restablecer el formulario después de un envío exitoso
        form.reset();
      } else {
        console.log("No hay archivos adjuntos");
      }
    } catch (err: any) {
      console.error("Error al enviar el reclamo", err);

      if (err.errors) {
        console.error("Detalles de validación:", err.errors);
      }
    }
  };

  const { eventData } = useFetchDataComplaint();

  return (
    <div className="flex w-screen flex-col gap-5 px-4 sm:m-auto sm:w-[500px]">
      <Form {...form}>
        <h1 className="text-center text-3xl">Crear un reclamo</h1>
        {eventData != null && (
          <h4 className="text-center text-xl underline">{eventData.title}</h4>
        )}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título:</FormLabel>
              <FormControl>
                <Input
                  className="border-[1px] border-black dark:border-white"
                  placeholder="Ingresa el título"
                  type="text"
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
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
                <textarea
                  className="h-28 w-full border-[1px] border-black px-2 text-sm dark:border-white"
                  placeholder="Ingresa la descripción"
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="hidden">
          <FormField
            control={form.control}
            name="reporter_Id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID del Reportero:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingresa el ID del reportero"
                    type="text"
                    {...field}
                    value={localStorage.getItem("userId") || ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="reporter_Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del Reportero:</FormLabel>
              <FormControl>
                <Input
                  className="border-[1px] border-black dark:border-white"
                  placeholder="Ingresa el nombre del reportero"
                  type="text"
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <div key={field.id} className="relative">
            <div className="relative">
              <FormItem>
                <FormLabel>Adjuntar Archivos:</FormLabel>
                <FormControl>
                  <Input
                    className="border-[1px] border-black dark:border-white"
                    type="file"
                    onChange={(e) => {
                      const selectedFiles = e.target.files;
                      console.log(
                        `Archivos seleccionados (${index + 1}):`,
                        selectedFiles
                      );

                      // Obtén el valor actual de Media_Collection
                      const currentMediaCollection = form.getValues(
                        "Media_Collection"
                      );

                      // Crea un nuevo array de objetos para Media_Collection
                      const updatedMediaCollection = currentMediaCollection.map(
                        (item, i) =>
                          i === index ? { file: selectedFiles } : item
                      );

                      // Asigna el nuevo array a Media_Collection
                      setValue(
                        "Media_Collection",
                        updatedMediaCollection
                      );

                      // Muestra el nombre del archivo seleccionado
                      if (selectedFiles && selectedFiles.length > 0) {
                        const newFileNames = Array.from(selectedFiles).map(
                          (file) => file.name
                        );
                        setFileNames((prevFileNames) => {
                          const newNames = [...prevFileNames];
                          newNames[index] = newFileNames;
                          return newNames;
                        });
                      }
                    }}
                    multiple
                  />
                </FormControl>
                <FormMessage />
                {fileNames[index] && (
                  <span className="w-[98%] text-sm text-gray-500 overflow-hidden absolute pl-2 left-1 top-[33px] bg-white">
                    {fileNames[index].join(", ")}
                  </span>
                )}
              </FormItem>
            </div>

            <div className="absolute right-1 mt-[-33px]">
              <button
                className="h-[28px]"
                type="button"
                onClick={() => {
                  remove(index);
                  // Limpiar el nombre del archivo al eliminar
                  setFileNames((prevFileNames) => {
                    const newNames = [...prevFileNames];
                    newNames[index] = [];
                    return newNames;
                  });
                }}
              >
                <div className="border-[1px] border-black px-[3px] rounded-md">
                  <b className="">x</b>
                </div>
              </button>
            </div>
          </div>
        ))}

        <Button
          className="h-[28px] w-44 text-[12px]"
          type="button"
          onClick={() => {
            append({
              file: null,
            });
          }}
        >
          Agregar archivo
        </Button>

        <div className="">
          <Button
            className="my-5 w-full"
            type="button"
            onClick={handleFormSubmit}
          >
            Enviar Reclamo
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ComplaintForm;
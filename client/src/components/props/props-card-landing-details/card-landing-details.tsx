"use client";
import React, { useState, ChangeEvent } from "react";

// Components
import { Heart, MapPin, Calendar, Video, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { usePostMediaMutation } from "../../sections/card-event-post-media/hooks";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import EventProgress from "@/components/event-progress";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import EventShareButton from "@/components/event-share-button";
import { DonationDialog } from "@/components/donations";

interface Media {
  type?: string;
  url?: string;
}

interface GeoLocation {
  country?: string;
  province?: string;
  city?: string;
  lat?: number;
  long?: number;
}

interface Complaint {
  complaint_Id?: number;
  complaint_Date?: string;
  reporter_Id?: number;
  reporter_Name?: string;
  title?: string;
  description?: string;
  media?: Media[];
}

interface Event {
  event_Id?: number;
  created_Date?: any;
  created_By_User?: string;
  is_Validated?: boolean;
  title?: string;
  description?: string;
  collect_Goal?: number | undefined;
  collected?: number | undefined;
  media?: Media[] | any;
  geo?: GeoLocation;
  has_Complaints?: boolean;
  complaints?: Complaint[] | any;
}

interface Props {
  data: Event;
}

interface MediaData {
  event_Id: any;
  media: FormData;
}

interface MediaFormData {
  event_Id: any;
  media: string;
}

const mediaSchema = z.object({
  event_Id: z.number(),
  media: z.string(),
});

export function CardLandingDetails({ data }: Props) {
  const { toast } = useToast();

  const [files, setFiles] = useState<File[]>([]);

  // Post image
  const [createMedia, { data: responseMedia }] = usePostMediaMutation();

  if (!data.event_Id) return null;

  const idDefault = data?.event_Id;
  const form = useForm<MediaFormData>({
    resolver: zodResolver(mediaSchema),
    defaultValues: {
      event_Id: idDefault,
      media: "",
    },
  });

  const handleImage = (
    e: ChangeEvent,
    fieldChange: (value: string) => void,
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    const target = e.target as HTMLInputElement & { files: File[] };

    if (target.files.length > 0) {
      const file = target.files[0];

      setFiles(Array.from(target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit = async (formData: MediaFormData) => {
    try {
      if (formData.media.length === 0) return;
      console.log("check");

      const { media } = formData;
      const id_default = idDefault;

      const mediaForm = new FormData();
      mediaForm.append("media", files[0]);

      if (media) {
        const mediaData: MediaData = {
          event_Id: id_default,
          media: mediaForm,
        };

        await createMedia(mediaData);

        form.reset();
        setFiles([]);
        toast({
          title: "¡Éxito!",
          description: "La imagen se ha agregado de forma correcta.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // TODO: update with env variable
  const link = `http://localhost:3000/event/${idDefault}`;

  // complaints
  const visibleComplaints = data?.complaints?.slice(0, 4);

  return (
    <section key={data?.event_Id}>
      <div className="border-b border-t border-[#e6e8e9] dark:border-none dark:bg-black">
        <section className="container py-6">
          <h1>{data?.title}</h1>
          <div className="mt-5 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-red-600">
              <img
                src="https://source.unsplash.com/random/600x300/?persons"
                alt="creator image"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p>Created by</p>
              <p className="font-bold">{data?.created_By_User}</p>
            </div>
          </div>
        </section>
      </div>
      <div className="relative">
        <section className="container mx-auto grid grid-cols-1 gap-6 py-0 md:grid-cols-2 md:gap-16 md:py-8 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-2">
            <img
              src={
                responseMedia?.event?.media[0].url
                  ? `https://humanitarianaidapi.somee.com/${responseMedia?.event?.media[0].url}`
                  : data?.media !== null && data?.media[0]?.url
                    ? `https://humanitarianaidapi.somee.com/${data?.media[0].url}`
                    : "https://source.unsplash.com/random/600x300/?animal"
              }
              alt="creator image"
              // height={480}
              // width={851}
              className="w-full object-contain"
            />
            <h2 className="mt-6 font-bold">Details</h2>
            <p className="mt-4">{data?.description}</p>
          </div>
          <div className="order-first mt-6 md:mt-0 lg:order-last lg:mt-0">
            <div>
              <h2 className="mb-3">
                Event Goal:
                <span className="font-bold"> ${data?.collect_Goal}</span>
              </h2>
              <EventProgress
                collected={
                  data?.collect_Goal === undefined ? 0 : data.collect_Goal
                }
                goal={data?.collected === undefined ? 0 : data.collected}
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 ">
              <Calendar size={20} />
              <p>
                {new Date(data?.created_Date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-6 rounded-sm bg-black px-3 py-3 dark:bg-white">
              <div className="flex items-center gap-3 text-white dark:text-slate-800">
                <MapPin size={20} />
                <p>{`${data?.geo?.country} - ${data?.geo?.city}`}</p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="mb-2 mt-2 w-full" variant="outline">
                  Agregar Imagen
                </Button>
              </DialogTrigger>
              <DialogContent className="dark:bg-black sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Añadir Imagen</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <FormField
                          control={form.control}
                          name="media"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                <Label htmlFor="">Media</Label>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) =>
                                    handleImage(e, field.onChange)
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                This is your media.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <button type="submit">Save changes</button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>

            {/* ONLY DESIGN */}
            <div className="mt-4 hidden lg:block">
              <h2>Sponsor</h2>
              <Card className="mt-2 dark:border-none">
                <CardHeader>
                  <CardTitle>Nestle</CardTitle>
                </CardHeader>
                <CardContent>
                  company dedicated to the export of dairy products
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <section className="container">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h1 className="mb-2">Complaints</h1>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button>
              <Link href={`/complaints/${data.event_Id}`}>Ver todos</Link>
            </Button>

            <Button className="w-full">
              <Link href={`/complaints-register/${data.event_Id}`}>
                Crear un reclamo
              </Link>
            </Button>
          </div>
        </div>
        {data?.complaints?.length > 0 ? (
          <div className="relative ">
            <section className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-3">
              {visibleComplaints.map((complaint: any) => (
                <Link
                  href={`/complaints/${complaint?.complaint_Id}`}
                  key={complaint?.complaint_Id}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{complaint.title}</CardTitle>
                      <p>{complaint.reporter_Name}</p>
                      <span>{complaint.reporter_Id}</span>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{complaint.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </section>
          </div>
        ) : (
          <p className="p-10 text-gray-500">No hay quejas disponibles.</p>
        )}
      </section>

      <section className="container mt-2 flex flex-col gap-2">
        <h1>Participants</h1>
        <section className="flex flex-wrap gap-5">
          <Card>
            <CardHeader className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-slate-700"></div>
            </CardHeader>
            <CardContent>
              <h4 className="text-center">Alfredo</h4>
              <CardDescription>CoFundador</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-slate-700"></div>
            </CardHeader>
            <CardContent>
              <h4 className="text-center">Alfredo</h4>
              <CardDescription>CoFundador</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-slate-700"></div>
            </CardHeader>
            <CardContent>
              <h4 className="text-center">Alfredo</h4>
              <CardDescription>CoFundador</CardDescription>
            </CardContent>
          </Card>
        </section>
      </section>
      <section className="container">
        <h1 className="mb-2 mt-2">Similar events nearby</h1>
        <section className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card className="dark:border-none">
            <CardHeader>
              <h5 className="text-sm font-semibold text-[#3796A3]">
                16 DIC 2023 19:00 PET
              </h5>
              <CardTitle className="text-sm">
                Unreal Engine Lima Virtual Meetup - DIciembre
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-1">
              <Video size={20} />
              <p className="text-sm">Presential event</p>
            </CardContent>
          </Card>
          <Card className="dark:border-none">
            <CardHeader>
              <h5 className="text-sm font-semibold text-[#3796A3]">
                16 DIC 2023 19:00 PET
              </h5>
              <CardTitle className="text-sm">
                Unreal Engine Lima Virtual Meetup - DIciembre
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-1">
              <Video size={20} />
              <p className="text-sm">Presential event</p>
            </CardContent>
          </Card>
          <Card className="dark:border-none">
            <CardHeader>
              <h5 className="text-sm font-semibold text-[#3796A3]">
                16 DIC 2023 19:00 PET
              </h5>
              <CardTitle className="text-sm">
                Unreal Engine Lima Virtual Meetup - DIciembre
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-1">
              <Video size={20} />
              <p className="text-sm">Presential event</p>
            </CardContent>
          </Card>
        </section>
      </section>
      <section className="container mb-3">
        <h1 className="mb-2 mt-2">Upcoming events nearby</h1>
        <section className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card className="dark:border-none">
            <CardHeader>
              <h5 className="text-sm font-semibold text-[#3796A3]">
                16 DIC 2023 19:00 PET
              </h5>
              <CardTitle className="text-sm">
                Unreal Engine Lima Virtual Meetup - DIciembre
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-1">
              <Video size={20} />
              <p className="text-sm">Presential event</p>
            </CardContent>
          </Card>
          <Card className="dark:border-none">
            <CardHeader>
              <h5 className="text-sm font-semibold text-[#3796A3]">
                16 DIC 2023 19:00 PET
              </h5>
              <CardTitle className="text-sm">
                Unreal Engine Lima Virtual Meetup - DIciembre
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-1">
              <Video size={20} />
              <p className="text-sm">Presential event</p>
            </CardContent>
          </Card>
          <Card className="dark:border-none">
            <CardHeader>
              <h5 className="text-sm font-semibold text-[#3796A3]">
                16 DIC 2023 19:00 PET
              </h5>
              <CardTitle className="text-sm">
                Unreal Engine Lima Virtual Meetup - Diciembre
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-1">
              <Video size={20} />
              <p className="text-sm">Presential event</p>
            </CardContent>
          </Card>
        </section>
      </section>
      {/* STICKY */}
      <div className="sticky bottom-0 z-10 border-t border-[#e6e8e9] bg-white dark:border-none dark:bg-[#000000]">
        <section className="container flex flex-wrap items-center justify-between gap-4 py-6">
          <p>
            Collaborate with
            <span className="font-bold"> {data?.created_By_User} </span> and
            contribute to this cause?
          </p>
          <div className="flex items-center gap-6">
            {/* <Heart className="cursor-pointer" /> */}
            <EventShareButton
              id={data?.event_Id || 0}
              title={data?.title || ""}
              author={data?.created_By_User || ""}
              className="flex-1"
              size={20}
            />

            {/* <Button>Donate</Button> */}
            <DonationDialog eventId={data?.event_Id} />
          </div>
        </section>
      </div>
    </section>
  );
}

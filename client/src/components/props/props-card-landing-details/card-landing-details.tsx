"use client";
import React from "react";

// Components
import { Heart, MapPin, Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

//
import { usePostMediaMutation } from "../../sections/card-event-post-media/hooks";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

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

import { selectAuth } from "@/app/(auth)/store";
import { useAppSelector } from "@/hooks";

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

interface MediaItem {
  originalFileName: string;
  type: string;
  url: string;
}

interface MediaData {
  id: any; // Asegúrate de que el tipo del id sea el correcto
  media: MediaItem[];
}

const schema = z.object({
  media: z.array(
    z.object({
      originalFileName: z.string(),
      type: z.string(),
      url: z.string(),
    }),
  ),
});

interface FormData {
  media: MediaItem[];
}

export function CardLandingDetails({ data }: Props) {
  // const auth = useAppSelector(selectAuth);

  // console.log(auth.token);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    if (data && data.complaints && data.complaints.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.complaints.length);
    }
  };

  const handlePrev = () => {
    if (data && data.complaints && data.complaints.length > 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + data.complaints.length) % data.complaints.length,
      );
    }
  };

  const visibleComplaints =
    data?.complaints?.slice(currentIndex, currentIndex + 3) || [];

  // post
  const [CreateMedia, { data: Media }] = usePostMediaMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      media: [
        {
          originalFileName: "nombreArchivo",
          type: "tipoArchivo",
          url: "URLdelArchivo",
        },
      ],
    },
  });

  const idDefault = data?.event_Id;

  const onSubmit = async (data: FormData & Event) => {
    try {
      // Asegúrate de que event_Id no sea undefined
      if (data.event_Id !== undefined) {
        const eventDataWithId = { ...data, event_Id: data.event_Id };

        const mediaData: MediaData = {
          id: idDefault,
          media: data.media,
        };

        const response = await CreateMedia(mediaData).unwrap();
        console.log("Response:", response);
      } else {
        console.error("Error: event_Id is undefined");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

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
              // src={`https://humanitarianaidapi.somee.com/${
              //   data?.media && data.media[0]?.url
              //     ? data.media[0].url
              //     : "imagen undefined"
              // }`}
              src={
                data?.media !== null && data?.media[0]?.url
                  ? `https://humanitarianaidapi.somee.com/${data?.media[0].url}`
                  : "https://source.unsplash.com/random/600x300/?animal"
              }
              alt="creator image"
              // height={480}
              // width={851}
              className="w-full object-contain"
            />
            <h2 className="mt-6 font-bold">Details</h2>
            <p className="mt-4">
              {/* {content} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
              asperiores rem, eaque delectus deleniti ducimus voluptate
              provident labore deserunt laboriosam quasi explicabo ratione non
              quas autem ipsum quos beatae cumque unde minima distinctio impedit
              totam? Eos perspiciatis reiciendis pariatur delectus temporibus
              neque repellendus laudantium dolores eaque libero amet sunt
              praesentium, illo nemo eum minus? Quia repellendus aliquam hic nam
              assumenda nobis. Nesciunt eaque sequi dolore rerum veritatis minus
              corporis magnam, quod consectetur
            </p>
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
            {/* ONLY DESIGN */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mb-2 mt-2 w-full">Add Image</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Image</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="media">Media</Label>
                        <Input
                          id="media"
                          type="file"
                          multiple
                          // {...register("media")}
                        />
                        <span>{/* Muestra los errores si es necesario */}</span>
                      </div>
                    </div>
                    <DialogFooter>
                      <button type="submit">Save changes</button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>

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
      {/* <section className="container">
        <h1 className="mb-2">Complaints</h1>
        {data.complaints?.map((complaint: any) => (
          <Link
            href={`/complaints/${complaint?.complaint_Id}`}
            key={complaint?.complaint_Id}
          >
            <Card>
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
      </section> */}

      <section className="container">
        <h1 className="mb-2">Complaints</h1>
        {data?.complaints?.length > 0 ? (
          <div className="relative ">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded bg-gray-500 p-2 text-white"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded bg-gray-500 p-2 text-white"
              onClick={handleNext}
            >
              &gt;
            </button>
            <section className="grid grid-cols-1 gap-6 p-10 md:grid-cols-3">
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
          <p className="text-gray-500">No hay quejas disponibles.</p>
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
            <Heart className="cursor-pointer" />
            <Button>Share</Button>
            <Button>Donate</Button>
          </div>
        </section>
      </div>
    </section>
  );
}

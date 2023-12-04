import React from "react";
import Image from "next/image";
import { Heart, MapPin, Calendar, Video } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import EventProgress from "../../event-progress";

interface Props {
  title: string;
  creator: string;
  content: string;
  created_Date: string;
  geo: {
    country?: string;
    provice?: string;
    city?: string;
    lat: number;
    long: number;
  };
  collected: number;
  goal: number;
  media: { type: string; url: string }[];
  // banner: string;
  // tags: string[];
  // topDonators: { name: string; image: string }[];
  // images: string[];
  // creator: { name: string; image: string };
}

export function CardSectionDetails({
  title,
  creator,
  content,
  geo,
  collected,
  goal,
  media,
  created_Date,
}: Props) {
  return (
    <React.Fragment>
      <div className="border-b border-t border-[#e6e8e9] dark:border-none dark:bg-black">
        <section className="container py-6">
          <h1>{title}</h1>
          <div className="mt-5 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-red-600">
              {/* <Image
                src={creator.image}
                alt="creator image"
                fill
                className="object-cover"
              /> */}
            </div>
            <div>
              <p>Created by</p>
              <p className="font-bold">{creator}</p>
            </div>
          </div>
        </section>
      </div>
      <div className="relative">
        <section className="container mx-auto grid grid-cols-1 gap-6 py-0 md:grid-cols-2 md:gap-16 md:py-8 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-2">
            <Image
              src={media[0].url}
              alt="creator image"
              height={480}
              width={851}
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
                Event Goal: <span className="font-bold">${goal}</span>
              </h2>
              <EventProgress collected={collected} goal={goal} />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 ">
              <Calendar size={20} />
              <p>{created_Date}</p>
            </div>
            <div className="mt-2 flex flex-col gap-6 rounded-sm bg-black px-3 py-3 dark:bg-white">
              <div className="flex items-center gap-3 text-white dark:text-slate-800">
                <MapPin size={20} />
                <p>{`${geo.country} - ${geo.city}`}</p>
              </div>
            </div>
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
      <div className="sticky bottom-0 z-10 border-t border-[#e6e8e9] bg-white dark:border-none dark:bg-[#000000]">
        <section className="container flex flex-wrap items-center justify-between gap-4 py-6">
          <p>
            Collaborate with <span className="font-bold">{creator}</span> and
            contribute to this cause?
          </p>
          <div className="flex items-center gap-6">
            <Heart className="cursor-pointer" />
            <Button>Share</Button>
            <Button>Donate</Button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

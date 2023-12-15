import React from "react";
import { Calendar, Ticket, CheckCircle2 } from "lucide-react";

interface Media {
  type: string;
  url: string;
}

interface Props {
  media: Media[];
  title: string;
  description: string;
  created_Date: any;
  collect_Goal: number;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EventCard({
  media,
  title,
  description,
  created_Date,
  collect_Goal,
}: Props) {
  return (
    <Card className="flex flex-row-reverse justify-between dark:border-none md:h-96 md:flex-col md:justify-start">
      <img
        src={
          media !== null && media[0]?.url
            ? `https://humanitarianaidapi.somee.com/${media[0].url}`
            : "https://source.unsplash.com/random/600x300/?animal"
        }
        alt="image"
        className="mx-4 mt-5 h-20 w-20 rounded-md md:mx-0 md:mt-0 md:h-40 md:w-full"
      />

      <section>
        <CardHeader className="p-2">
          <CardTitle className="text-lg font-bold hover:underline">
            {title}
          </CardTitle>
          <CardDescription>descripción: {description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col p-2">
          <span className="flex items-center gap-1">
            <Calendar className="h-5 w-5 text-gray-500" />
            {new Date(created_Date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <section className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <CheckCircle2 className="h-5 w-5 text-gray-500" />
              {collect_Goal}
            </p>
            <p className="flex items-center gap-1">
              <Ticket className="h-5 w-5 text-gray-500" /> Free
            </p>
          </section>
        </CardContent>
      </section>
    </Card>
  );
}

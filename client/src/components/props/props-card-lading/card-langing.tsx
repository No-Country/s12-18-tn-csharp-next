import React from "react";

import { Calendar, Ticket, CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

import Link from "next/link";

interface Event {
  event_Id: number;
  created_Date: string;
  created_By_User: string;
  is_Validated: boolean;
  title: string;
  description: string;
  collect_Goal: number;
  collected: number;
  media: Media[];
  geo: GeoLocation;
  has_Complaints: boolean;
  complaints?: Complaint[] | null;
}

interface Media {
  type: string;
  url: string;
}

interface GeoLocation {
  country?: string | null;
  provice?: string;
  city?: string;
  lat?: number;
  long?: number;
}

interface Complaint {
  complaint_Id: number;
  complaint_Date: string;
  reporter_Id: number;
  reporter_Name: string;
  title: string;
  description: string;
  media: Media[];
}

interface CardPropsLandingProps {
  cardData: Event[];
}

export function CardPropsLanging({ cardData }: CardPropsLandingProps) {
  
  return (
    <section className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {cardData.map((card) => (
        <Link href={`event/${card.event_Id}`}>
          <Card
            key={card.event_Id}
            className="flex flex-row-reverse justify-between dark:border-none  md:flex-col md:justify-start md:h-96"
          >
            <img
              src={card.media[0].url}
              alt="image"
              className="mx-4 mt-5 h-20 w-20 rounded-md md:mx-0 md:mt-0 md:h-40 md:w-full"
            />

            <section>
              <CardHeader className="p-2">
                <CardTitle className="text-lg font-bold hover:underline">
                  {card.title}
                </CardTitle>
                <CardDescription>
                  Organized by: {card.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col p-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  {card.created_Date}
                </span>
                <section className="flex items-center gap-3">
                  <p className="flex items-center gap-1">
                    <CheckCircle2 className="h-5 w-5 text-gray-500" />
                    {card.collect_Goal}
                  </p>
                  <p className="flex items-center gap-1">
                    <Ticket className="h-5 w-5 text-gray-500" /> Free
                  </p>
                </section>
              </CardContent>
            </section>
          </Card>
        </Link>
      ))}
    </section>
  );
}

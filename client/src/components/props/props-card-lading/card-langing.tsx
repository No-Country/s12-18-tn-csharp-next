import React from "react";

import { Calendar, Ticket, CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

interface CardLanging {
  title: string;
  picture: string;
  content: string;
  time: string;
  going?: string;
}

interface CardLandingProps {
  cardData: CardLanging[];
}
export function CardPropsLanging({ cardData }: CardLandingProps) {

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mb-5">
      { cardData.map(card => (
        <Card
          key={ card.title }
          className="flex flex-row-reverse dark:border-none  dark:bg-white dark:text-black md:flex-col justify-between"
        >
          <img
            src={ card.picture }
            alt="image"
            className="mx-4 mt-5 h-20 w-20 rounded-md md:mx-0 md:mt-0 md:h-48 md:w-full"
          />
          <div>
            <CardHeader className="p-2">
              <CardTitle className="text-lg font-bold">
                { card.title }
              </CardTitle>
              <CardDescription>
                Organized by: { card.content }
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col p-2">
              <span className="flex items-center gap-1">
                { " " }
                <Calendar className="h-5 w-5 text-gray-500" /> { card.time }
              </span>
              <section className="flex items-center gap-3">
                <p className="flex items-center gap-1">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  { card.going }
                </p>
                <p className="flex items-center gap-1">
                  <Ticket className="h-5 w-5 text-gray-500" /> Free
                </p>
              </section>
            </CardContent>
          </div>
        </Card>
      )) }
    </section>
  );
}

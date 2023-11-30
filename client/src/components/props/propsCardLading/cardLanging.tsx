import React from "react";
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
  going?: string; // La propiedad "going" es opcional
}

interface CardLandingProps {
  cardData: CardLanging[];
}
export function CardPropsLanging({ cardData }: CardLandingProps) {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {cardData.map((card, i) => (
        <Card
          key={i}
          className="flex flex-row-reverse border-none  dark:bg-white dark:text-black sm:flex-col"
        >
          <img
            src={card.picture}
            alt="image"
            className="mx-4 mt-5 h-20 w-20 rounded-md sm:mx-0 sm:mt-0 sm:h-48 sm:w-full"
          />
          <div>
            <CardHeader className="p-2">
              <CardTitle className="text-lg font-bold">{card.title}</CardTitle>
              <CardDescription>{card.content}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col p-2">
              <span>{card.time}</span>
              <section>{card.going} Gratis</section>
            </CardContent>
          </div>
        </Card>
      ))}
    </section>
  );
}

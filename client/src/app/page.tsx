import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { CardPropsLanging } from "@/components/props/propsCardLading/cardLanging";

const firstCardData = [
  {
    title: "Card 1",
    picture: "https://source.unsplash.com/random/600x300/?nature",
    content:
      "Join us for an exciting nature hike through the beautiful landscapes. Don't miss this adventure!",
    time: "Dec 01 2023 20:00:00 PET",
    going: "10 going",
  },
  {
    title: "Card 2",
    picture: "https://source.unsplash.com/random/600x300/?landscape",
    content:
      "Explore stunning landscapes and capture breathtaking views with fellow nature enthusiasts.",
    time: "Dec 02 2023 21:30:00 PET",
    going: "5 going",
  },
  {
    title: "Card 3",
    picture: "https://source.unsplash.com/random/600x300/?architecture",
    content:
      "Discover the architectural wonders of the city. Join us for an informative walking tour!",
    time: "Dec 03 2023 19:45:00 PET",
    going: "8 going",
  },
  {
    title: "Card 4",
    picture: "https://source.unsplash.com/random/600x300/?travel",
    content:
      "Embark on a thrilling travel adventure! Share your travel stories and get inspired.",
    time: "Dec 04 2023 22:15:00 PET",
    going: "12 going",
  },
  {
    title: "Card 5",
    picture: "https://source.unsplash.com/random/600x300/?food",
    content:
      "Experience a culinary delight with a food tasting event. Bring your appetite!",
    time: "Dec 05 2023 18:30:00 PET",
    going: "15 going",
  },
  {
    title: "Card 6",
    picture: "https://source.unsplash.com/random/600x300/?technology",
    content:
      "Stay updated on the latest in technology. Join our tech meetup for networking and discussions.",
    time: "Dec 06 2023 20:45:00 PET",
    going: "7 going",
  },
  {
    title: "Card 7",
    picture: "https://source.unsplash.com/random/600x300/?city",
    content:
      "Explore the city's hidden gems and enjoy an evening of culture and entertainment.",
    time: "Dec 07 2023 23:00:00 PET",
    going: "9 going",
  },
  {
    title: "Card 8",
    picture: "https://source.unsplash.com/random/600x300/?people",
    content:
      "Connect with like-minded individuals. Join our social gathering for a fun and lively atmosphere.",
    time: "Dec 08 2023 17:15:00 PET",
    going: "20 going",
  },
];

const secondCardData = [
  {
    title: "Card 1",
    picture: "https://source.unsplash.com/random/600x300/?nature",
    content:
      "Join us for an exciting nature hike through the beautiful landscapes. Don't miss this adventure!",
    time: "Dec 01 2023 20:00:00 PET",
    going: "10 going",
  },
  {
    title: "Card 2",
    picture: "https://source.unsplash.com/random/600x300/?landscape",
    content:
      "Explore stunning landscapes and capture breathtaking views with fellow nature enthusiasts.",
    time: "Dec 02 2023 21:30:00 PET",
    going: "5 going",
  },
  {
    title: "Card 3",
    picture: "https://source.unsplash.com/random/600x300/?architecture",
    content:
      "Discover the architectural wonders of the city. Join us for an informative walking tour!",
    time: "Dec 03 2023 19:45:00 PET",
    going: "8 going",
  },
  {
    title: "Card 4",
    picture: "https://source.unsplash.com/random/600x300/?travel",
    content:
      "Embark on a thrilling travel adventure! Share your travel stories and get inspired.",
    time: "Dec 04 2023 22:15:00 PET",
    going: "12 going",
  },
];

export default function page() {
  return (
    <main className="container flex flex-col gap-3">
      {/* Cards */}
      <section>
        <article className="flex items-center justify-between mt-5 mb-5">
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-semibold">Eventos cerca de</h2>
            <div className="mb-2 mt-1 rounded-lg bg-sky-500 p-2">
              <a href="#" className="cursor-pointer font-bold  hover:underline">
                Buenos Aires, AR
              </a>
            </div>
          </div>
          <a href="#" className="hidden sm:block">
            Ver todos los eventos
          </a>
        </article>
        <CardPropsLanging cardData={firstCardData} />
        {/* <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"></section> */}
      </section>
      <section>
        <article className="flex items-center justify-between mt-5 mb-5">
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-semibold">Próximos eventos en línea</h2>
          </div>
          <a href="#" className="hidden sm:block">
            Ver todos los eventos
          </a>
        </article>
        <CardPropsLanging cardData={secondCardData} />
      </section>
    </main>
  );
}

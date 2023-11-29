import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const firstCardData = [
  {
    title: "Card 1",
    picture: "https://source.unsplash.com/random/600x300/?nature",
    content:
      "Join us for an exciting nature hike through the beautiful landscapes. Don't miss this adventure!",
    time: "Dec 01 2023 20:00:00",
    going: "10 going",
  },
  {
    title: "Card 2",
    picture: "https://source.unsplash.com/random/600x300/?landscape",
    content:
      "Explore stunning landscapes and capture breathtaking views with fellow nature enthusiasts.",
    time: "Dec 02 2023 21:30:00",
    going: "5 going",
  },
  {
    title: "Card 3",
    picture: "https://source.unsplash.com/random/600x300/?architecture",
    content:
      "Discover the architectural wonders of the city. Join us for an informative walking tour!",
    time: "Dec 03 2023 19:45:00",
    going: "8 going",
  },
  {
    title: "Card 4",
    picture: "https://source.unsplash.com/random/600x300/?travel",
    content:
      "Embark on a thrilling travel adventure! Share your travel stories and get inspired.",
    time: "Dec 04 2023 22:15:00",
    going: "12 going",
  },
  {
    title: "Card 5",
    picture: "https://source.unsplash.com/random/600x300/?food",
    content:
      "Experience a culinary delight with a food tasting event. Bring your appetite!",
    time: "Dec 05 2023 18:30:00",
    going: "15 going",
  },
  {
    title: "Card 6",
    picture: "https://source.unsplash.com/random/600x300/?technology",
    content:
      "Stay updated on the latest in technology. Join our tech meetup for networking and discussions.",
    time: "Dec 06 2023 20:45:00",
    going: "7 going",
  },
  {
    title: "Card 7",
    picture: "https://source.unsplash.com/random/600x300/?city",
    content:
      "Explore the city's hidden gems and enjoy an evening of culture and entertainment.",
    time: "Dec 07 2023 23:00:00",
    going: "9 going",
  },
  {
    title: "Card 8",
    picture: "https://source.unsplash.com/random/600x300/?people",
    content:
      "Connect with like-minded individuals. Join our social gathering for a fun and lively atmosphere.",
    time: "Dec 08 2023 17:15:00",
    going: "20 going",
  },
];

export default function page() {
  return (
    <main className="container">
      <article className="flex items-center gap-5">
        <h2 className="text-xl font-bold">Eventos cerca de</h2>
        <div className="bg-sky-500 rounded-lg">
          <h2 className="text-sky-800 font-bold">Lima, PE</h2>
        </div>
      </article>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {firstCardData.map((card, i) => (
          <Card key={i} className="border-none">
            <img src={card.picture} alt="image" className="rounded-md" />
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.content}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col">
                <span>{card.time}</span>
                <section>{card.going} Gratis</section>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

import React from "react";

import Link from "next/link";
import { EventCard } from "@/components/event-card";

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
    <section className="mb-5 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
      {cardData.map((card) => (
        <Link href={`event/${card.event_Id}`} key={card.event_Id}>
          <EventCard
            title={card?.title}
            collect_Goal={card?.collect_Goal}
            description={card?.description}
            created_Date={card?.created_Date}
            media={card?.media}
          ></EventCard>
        </Link>
      ))}
    </section>
  );
}

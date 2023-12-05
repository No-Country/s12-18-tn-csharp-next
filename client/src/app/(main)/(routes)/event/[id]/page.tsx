import React from "react";
import { CardSectionDetails } from "@/components/sections/card-event-detail/card-section-details";
import {
  backendDataEvents,
  secondBackendDataEvents,
} from "@/mocks/mock-lading-page/mock-data-cards";

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const event = [...backendDataEvents, ...secondBackendDataEvents].find(
    (p) => p.event_Id.toString() === params.id,
  );

  // TODO: update
  if (!event) {
    return null;
  }

  return (
    <section>
      <CardSectionDetails
        title={event.title}
        creator={event.created_By_User}
        content={event.description}
        geo={event.geo}
        collected={event.collected}
        goal={event.collect_Goal}
        media={event.media}
        created_Date={event.created_Date}
        // banner={event.banner}
        // tags={event.tags}
        // topDonators={event.topDonators}
        // images={event.images}
      />
    </section>
  );
};

export default page;

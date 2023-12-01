import React from "react";
import EventDetail from "@/components/event-detail";
import { DUMMY_POSTS } from "@/mocks/event-detail-page";

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const event = DUMMY_POSTS.find((p) => p.event_Id.toString() === params.id);

  // TODO: update
  if (!event) {
    return null;
  }

  return (
    <section>
      <EventDetail
        title={event.title}
        creator={event.created_By_User}
        content={event.description}
        geo={event.geo}
        collected={event.collected}
        goal={event.collect_Goal}
        media={event.media}
        // banner={event.banner}
        // tags={event.tags}
        // topDonators={event.topDonators}
        // images={event.images}
      />
    </section>
  );
};

export default page;

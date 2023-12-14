"use client";

import { useGetEventByIdQuery } from "@/components/sections/card-event-detail/hooks/use-get-events-detail-api";
import { CardLandingDetails } from "@/components/props/props-card-landing-details/card-landing-details";

interface Props {
  params: { id: number };
}

const PageDetailEvent = ({ params }: Props) => {
  const { data: event } = useGetEventByIdQuery(params.id, {});

  // TODO: update
  if (!event) {
    return null;
  }

  return (
    <section>
      <CardLandingDetails data={event} />
    </section>
  );
};

export default PageDetailEvent;

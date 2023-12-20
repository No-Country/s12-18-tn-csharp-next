"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "./ui/separator";
import EventShareButton from "./event-share-button";

interface Props {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  author: string;
}

const EventSearchCard = ({
  id,
  title,
  description,
  imgUrl,
  date,
  author,
}: Props) => {
  return (
    <div>
      <div className="mt-3 py-2">
        <Link href={`/event/${id}`} className="mb-10">
          <div className="flex gap-3">
            <Image
              src="https://source.unsplash.com/random/600x300/?animal"
              alt="event image"
              width={222}
              height={125}
              className="self-start rounded-md object-contain"
            />
            <div className="overflow-hidden">
              <p className="text-xs">{date}</p>
              <h2>{title}</h2>
              <div className="mt-2">
                <p className=" truncate whitespace-nowrap">{description}</p>
                <p className="text-sm">{author}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex w-full justify-end">
          <EventShareButton id={id} title={title} author={author} size={16} />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default EventSearchCard;

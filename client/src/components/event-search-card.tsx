import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "./ui/separator";
import { Share } from "lucide-react";
import { Button } from "./ui";
import { cn } from "@/lib";

interface Props {
  id: string;
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
          <Button variant="ghost" className={cn("mt-1 px-3 py-1")}>
            <Share size={16} />
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default EventSearchCard;

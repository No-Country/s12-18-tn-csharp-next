import React from "react";

import { Separator } from "./ui/separator";
import { Skeleton } from "./ui";

const EventSearchCardSkeleton = () => {
  return (
    <div>
      <div className="mt-3 py-2">
        <div className="mb-10 flex gap-3">
          {/* <Image
            src="https://source.unsplash.com/random/600x300/?animal"
            alt="event image"
            width={222}
            height={125}
            className="self-start rounded-md object-contain"
          /> */}
          <Skeleton className="h-[111px] w-[222px] self-start rounded-md bg-slate-600 object-contain" />

          <div className="flex-1 overflow-hidden">
            <Skeleton className="h-[12px] max-w-[222px] rounded-md bg-slate-600" />
            <Skeleton className="mt-[4px] h-[23px] rounded-md bg-slate-600" />
            <div className="mt-2">
              <Skeleton className="h-[20px] rounded-md bg-slate-600" />
              <Skeleton className="mt-[6px] h-[18px] w-[200px] rounded-md bg-slate-600" />
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default EventSearchCardSkeleton;

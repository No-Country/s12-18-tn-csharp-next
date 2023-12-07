import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EventSort = () => {
  return (
    <Select defaultValue="newest">
      <SelectTrigger className="max-w-[140px]">
        <div className="truncate">
          <span>Sort by:</span> <SelectValue className="" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EventSort;

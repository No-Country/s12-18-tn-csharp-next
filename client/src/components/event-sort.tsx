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
      <SelectTrigger className="max-w-[180px]">
        <div className="truncate">
          <span>Ordernar por:</span> <SelectValue className="" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ordernar por</SelectLabel>
          <SelectItem value="newest">Nuevo</SelectItem>
          <SelectItem value="oldest">Viejo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EventSort;

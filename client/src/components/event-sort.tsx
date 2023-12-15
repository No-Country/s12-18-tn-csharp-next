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

interface Props {
  keyword: string;
}

const EventSort = ({ keyword }: Props) => {
  const link = keyword.length > 0 ? `?keyword=${keyword}` : "?";

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
          <SelectItem value="oldest">Antiguo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EventSort;

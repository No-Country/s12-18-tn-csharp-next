"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const link = keyword.length > 0 ? `/search?keyword=${keyword}&` : "/search?";

  return (
    <Select
      defaultValue="newest"
      onValueChange={(value) => router.push(`${link}orderBy=${value}`)}
    >
      <SelectTrigger className="max-w-[180px]">
        <div className="truncate">
          <span>Ordernar por:</span> <SelectValue className="" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ordernar por</SelectLabel>
          <SelectItem value="newest" onClick={() => console.log("hola")}>
            Nuevo
          </SelectItem>
          <SelectItem value="oldest">Antiguo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EventSort;

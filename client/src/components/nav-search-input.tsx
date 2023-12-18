"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Input, Button } from "./ui";

import { Search } from "lucide-react";
import { cn } from "@/lib";

const NavSearchInput = () => {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (pathname !== "/search") setInput("");
  }, [pathname]);

  return (
    <div className="flex w-full items-center space-x-2 md:max-w-sm">
      <Input
        type="text"
        placeholder="Búsqueda"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link href={`/search${input.length > 0 ? "?keyword=" + input : ""}`}>
        <Button type="submit" className={cn("px-2.5")}>
          <Search size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default NavSearchInput;

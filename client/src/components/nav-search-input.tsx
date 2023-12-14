import Link from "next/link";

import { Input, Button } from "./ui";

import { Search } from "lucide-react";
import { cn } from "@/lib";

const NavSearchInput = () => {
  return (
    <div className="flex w-full items-center space-x-2 md:max-w-sm">
      <Input type="text" placeholder="Búsqueda" />
      <Link href="/search">
        <Button type="submit" className={cn("px-2.5")}>
          <Search size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default NavSearchInput;

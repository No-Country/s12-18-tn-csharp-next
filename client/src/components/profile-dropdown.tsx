import Link from "next/link";

import { LifeBuoy, LogOut, User, SquareUser, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib";

interface Props {
  logout: () => void;
}

const ProfileDropdown = ({ logout }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("p-3")}>
        <Button variant="ghost">
          <SquareUser size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/me">
            <DropdownMenuItem className={cn("cursor-pointer")}>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/create-event">
            <DropdownMenuItem className={cn("cursor-pointer")}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Crear Evento</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Ayuda</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className={cn("cursor-pointer")}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;

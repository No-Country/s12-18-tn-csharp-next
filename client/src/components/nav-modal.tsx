"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import { ModeToggle } from "./mode-toggle";

interface Props {
  isAuth: boolean;
  logout: () => void;
  closeModal: () => void;
}

const NavModal = ({ isAuth, logout, closeModal }: Props) => {
  const handleLogout = () => {
    closeModal();
    logout();
  };

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 min-h-screen bg-white px-6 py-6 dark:bg-black">
      <div className="flex h-full w-full flex-col">
        <Button
          className={cn("self-end px-2.5")}
          onClick={closeModal}
          variant="ghost"
        >
          <X size={20} />
        </Button>
        <div className="mt-10 flex h-full w-full flex-col gap-5">
          {!isAuth ? (
            <>
              <Link
                onClick={closeModal}
                href="/sign-in"
                className="inlink-block"
              >
                <Button className={cn("w-full")}>Ingreso</Button>
              </Link>
              <Link
                onClick={closeModal}
                href="/sign-up"
                className="inlink-block"
              >
                <Button className={cn("w-full")}>Registro</Button>
              </Link>
            </>
          ) : (
            <>
              <Link onClick={closeModal} href="/me" className="inlink-block">
                <Button className={cn("w-full")}>Perfil</Button>
              </Link>
              <Link
                onClick={closeModal}
                href="/create-event"
                className="inlink-block"
              >
                <Button className={cn("w-full")}>Crear Evento</Button>
              </Link>
            </>
          )}
        </div>
        <div className="mt-auto flex gap-3 self-end">
          {isAuth && (
            <Button
              onClick={handleLogout}
              className={cn("px-2.5")}
              variant="ghost"
            >
              <LogOut size={20} />
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavModal;

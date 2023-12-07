"use client";

import React from "react";
import Link from "next/link";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import { ModeToggle } from "./mode-toggle";

interface Props {
  closeModal: () => void;
}

const NavModal = ({ closeModal }: Props) => {
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
        <div className="mt-10 flex w-full flex-col gap-5">
          <Link onClick={closeModal} href="/sign-in" className="inlink-block">
            <Button className={cn("w-full")}>Log in</Button>
          </Link>
          <Link onClick={closeModal} href="/sign-up" className="inlink-block">
            <Button className={cn("w-full")}>Sign up</Button>
          </Link>
        </div>
        <div className="mt-auto self-end">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavModal;

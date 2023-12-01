"use client";

import React from "react";
import Link from "next/link";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui";

interface Props {
  closeModal: () => void;
}

const NavModal = ({ closeModal }: Props) => {
  return (
    <div className="fixed inset-0 z-10 min-h-screen bg-black px-6 py-6">
      <div className="flex w-full flex-col">
        <Button className={cn("self-end")} onClick={closeModal}>
          <X size={20} />
        </Button>
        <div className="mt-10 flex w-full flex-col gap-5">
          <Link href="/log-in" className="inlink-block">
            <Button className={cn("w-full")}>Log in</Button>
          </Link>
          <Link href="/sign-up" className="inlink-block">
            <Button className={cn("w-full")}>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavModal;

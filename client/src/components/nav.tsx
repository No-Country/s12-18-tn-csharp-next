"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { Search, Menu } from "lucide-react";
import { Button, Input } from "./ui";
import NavModal from "./nav-modal";
import { ModeToggle } from "./mode-toggle";

import { useAuthActions } from "@/app/(auth)/hooks";
import { selectAuth } from "@/app/(auth)/store";
import { useAppSelector } from "@/hooks";
import ProfileDropdown from "./profile-dropdown";
import { cn } from "@/lib";

export const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const isBigScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (isBigScreen && modalIsOpen) {
      setModalIsOpen(false);
    }
  }, [isBigScreen]);

  const { handleRemoveUser } = useAuthActions();

  const { user: currentUser } = useAppSelector(selectAuth);

  // TODO: update logic
  // const isAuth = currentUser.name.length > 0;
  const isAuth = true;

  return (
    <>
      <header className="bg-white dark:bg-black">
        <nav className="flex justify-between gap-10 px-6 py-3">
          <div className="flex flex-1 items-center gap-10">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={28}
                  height={28}
                />
                <span className="font-bold max-md:hidden">
                  Humanitarian Aid
                </span>
              </Link>
            </div>
            <div className="flex w-full items-center space-x-2 md:max-w-sm">
              <Input type="text" placeholder="Search" />
              <Button type="submit">
                <Search size={20} />
              </Button>
            </div>
          </div>
          <div
            className={cn(
              "flex items-center  max-md:hidden",
              !isAuth ? "gap-10" : "gap-6",
            )}
          >
            {!isAuth ? (
              <ul className="flex items-center gap-10">
                <li>
                  <Link href="/sign-in">Log in</Link>
                </li>
                <li>
                  <Link href="/sign-up">
                    <Button>Sign up</Button>
                  </Link>
                </li>
              </ul>
            ) : (
              <>
                {isBigScreen && <ProfileDropdown logout={handleRemoveUser} />}
              </>
            )}
            <ModeToggle />
          </div>
          <Button
            onClick={() => setModalIsOpen(true)}
            variant="ghost"
            className={cn("flex items-center px-2.5 md:hidden")}
          >
            <Menu size={20} className="cursor-pointer" />
          </Button>
        </nav>
      </header>
      {modalIsOpen && <NavModal closeModal={() => setModalIsOpen(false)} />}
    </>
  );
};

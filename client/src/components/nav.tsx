"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import NavSearchInput from "./nav-search-input";

export const Nav = () => {
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const { user: currentUser } = useAppSelector(selectAuth);

  const { handleRemoveUser } = useAuthActions();

  const handleLogout = () => {
    router.push("/");
    handleRemoveUser();
  };

  // TODO: update logic
  const isAuth = currentUser.name.length > 0;

  const isBigScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (isBigScreen && modalIsOpen) {
      setModalIsOpen(false);
    }
  }, [isBigScreen]);

  useEffect(() => {
    setShowControls(true);
  }, []);

  return (
    <>
      <header className="bg-white dark:bg-black max-w-full flex flex-col items-center justify-start">
        <nav className="flex gap-10 px-6 py-3 w-full max-w-[70rem] items-center justify-between">
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
                  Ayuda Humanitaria
                </span>
              </Link>
            </div>
            <NavSearchInput />
            {/* <div className="flex w-full items-center space-x-2 md:max-w-sm">
              <Input type="text" placeholder="Búsqueda" />
              <Link href="/search">
                <Button type="submit" className={cn("px-2.5")}>
                  <Search size={20} />
                </Button>
              </Link>
            </div> */}
          </div>
          <div
            className={cn(
              "flex items-center  max-md:hidden",
              !isAuth ? "gap-10" : "gap-6",
            )}
          >
            {showControls && (
              <>
                {!isAuth ? (
                  <ul className="flex items-center gap-10">
                    <li>
                      <Link href="/sign-in">Ingreso</Link>
                    </li>
                    <li>
                      <Link href="/sign-up">
                        <Button>Registro</Button>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <>
                    {isBigScreen && <ProfileDropdown logout={handleLogout} />}
                  </>
                )}
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
      {modalIsOpen && (
        <NavModal
          isAuth={isAuth}
          logout={handleLogout}
          closeModal={() => setModalIsOpen(false)}
        />
      )}
    </>
  );
};

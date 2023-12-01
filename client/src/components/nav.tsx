"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { Search, Menu } from "lucide-react";
import { Button, Input } from "./ui";
import NavModal from "./nav-modal";
import { ModeToggle } from "./mode-toggle";

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const isBigScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (isBigScreen && modalIsOpen) {
      setModalIsOpen(false);
    }
  }, [isBigScreen]);

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
          <div className="flex items-center gap-10 max-md:hidden">
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/sign-in">Log in</Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <Button>Sign up</Button>
                </Link>
              </li>
              <ModeToggle />
            </ul>
          </div>
          <div className="flex items-center md:hidden">
            <Menu
              size={24}
              className="cursor-pointer"
              onClick={() => setModalIsOpen(true)}
            />
          </div>
        </nav>
      </header>
      {modalIsOpen && <NavModal closeModal={() => setModalIsOpen(false)} />}
    </>
  );
};

export default Nav;

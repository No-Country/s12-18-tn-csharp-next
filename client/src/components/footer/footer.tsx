import React from "react";

import Link from "next/link";

import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import FooterLink from "./footer-link";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full">
      <section className="container mx-auto p-8 md:grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="my-4">Your Account</h2>
          <ul>
            <FooterLink href="/sign-up" text="Sign up" />
            <FooterLink href="/log-in" text="Log in" />
          </ul>
        </div>
        <div>
          <h2 className="my-4">Discover</h2>
          <ul>
            <FooterLink href="/calendar" text="Calendar" />
            <FooterLink href="/topics" text="Topics" />
          </ul>
        </div>
        <div>
          <h2 className="my-4">Ayuda Humanitaria</h2>
          <ul>
            <FooterLink href="/about" text="About" />
          </ul>
        </div>
      </section>
      <section className="container md:flex md:flex-col md:items-start mb-8">
        <h2 className="my-4">
          Follow us
        </h2>
        <div className="flex gap-4">
          <Link href="/"><Facebook size={ 20 } /></Link>
          <Link href="/"><Twitter size={ 20 } /></Link>
          <Link href="/"><Youtube size={ 20 } /></Link>
          <Link href="/"><Instagram size={ 20 } /></Link>
        </div>
      </section>
      <section className="container md:flex md:flex-col mb-8">
        <p className="mb-4">
          &copy; { currentYear } Ayuda Humanitaria
        </p>
      </section>
    </footer>
  )
}

export default Footer
import React from "react";

import Link from "next/link";

import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import FooterLink from "./footer-link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white">
      <section className="container mx-auto flex flex-col gap-8  p-8 md:grid md:grid-cols-3">
        <div>
          <h2 className="my-4">Informacion</h2>
          <ul>
            <FooterLink href="#" text="Acerca de nosotros" />
            <FooterLink href="#" text="Contacto" />
            <FooterLink href="#" text="Politica de Privacidad" />
            <FooterLink href="#" text="Términos y Condiciones" />
          </ul>
        </div>
        <div>
          <h2 className="my-4">Recursos y Ayuda</h2>
          <ul>
            <FooterLink href="#" text="Preguntas Frecuentes" />
            <FooterLink href="#" text="Ayuda" />
          </ul>
        </div>
        <div>
          <h2 className="my-4">Comunidad</h2>
          <ul>
            <FooterLink href="#" text="Blog" />
            <FooterLink href="#" text="Testimonios" />
            <FooterLink href="#" text="Asociaciones" />
          </ul>
        </div>
      </section>
      <section className="container mb-8 md:flex md:flex-col md:items-start">
        <h2 className="my-4">Seguinos</h2>
        <div className="flex gap-4">
          <Link href="/">
            <Facebook size={20} />
          </Link>
          <Link href="/">
            <Twitter size={20} />
          </Link>
          <Link href="/">
            <Youtube size={20} />
          </Link>
          <Link href="/">
            <Instagram size={20} />
          </Link>
        </div>
      </section>
      <section className="container pb-8 md:flex md:flex-col">
        <p className="pb-4">&copy; {currentYear} Ayuda Humanitaria</p>
      </section>
    </footer>
  );
};

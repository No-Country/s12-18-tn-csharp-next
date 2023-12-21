import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Providers } from "@/providers";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Humanitarian Aid",
  description: "Aplicación de eventos para el apoyo de situaciones de emergencia, como desastres naturales, accidentes o alguna otra situación médica de emergencia. Juntos podemos hacer el cambio ante estas desgracias que pueden ocurrirnos en cualquier momento, ingresa para apoyar a la causa.",
};

/**
 * Layout principal de la aplicación.
 *
 * @param { PropsWithChildren } param0 - Props por defecto de un componente con children.
 *
 * @returns { JSX.Element } Layout principal de la aplicación.
 */
export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex w-full flex-col">
            <div className="flex flex-col">
              <Nav />
            </div>
            <div className="min-h-screen max-w-[71rem] my-0 mx-auto">{children}</div>
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

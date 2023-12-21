"use client";

import { Button } from "@/components/ui";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-center">¡Página no encontrada!</h2>

        <Link href="/" className="mt-2 text-center">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

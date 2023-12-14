"use client";

import type { FC, JSX } from "react";
import { redirect } from "next/navigation";

import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/app/(auth)/store"

/**
 * Página del usuario en sesión, donde esta toda su información.
 * 
 * @returns { JSX.Element } Componente de la página de usuario.
 */
const MyProfilePage: FC = (): JSX.Element => {
  /**
   * Información del usuario autenticado.
   */
  const auth = useAppSelector(selectAuth);

  if (!auth.token) return redirect("/sign-in");

  return (
    <div className="container py-6">
      <h1>{auth.user.name}</h1>
    </div>
  );
};

export default MyProfilePage;

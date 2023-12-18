import { redirect } from "next/navigation";

import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/app/(auth)/store";

/**
 * Hook de autenticación.
 */
export const useAuth = () => {
    /**
     * Información del usuario autenticado.
     */
    const auth = useAppSelector(selectAuth);

    // Redirijimos a la sección de autenticación si el usuario no esta autenticado.
    if (auth.token) return redirect("/sign-in");

    return { auth };
};
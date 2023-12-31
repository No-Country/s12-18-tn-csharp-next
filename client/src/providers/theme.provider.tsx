"use client";

import type { FC, JSX } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

/**
 * Componente del proveedor de temas de la app.
 * 
 * @param { ThemeProviderProps } param0 - Props del componente proveedor de temas.
 * 
 * @returns { JSX.Element } Proveedor de los temas de la app.
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    ...props
}: ThemeProviderProps): JSX.Element => {
    return (
        <NextThemesProvider { ...props }>
            { children }
        </NextThemesProvider>
    );
};
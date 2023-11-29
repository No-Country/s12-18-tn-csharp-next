"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import type { FC, JSX } from "react";

/**
 * Componente del proveedor de temas de la app.
 * 
 * @param param0 
 * 
 * @returns { JSX.Element } Proveedor de los temas de la app.
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }: ThemeProviderProps): JSX.Element => {
    return <NextThemesProvider {...props}>{ children }</NextThemesProvider>;
};
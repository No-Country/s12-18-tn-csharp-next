"use client";

import type { FC, PropsWithChildren, JSX } from "react";

import { ThemeProvider } from "@/providers/theme.provider";
import { StoreProvider } from "@/providers/store.provider";

/**
 * Componente donde se centralizan todos los proveedores de la app.
 * 
 * @param { PropsWithChildren } param0 - Props por defecto de un componente.
 * 
 * @returns { JSX.Element } Proveedores centralizados de la app.
 */
export const Providers: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="help-theme"
        >
            <StoreProvider>
                { children }
            </StoreProvider>
        </ThemeProvider>
    );
}
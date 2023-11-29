"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Button
} from "@/components/ui";

/**
 * Componente del boton del tema de la aplicacion.
 * 
 * @returns { React.JSX.Element } Boton para cambiar el tema de la app.
 */
export const ModeToggle: React.FC = (): React.JSX.Element => {
    // Función para actualizar el tema en la app.
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="bg-transparent border-0"
                    variant="outline"
                    size="icon"
                >
                    <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                    <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only"> Toggle Theme </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
import type { AuthUser } from "@/app/(auth)/models";
import { setUser, removeUser } from "@/app/(auth)/store";
import { useAppDispatch } from "@/hooks";

/**
 * Hook para la logica del manejo de las acciones de autenticación en los estados globales de la aplicación.
 * 
 * @returns Funcionalidades del manejo de estados de autenticación en la aplicación.
 */
export const useAuthActions = () => {
    /**
     * Despachador de las acciones de la store de estados globales.
     */
    const dispatch = useAppDispatch();

    /**
     * Función para manejar la configuración de un usuario autenticado en la aplicación.
     * 
     * @param { AuthUser } newUser - Usuario autenticado.
     * 
     * @returns Funcionalidad para la configuración del usuario.
     */
    const handleSetUser = (newUser: AuthUser) => dispatch(setUser(newUser));

    /**
     * Función para remover un usuario de la aplicación.
     * 
     * @returns Funcionalidad para remover al usuario de la aplicación.
     */
    const handleRemoveUser = () => dispatch(removeUser());

    return { handleSetUser, handleRemoveUser };
};
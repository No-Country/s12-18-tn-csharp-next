import { useState, useCallback, useMemo } from "react";

/**
 * Hook para manipular un estado génerico.
 */
export const useToggle = () => {
    // Booleano para el estado génerico.
    const [status, setStatus] = useState<Boolean>(false);

    /**
     * Función para manejar el estado génerico.
     */
    const toggleStatus = useCallback(() => {
        // Cambiamos el estado actual al estado opuesto actual.
        setStatus((currentStatus) => !currentStatus);
    }, []);

    /**
     * Valores memorizados de las funcionalidades génericas del estado.
     */
    const values = useMemo(
        () => ({
            status,
            toggleStatus,
        }),
        [status, toggleStatus]
    );

    return values;
};
/**
 * Función para persistir información localmente.
 * 
 * @param { string } key - Llave para guardar la información.
 * @param { any } data - Información a guardar localmente.
 * 
 * @returns { void } Funcionalidad para persistir la información localmente.
 */
export const setLocalStorageItem = (key: string, data: any): void =>
    localStorage.setItem(key, JSON.stringify(data));

/**
 * Función para encontrar información guardada localmente.
 * 
 * @param { string } key - Llave de la información guardada.
 * 
 * @returns { any } Información procesada en un objeto.
 */
export const getLocalStorageItem = (key: string): any => {
    // Verificamos que estemos usando la función de parte del cliente.
    if (typeof window !== "undefined" && window.localStorage) {
        /**
         * Información encontrada por la llave de parametros.
         */
        const result = localStorage.getItem(key) as string;

        // Si se encuentra información, devolvemos la información en un objeto.
        return !!result && JSON.parse(result);
    };
};

/**
 * Función para eliminar localmente información.
 * 
 * @param { string } key - Lllave de la información guardada.
 * 
 * @returns { void } Funcionalidad para eliminar la inforación guardada localmente.
 */
export const removeLocalStorageItem = (key: string): void =>
    localStorage.removeItem(key);

/**
 * Función para limpiar toda la información localmente.
 * 
 * @returns Funcionalidad para limpiar toda la información localmente.
 */
export const clearLocalStorage = (): void =>
    localStorage.clear();
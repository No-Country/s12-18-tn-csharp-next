import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from "@/utils";

export const saveSession = (key: string, value: any) => {
    if (!key) throw new Error("La llave es necesaria para guardar una sesión.");
    if (!value) throw new Error("No hay valores para guardar una sesión.");
console.log({value});
    value.date = Date.now();
    setLocalStorageItem(key, value);
};

export const getSession = (key: string) => {
    if (!key) throw new Error("La llave es necesaria para obtener una sesión.");

    const getData = getLocalStorageItem(key);

    if (!getData) return null;

    const date = Date.now();

    if (date - getData.date > 54000000) {
        removeLocalStorageItem(key)
        return null;
    };

    return getData;
};
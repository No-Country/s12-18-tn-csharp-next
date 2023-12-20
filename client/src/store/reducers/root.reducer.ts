import { bankDetailsReducer } from "@/app/(main)/(routes)/me/store";
import { authReducer, authApiReducer } from "@/app/(auth)/store";
import { donationApiReducer } from "@/components/donations/store";
import { eventReducer } from "@/app/(main)/reducers";
import { meApiReducer } from "@/app/(main)/(routes)/me/store";

/**
 * Raíz de los reducers de la aplicación.
 */
export const rootReducers = {
    ...authReducer,
    ...authApiReducer,
    ...eventReducer,
    ...donationApiReducer,
    ...bankDetailsReducer,
    ...meApiReducer
};

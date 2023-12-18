import { bankDetailsReducer } from "@/app/(main)/(routes)/me/store";
import { authReducer, authApiReducer } from "@/app/(auth)/store";
import { eventReducer, donationReducer} from "@/app/(main)/reducers";
import { meApiReducer } from "@/app/(main)/(routes)/me/store";

/**
 * Raíz de los reducers de la aplicación.
 */
export const rootReducers = {
    ...authReducer,
    ...authApiReducer,
    ...eventReducer,
    ...donationReducer,
    ...bankDetailsReducer,
    ...meApiReducer
};

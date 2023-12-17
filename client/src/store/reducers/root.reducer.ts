import { authReducer, authApiReducer } from "@/app/(auth)/store";
import { eventReducer, donationReducer} from "@/app/(main)/reducers";

/**
 * Raíz de los reducers de la aplicación.
 */
export const rootReducers = {
    ...authReducer,
    ...authApiReducer,
    ...eventReducer,
    ...donationReducer
};

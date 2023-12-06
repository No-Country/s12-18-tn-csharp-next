import { authApi } from "@/app/(auth)/services";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
    key: "root",
    whitelist: [
        authApi.reducerPath
    ],
    storage,
    transforms: [AuthTransform]
};
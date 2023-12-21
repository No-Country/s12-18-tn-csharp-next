import { eventApi } from "../services/";

export const eventReducer = {
    [eventApi.reducerPath]: eventApi.reducer
};

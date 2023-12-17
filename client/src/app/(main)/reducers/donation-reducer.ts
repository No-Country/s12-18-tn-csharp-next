import { donationsApi } from "../services/";

export const donationReducer = {
    [donationsApi.reducerPath]: donationsApi.reducer
};

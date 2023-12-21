import type { ThunkMiddleware } from "@reduxjs/toolkit";
import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

import { meApiMiddleware } from "@/app/(main)/(routes)/me/store";
import { eventMiddleware } from "@/app/(main)/middlewares";
import { authApiMiddleware } from "@/app/(auth)/store";
import { donationApiMiddleware } from "@/components/donations/store";
import { handlerDataInLocalStorage } from "@/store/middlewares";

/**
 * Raíz de los middlewares de la store de la aplicación.
 */
export const rootMiddlewares = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware,
): ThunkMiddleware[] =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
        authApiMiddleware,
        meApiMiddleware,
        donationApiMiddleware,
        eventMiddleware,
        handlerDataInLocalStorage,
    );

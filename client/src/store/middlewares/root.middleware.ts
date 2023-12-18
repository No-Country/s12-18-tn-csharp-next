import type { ThunkMiddleware } from "@reduxjs/toolkit";
import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

import { handlerDataInLocalStorage } from "../middlewares";
import { authApiMiddleware } from "@/app/(auth)/store";
import { eventMiddleware, donationMiddleware } from "@/app/(main)/middlewares";
import { meApiMiddleware } from "@/app/(main)/(routes)/me/store";

/**
 * Raíz de los middlewares de la store de la aplicación.
 */
export const rootMiddlewares = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware,
): ThunkMiddleware[] =>
    getDefaultMiddleware().concat(
        authApiMiddleware,
        meApiMiddleware,
        eventMiddleware,
        donationMiddleware,
        handlerDataInLocalStorage,
    );

import type { ThunkMiddleware } from "@reduxjs/toolkit";
import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

import { authApiMiddleware, handlerDataInLocalStorage } from "@/app/(auth)/store";
import { eventMiddleware, donationMiddleware } from "@/app/(main)/middlewares";

/**
 * Raíz de los middlewares de la store de la aplicación.
 */
export const rootMiddlewares = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware,
): ThunkMiddleware[] =>
    getDefaultMiddleware().concat(
        authApiMiddleware,
        eventMiddleware,
        donationMiddleware,
        handlerDataInLocalStorage,
    );

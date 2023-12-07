import type { ThunkMiddleware } from "@reduxjs/toolkit";
import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

import { defaultMiddlewareConfig } from "@/store/config";
import { authMiddleware } from "@/app/(auth)/middlewares";
import { eventMiddleware } from "@/app/(main)/middlewares";

/**
 * Raíz de los middlewares de la store de la aplicación.
 */
export const rootMiddlewares = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware,
): ThunkMiddleware[] =>
  getDefaultMiddleware(defaultMiddlewareConfig as any).concat(
    authMiddleware,
    eventMiddleware,
  );

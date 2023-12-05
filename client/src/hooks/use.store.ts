import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/models";

/**
 * Hook para devolver un estado global específico de a aplicación.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Hook para despachar una acción específica de los estados globales de la aplicación.
*/
export const useAppDispatch: () => AppDispatch = useDispatch;

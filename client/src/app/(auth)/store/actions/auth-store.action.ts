import { authSlice } from "@/app/(auth)/store/slices";

// Desestructuramos las funcionalidades del estado de autenticación.
export const { setUser, removeUser } = authSlice.actions;
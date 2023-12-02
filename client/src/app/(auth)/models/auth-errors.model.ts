/**
 * Enumeración de los errores de autenticación.
 */
export enum AuthErrorsModel {
    NAME_REQUIRED = "El Nombre es requerido.",
    INVALID_NAME = "El Nombre debe ser un texto.",
    NAME_MIN_LENGTH = "El Nombre debe tener un mínimo de 2 carácteres.",
    EMAIL_REQUIRED = "El E-Mail es requerido.",
    INVALID_TYPE_EMAIL = "El E-Mail debe ser un texto.",
    INVALID_EMAIL = "El E-Mail es invalido.",
    PASS_REQUIRED = "La Contraseña es requerida.",
    INVALID_PASS = "La Contraseña debe ser un texto.",
    PASS_MIN_LENGTH = "La contraseña debe tener un mínimo de 8 carácteres.",
    DNI_REQUIRED = "El DNI es requerido.",
    INVALID_DNI = "El DNI debe ser un texto.",
    DNI_MIN_LENGTH = "El DNI debe tener un mínimo de 8 carácteres.",
    DOB_REQUIRED = "La Fecha de Nacimiento es requerida.",
    INVALID_TYPE_DOB = "La Fecha de Nacimiento debe ser un fecha.",
    INVALID_DOB = "La Fecha de Nacimiento es invalida.",
    GENDRE_REQUIRED = "El Género es requerido.",
    INVALID_GENDRE = "El Género debe ser un género válido."
}
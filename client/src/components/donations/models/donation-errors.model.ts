/**
 * Enumeración de los errores de donativos.
 */
export enum DonationErrorModel {
    MOUNT_REQUIRED = "El monto es requerido.",
    INVALID_MOUNT = "El monto debe ser un dato númerico.",
    MIN_MOUNT = "El monto mínimo es de 1 dolar.",
    NEGATIVE_MOUNT = "El monto no debe ser negativo.",
    MESSAGE_REQUIRED = "Debes incluir un mensaje a tu donativo.",
    INVALID_MESSAGE = "El mensaje de tu donativo debe ser un texto de letras.",
    MIN_MESSAGE = "El mensaje debe ser de mínimo 5 carácteres."
}
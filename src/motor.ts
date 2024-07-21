import {
    ValidacionClave,
} from "./model"

//1 -> La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const tieneMayusculas = /[A-Z]/.test(clave);
    const tieneMinuscula = /[a-z]/.test(clave);
    if (!tieneMayusculas || !tieneMinuscula) {
        return {
            esValida: false,
            error: "La clave debe de tener mayúsculas y minúsculas"
        };
    }
    return { esValida: true };
};

//2 -> La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
    if (!/[0-9]/.test(clave)) {
        return {
            esValida: false,
            error: "La clave debe de tener números"
        };
    };
    return { esValida: true };
};

// 3 -> La clave debe de tener caracteres especiales(@,#, +, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if (!/[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\|,.<>\/?]/.test(clave)) {
        return {
            esValida: false,
            error: "La clave debe de tener caracteres especiales"
        }
    }
    return { esValida: true };
};

// 4 -> La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (clave.length < 8) {
        return {
            esValida: false,
            error: "La clave debe de tener una longitud mínima de 8 caracteres"
        };
    };
    return { esValida: true };
};

// 5 -> La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
    if (clave.includes(nombreUsuario)) {
        return {
            esValida: false,
            error: "La clave no debe tener el nombre del usuario"
        };
    };
    return { esValida: true };
};

// 6 -> La clave no debe de contener palabras comunes(le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    if (commonPasswords.includes(clave)) {
        return {
            esValida: false,
            error: "La clave no debe de contener palabras comunes"
        };
    };
    return { esValida: true };
};

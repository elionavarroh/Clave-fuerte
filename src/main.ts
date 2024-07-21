import {
    ValidacionClave,

} from "./model"

import {
    tieneCaracteresEspeciales,
    tieneLongitudMinima,
    tieneMayusculasYMinusculas,
    tieneNombreUsuario,
    tieneNumeros,
    tienePalabrasComunes,
} from "./motor"

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    let resultado;

    resultado = tieneLongitudMinima(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneMayusculasYMinusculas(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneNumeros(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneCaracteresEspeciales(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneNombreUsuario(nombreUsuario, clave);
    if (!resultado.esValida) return resultado;

    resultado = tienePalabrasComunes(clave, commonPasswords);
    if (!resultado.esValida) return resultado;

    return { esValida: true };
};
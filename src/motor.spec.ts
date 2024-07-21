import {
    tieneCaracteresEspeciales,
    tieneLongitudMinima,
    tieneMayusculasYMinusculas,
    tieneNombreUsuario,
    tieneNumeros,
    tienePalabrasComunes
} from "./motor";

import {
    commonPasswords
} from "./model";

import {
    validarClave,
} from "./main";

//Testeos
describe('tieneMayusculasYMinusculas', () => {
    it('debería devolver un error si no tiene mayúsculas y minúsculas', () => {
        // Arrange
        const clave = "solominusculas";

        // Act
        const resultado = tieneMayusculasYMinusculas(clave);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" });
    });

    it('debería ser válida si tiene mayúsculas y minúsculas', () => {
        // Arrange
        const clave = "MayusYminus";

        // Act
        const resultado = tieneMayusculasYMinusculas(clave);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});

describe('tieneNumeros', () => {
    it('debería devolver un error si no tiene números', () => {
        // Arrange
        const clave = "sinNumeros";

        // Act
        const resultado = tieneNumeros(clave);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener números" });
    });

    it('debería ser válida si tiene números', () => {
        // Arrange
        const clave = "conNumeros123";

        // Act
        const resultado = tieneNumeros(clave);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});

describe('tieneCaracteresEspeciales', () => {
    it('debería devolver un error si no tiene caracteres especiales', () => {
        // Arrange
        const clave = "sinEspeciales";

        // Act
        const resultado = tieneCaracteresEspeciales(clave);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener caracteres especiales" });
    });

    it('debería ser válida si tiene caracteres especiales', () => {
        // Arrange
        const clave = "conEspeciales@#";

        // Act
        const resultado = tieneCaracteresEspeciales(clave);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});

describe('tieneLongitudMinima', () => {
    it('debería devolver un error si no tiene longitud mínima de 8 caracteres', () => {
        // Arrange
        const clave = "short";

        // Act
        const resultado = tieneLongitudMinima(clave);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" });
    });

    it('debería ser válida si tiene longitud mínima de 8 caracteres', () => {
        // Arrange
        const clave = "suficientementeLarga";

        // Act
        const resultado = tieneLongitudMinima(clave);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});

describe('tieneNombreUsuario', () => {
    it('debería devolver un error si contiene el nombre del usuario', () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "claveusuario529";

        // Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave no debe tener el nombre del usuario" });
    });

    it('debería ser válida si no contiene el nombre del usuario', () => {
        // Arrange
        const nombreUsuario ="usuario";
        const clave = "claveSegura529";

        // Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});

describe('tienePalabrasComunes', () => {
    it('debería devolver un error si contiene una palabra común', () => {
        // Arrange
        const clave = "password";

        // Act
        const resultado = tienePalabrasComunes(clave, commonPasswords);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave no debe de contener palabras comunes" });
    });

    it('debería ser válida si no contiene palabras comunes', () => {
        // Arrange
        const clave = "claveSegura529!";

        // Act
        const resultado = tienePalabrasComunes(clave, commonPasswords);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});

describe('validarClave', () => {
    it('debería devolver el primer error encontrado', () => {
        // Arrange
        const nombreUsuario = "usuario529";
        const clave = "clave529";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" });
    });

    it('debería ser válida si cumple con todas las condiciones', () => {
        // Arrange
        const nombreUsuario = "usuario529";
        const clave = "ClaveSegura529!";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado).toEqual({ esValida: true });
    });
});


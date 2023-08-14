/*
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
*/

/**
 * Esta función devuelve el valor de la carta que recibe como argumento.
 * @param { String } carta Una carta de la baraja.
 * @returns { Number } El valor de la carta ingresada.
 */
export function valorCarta( carta ) {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
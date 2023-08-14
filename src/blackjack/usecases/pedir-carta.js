/*
const pedirCarta = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
*/

/**
 * Esta función retorna una carta de la baraja.
 * @param { Array<String> } deck El arreglo de la baraja de cartas.
 * @returns { String } Una carta de la baraja.
 */
export function pedirCarta( deck ) {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
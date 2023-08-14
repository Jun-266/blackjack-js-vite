import _ from 'underscore';

/**
 * 
 * @param { Array<String> } tiposDeCarta 
 * @param { Array<String> } tiposEspeciales 
 * @returns { Array<String> }
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatorio');

    if ( !tiposEspeciales || tiposEspeciales === 0 ) 
        throw new Error('tiposEspeciales es obligatorio');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// Exporta la función crearDeck de manera predeterminada.
// Solo puede haber un export default en un archivo de JS.
// export default crearDeck;
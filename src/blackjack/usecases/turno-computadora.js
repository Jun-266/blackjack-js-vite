import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param { Number } puntosMinimos Puntos que la computadora necesita para ganar.
 * @param { HTMLElement } puntosHTML Elemento de la pantalla que mostrara los puntos.
 * @param { HTMLElement } divCartasComputadora Elemento para las cartas de la computadora.
 * @param { Array<String> } deck Arreglo de la baraja de cartas.
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, 
                           divCartasComputadora, deck ) => {

  if (!puntosMinimos) throw new Error('Los puntos minimos son necesarios.');
  if (!puntosHTML) throw new Error('Argumento necesario.');
  if (!deck) throw new Error('La baraja de cartas es necesaria.');

  let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // const imgCarta = crearCartaHTML( carta );
        // divCartasComputadora.append( imgCarta );
        crearCartaHTML( carta, divCartasComputadora );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

// export default turnoComputadora;
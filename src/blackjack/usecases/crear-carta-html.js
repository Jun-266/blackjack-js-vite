/**
 * @param { String } carta Una carta de la baraja.
 * @param { HTMLElement } divCartas Sección donde ira la carta.
 */
export function crearCartaHTML( carta, divCartas ) {

  if (!carta) throw new Error('La carta es obligatoria.');

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`;
  imgCarta.classList.add('carta');
  divCartas.append( imgCarta );
  
  // return imgCarta;
}
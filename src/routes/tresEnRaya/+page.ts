import type { PageLoad } from './$types';

export const load = (async () => {
    let casillas = new Array(9).fill(null);
    let ganador = null;
    let turnoDe = "X";
    let resPosibles = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];

    return {
        casillas, ganador, turnoDe, resPosibles
    };
}) satisfies PageLoad;
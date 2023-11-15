import type { PageLoad } from './$types';

export const load = (async () => {
    let casillas = new Array(9).fill(null);
    let ganador = null;
    let turnoDe = "X";

    return {
        casillas, ganador, turnoDe
    };
}) satisfies PageLoad;
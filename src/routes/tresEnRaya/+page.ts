import type { PageLoad } from './$types';

export const load = (async () => {
    let casillas = new Array(9).fill(null);
    let result = null;
    let turnoDe = "X";

    let darValor = (i) => {
        console.log("hey");
        
        casillas[i] = turnoDe;
        casillas = [...casillas];
        turnoDe = turnoDe == "X" ? "O" : "X"
        console.log(casillas);
        
    }

    return {
        casillas, result, turnoDe, darValor
    };
}) satisfies PageLoad;
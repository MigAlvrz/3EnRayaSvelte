<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ casillas, turnoDe, ganador, resPosibles } = data);
    let leftRows = [0,3,6]
    let rightRows = [2,5,8]
    let darValor = (i) => {
        casillas[i] = turnoDe;
        casillas = [...casillas];
        checkGanador()
        turnoDe = turnoDe == "X" ? "O" : "X"
    }
    let restart = () => {
        casillas = new Array(9).fill(null);
        ganador = null;
        turnoDe = "X";
    }

    let checkGanador = () => {
        resPosibles.map((e) => {
        const [a, b, c] = e
        if (
            casillas[a] && 
            casillas[a] === casillas[b] &&
            casillas[a] === casillas[c]
        ) {
            console.log(casillas[a]);
            
            ganador = casillas[a]
        }
    })

    if (!casillas.some(el => el === null) && ganador === null){
        ganador = "empate"
    }
    }
</script>

<div class="tablero">
    {#key casillas}
    {#each casillas as casilla,i}
        <button class="casilla {i < 3 && 'firstRow'} {i > 5  && 'bottomRow'} {leftRows.includes(i) && 'leftRow'} {rightRows.includes(i) && 'rightRow'}"
            on:click={()=>{darValor(i)}}
        >
            {casilla?casilla:''}
        </button>
    {/each}
    {/key}
</div>
{#if ganador}
    <h2>{ganador != "empate" ? ganador + ' ha ganado la partida!' : 'Ha sido un empate!'}</h2>
    <button class="playAgain" on:click={restart}>
        Volver a jugar
    </button>
{/if}

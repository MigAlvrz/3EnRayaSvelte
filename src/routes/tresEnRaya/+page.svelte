<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ casillas, turnoDe, ganador } = data);
    let leftRows = [0,3,6]
    let rightRows = [2,5,8]
    let darValor = (i) => {
        casillas[i] = turnoDe;
        casillas = [...casillas];
        turnoDe = turnoDe == "X" ? "O" : "X"  
        ganador = "O"
    }
    let restart = () => {
        casillas = new Array(9).fill(null);
        ganador = null;
        turnoDe = "X";
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
    <h2>{ganador} ha ganado la partida!</h2>
    <button class="playAgain" on:click={restart}>
        Volver a jugar
    </button>
{/if}

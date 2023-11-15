<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ casillas, turnoDe } = data);
    let leftRows = [0,3,6]
    let rightRows = [2,5,8]
    let darValor = (i) => {
        console.log("hey");
        
        casillas[i] = turnoDe;
        casillas = [...casillas];
        turnoDe = turnoDe == "X" ? "O" : "X"
        
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

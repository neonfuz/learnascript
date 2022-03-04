<script>
 import { Textfield } from 'svelte-mui';
 export let zis;
 let zi = zis[Math.floor(zis.length * Math.random())];
 let input = '';
 $: if (input == zi.ICAO) {
     zi = zis[Math.floor(zis.length * Math.random())];
     input = '';
 }
</script>

<div class="Quiz">
    <div class="question">
        <tooltip title={zi.ICAO}>
            {zi.Upper}
        </tooltip>
    </div>
    <Textfield bind:value={input} />
</div>

<style>
 .question {
     text-align: center;
     font-size: 1.5rem;
 }
 .Quiz :global(input) {
     text-align: center !important;
 }
</style>

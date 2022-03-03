<script>
 import { Textfield } from 'svelte-mui';
 import { getlang } from '$lib/util.js';
 export let lang;
</script>

<div class="Quiz">
    {#await getlang(lang)}
        Loading...
    {:then zis}
        <div class="zi-chart">
            {#each zis as zi}
                <tooltip class="question" title={zi.ICAO}>{zi.Upper}</tooltip>
                {' '}
            {/each}
        </div>
        <Textfield />
    {:catch err}
        <div class="error">{err}</div>
    {/await}
</div>


<style>
 .question {
     text-align: center;
     font-size: 1.5rem;
 }
 .zi-chart {
     max-width: 95vw;
     padding: 1em;
     border-radius: 1em;
     box-shadow:
         inset 2px 2px 5px #0001,
         inset -2px -2px 5px #0001;
 }
 .Quiz :global(input) {
     text-align: center !important;
 }
 .error {
     color: red;
 }
</style>

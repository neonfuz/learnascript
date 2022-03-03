<script>
 import { Textfield } from 'svelte-mui';
 import { getlang } from '$lib/util.js';
 export let lang;
</script>

<div class="Quiz">
    {#await getlang(lang)}
        Loading...
    {:then zis}
        {#each zis as zi}
            <div class="question">
                <tooltip title={zi.ICAO}>{zi.Upper}</tooltip>
            </div>
        {/each}
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
 .Quiz :global(input) {
     text-align: center !important;
 }
 .error {
     color: red;
 }
</style>

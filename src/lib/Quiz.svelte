<script>
 import { Textfield } from 'svelte-mui';
 import ZiChart from '$lib/ZiChart.svelte';
 import { getlang } from '$lib/util.js';
 export let lang;
</script>

<div class="Quiz">
    {#await getlang(lang)}
        Loading...
    {:then zis}
        <ZiChart {zis} />
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

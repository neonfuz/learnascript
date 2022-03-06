<script>
 import { page } from '$app/stores';
 import Quiz from '$lib/Quiz.svelte';
 import ZiChart from '$lib/ZiChart.svelte';
 import { getlang } from '$lib/util.js';
 let inStudy = false;
 let studyOptions = {
     cases: 1 // TODO auto detect & make this configurable
 };
 function study(zis) {
     return () => {
         inStudy = true;
     }
 }
</script>

{#await getlang($page.params.lang)}
    <section>
        Loading...
    </section>
{:then zis}
    {#if inStudy}
        <section><Quiz {zis} options={studyOptions} /></section>
    {:else}
        <section>
            <ZiChart {zis} />
            <button on:click={study(zis)}>Study</button>
        </section>
    {/if}
{:catch err}
    <section class="error">{err}</section>
{/await}

<style>
 .error {
     color: red;
 }
 button {
     margin-top: 1em;
 }
</style>

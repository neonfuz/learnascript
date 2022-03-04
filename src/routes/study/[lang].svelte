<script>
 import { page } from '$app/stores';
 import Quiz from '$lib/Quiz.svelte';
 import ZiChart from '$lib/ZiChart.svelte';
 import { getlang } from '$lib/util.js';
 let inStudy = false;
 function study() {
     inStudy = true;
 }
</script>

{#await getlang($page.params.lang)}
    Loading...
{:then zis}
    {#if inStudy}
        <section><Quiz {zis} /></section>
    {:else}
        <section>
            <ZiChart {zis} />
            <button on:click={study}>Study</button>
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

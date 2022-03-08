<script>
 import { page } from '$app/stores';
 import Quiz from '$lib/Quiz.svelte';
 import Chart from '$lib/Chart/Chart.svelte';
 import { getlang } from '$lib/util.js';
 let inStudy = false;
 let options = {
     cases: 1 // TODO auto detect & make this configurable
 };
 function study() { inStudy = true; }
</script>

{#await getlang($page.params.lang)}
    <section>
        Loading...
    </section>
{:then chars}
    {#if inStudy}
        <section><Quiz {chars} {options} /></section>
    {:else}
        <section>
            <Chart {chars} lang={$page.params.lang} />
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

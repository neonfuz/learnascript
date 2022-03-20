<script>
 import { page } from '$app/stores';
 import Quiz from '$lib/Quiz.svelte';
 import Chart from '$lib/Chart/Chart.svelte';
 import Info from '$lib/Info.svelte';
 import { getlang } from '$lib/util.js';
 let inStudy = false;
 let options = {
     cases: 1 // TODO auto detect & make this configurable
 };
 function study() { inStudy = true; }
 let info;
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
            <h2>{$page.params.lang}</h2>
            <div class="container">
                <Info {info} />
                <Chart lang={$page.params.lang} {chars} bind:info />
            </div>
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
 .container {
     font-size: min(4vw, 2rem);
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
 }
</style>

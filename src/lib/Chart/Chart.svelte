<script>
 import Euro from './Euro.svelte';
 import Json from './Json.svelte';
 import JP from './JP.svelte';
 import Info from '$lib/Info.svelte';
 export let chars;
 export let lang;
 $: component = getComponent(lang);
 function getComponent(lang) {
     switch (lang) {
         case 'russian':
             return Euro;
         case 'hiragana':
         case 'katakana':
             return JP;
         default:
             return Json;
     }
 }
 let info;
</script>

<h2>{lang}</h2>

<div class="container">
    <Info {info} />
    <svelte:component this={component} {chars} bind:info />
</div>

<style>
 .container {
     font-size: min(4vw, 2rem);
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
 }
</style>

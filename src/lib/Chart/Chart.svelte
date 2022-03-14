<script>
 import Euro from './Euro.svelte';
 import Json from './Json.svelte';
 import JP from './JP.svelte';
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
    <div class="info">
        {#if info}
            <div class="char">
                {info?.char}
            </div>
            <div class="reading">
                {info?.roman}
            </div>
        {/if}
    </div>
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
 .info {
     display: flex;
     flex-direction: column;
     min-width: 5em;
     min-height: 6em;
     outline: solid #ccc .125rem;
     border-radius: 1rem;
     padding: .2rem;
     margin: 1rem;
 }
 .info .char {
     font-size: 5em;
 }
</style>

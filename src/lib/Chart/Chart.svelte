<script>
 import Euro from './Euro.svelte';
 import Json from './Json.svelte';
 export let chars;
 export let lang;
 $: component = getComponent(lang);
 function getComponent(lang) {
     switch (lang) {
         case 'russian':
             return Euro;
         case 'hiragana':
         case 'katakana':
             return Json; // TODO
         default:
             return Json;
     }
 }
</script>

<svelte:component this={component} {chars} />

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
</script>

<svelte:component this={component} {chars} />

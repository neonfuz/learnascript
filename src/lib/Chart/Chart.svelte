<script>
 import Euro from './Euro.svelte';
 import JP from './JP.svelte';
 export let chars;
 export let lang;
 export let info;
 const pathMap = new Map([
     ['russian', Euro],
     ['hiragana', JP],
     ['katakana', JP],
 ])
 $: component = pathMap.get(lang);
</script>

<svelte:component this={component} {chars} bind:info />

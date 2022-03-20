<script>
 import Loadable from 'svelte-loadable';
 export let chars;
 export let lang;
 export let info;
 const pathMap = new Map([
     ['russian', 'Euro'],
     ['hiragana', 'JP'],
     ['katakana', 'JP'],
 ])
 function getComponentPath(lang) {
     const name = pathMap.get(lang) ?? 'Json';
     return `./${name}.svelte`
 }
 $: path = getComponentPath(lang);
</script>

<Loadable loader={() => import(path)} let:component>
    <svelte:component this={component} {chars} bind:info />
</Loadable>

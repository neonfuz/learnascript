<script>
 import WIP from '$lib/WIP.svelte';
 import './style.css';
</script>

<header>
    <h1><a href="/">LEARN A SCRIPT . XYZ</a></h1>
</header>

<main>
    <slot/>
</main>

<WIP/>

<style>
 header,
 main > :global(section) {
     background: var(--box-color);
     margin-top: 1.5em;
     padding: 1em;
     border-radius: .5em;
     box-shadow: var(--box-shadow);
     max-width: calc(100vw - 4em);
 }
 a {
     color: black;
     text-decoration: none;
 }
 a:hover {
     text-decoration: underline;
 }
</style>

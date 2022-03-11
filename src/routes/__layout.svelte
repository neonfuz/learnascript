<script>
 import WIP from '$lib/WIP.svelte';
 import './style.css';
</script>

<header>
    <section>
        <h1><a href="/">LEARN A SCRIPT . XYZ</a></h1>
    </section>
</header>

<main>
    <slot/>
</main>

<WIP/>

<style>
 h1 a {
     color: black;
     text-decoration: none;
 }
 h1 a:hover {
     text-decoration: underline;
 }
</style>

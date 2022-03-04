<script>
 import WIP from '$lib/WIP.svelte';
 import './style.css';
</script>

<section>
    <h1><a href="/">LEARN A SCRIPT . XYZ</a></h1>
</section>

<slot/>

<WIP/>

<style>
 a {
     color: black;
     text-decoration: none;
 }
 a:hover {
     text-decoration: underline;
 }
</style>

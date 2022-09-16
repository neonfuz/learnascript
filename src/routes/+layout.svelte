<script>
 import WIP from '$lib/WIP.svelte';
 import './style.css';
 import { dark } from '$lib/state.js';
</script>

<div id="app" class:dark={$dark}>
    <div class="background"></div>

    <header>
        <section>
            <h1><a href="/">LEARN A SCRIPT . XYZ</a></h1>
        </section>
    </header>

    <main>
        <slot/>
    </main>

    <footer>
        <WIP/>
    </footer>
</div>

<style>
 h1 a {
     color: var(--font-color);
     text-decoration: none;
 }
 h1 a:hover {
     text-decoration: underline;
 }
</style>

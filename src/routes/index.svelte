<script>
 import WIP from '../lib/WIP.svelte';
 import Quiz from '../lib/Quiz.svelte';
</script>

<WIP/>

<div id="container">
    <section id="header">
        <h1>LEARN A SCRIPT . XYZ</h1>
    </section>
    <section>
        This is a website with tools to learn the writing system for various
        languages
    </section>
    <section>
        <Quiz />
    </section>
</div>

<style>
 :global(body) {
     background: #eee;
 }
 h1 {
     font-size: 1.5rem;
 }
 #container {
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 #container section {
     margin-top: 1.5em;
     padding: 1em;
     border-radius: .5em;
     background: white;
 }
 #container :global(input) {
 }
</style>

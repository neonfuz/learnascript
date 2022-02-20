<script>
 import {Textfield} from 'svelte-mui';
</script>

<div class="Quiz">
    <div class="question">Л</div>
    <Textfield />
</div>

<style>
 .question {
     text-align: center;
     font-size: 1.5rem;
 }
 .Quiz :global(input) {
     text-align: center !important;
 }
</style>

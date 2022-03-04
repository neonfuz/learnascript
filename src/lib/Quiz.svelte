<script>
 import { Textfield } from 'svelte-mui';
 export let zis;
</script>

<div class="Quiz">
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

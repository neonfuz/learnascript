<script>
 import { Textfield } from 'svelte-mui';
 export let zis;
 export let options = { cases: 1 };
 const newState = (oldState = {}) => ({
     zi: zis[Math.floor(zis.length * Math.random())],
     case: Math.floor(options.cases * Math.random()),
     count: (oldState.count ?? -1) + 1,
     countRevealed: (oldState.countRevealed ?? 0) + (oldState.revealed ?? 0),
     input: '',
 });
 let state = newState();
 const reveal = () => {
     state.revealed = 1;
 }
 const checkInput = (input) => {
     if (input.toLowerCase() === state.zi.roman) {
         state = newState(state);
     }
 }
 $: checkInput(state.input);
</script>

<div class="Quiz">
    <div class="question" on:click={reveal}>
        {state.case ? state.zi.char2 : state.zi.char}
    </div>
    <div class="answer" class:revealed={state.revealed}>
        {state.zi.roman}
    </div>
    <Textfield bind:value={state.input} />
    <div class="count">
        {state.count - state.countRevealed} / {state.count}
    </div>
</div>

<style>
 .Quiz {
     text-align: center;
     font-size: 1.5rem;
 }
 .Quiz :global(input) {
     text-align: center !important;
 }
 .count {
     text-align: right;
 }
 .answer {
     opacity: 0;
     font-size: 1rem;
     margin-top: .5em;
 }
 .answer.revealed {
     opacity: 100;
 }
</style>

<script>
 import { Textfield } from 'svelte-mui';
 export let zis;
 const newState = (oldState = {}) => ({
     zi: zis[Math.floor(zis.length * Math.random())],
     case: Math.floor(2 * Math.random()),
     count: (oldState.count ?? -1) + 1,
     input: '',
 });
 let state = newState();
 const checkInput = (input) => {
     if (input === state.zi.ICAO) {
         state = newState(state);
     }
 }
 $: checkInput(state.input);
</script>

<div class="Quiz">
    <div class="question">
        <tooltip title={state.zi.ICAO}>
            {state.case ? state.zi.Upper : state.zi.Lower}
        </tooltip>
    </div>
    <Textfield bind:value={state.input} />
    <div class="count">
        {state.count}
    </div>
</div>

<style>
 .question {
     text-align: center;
     font-size: 1.5rem;
 }
 .Quiz :global(input) {
     text-align: center !important;
 }
 .count {
     text-align: right;
 }
</style>

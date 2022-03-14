<script>
 export let chars;
 export let lang;
 $: layout = [
     "a",  "i",  "u",  "e",  "o",
     "ka", "ki", "ku", "ke", "ko",
     "sa","shi", "su", "se", "so",
     "ta","chi","tsu", "te", "to",
     "na", "ni", "nu", "ne", "no",
     "ha", "hi", "fu", "he", "ho",
     "ma", "mi", "mu", "me", "mo",
     "ya", null, "yu", null, "yo",
     "ra", "ri", "ru", "re", "ro",
     "wa", null, null, null, "wo",
     "n",  null, null, null, null
 ].map(target => (
     chars.find(({roman}) => roman === target)
 ));
 $: rows = new Array(5).fill(0).map((_, row) => (
     layout.filter((item, i) => i%5 === row)
 ));
 let info;
 function enter(c) {
     return e => {
         if (!e.isPrimary) return;
         info = c;
     }
 }
 function leave(e) {
     if (!e.isPrimary) return;
     info = undefined;
 }
</script>

<h2>{lang}</h2>

<div class="container">
    <div class="info">
        {#if info}
            <div class="char">
                {info?.char}
            </div>
            <div class="reading">
                {info?.roman}
            </div>
        {/if}
    </div>
    <table>
        {#each rows as row}
            <tr>
                {#each row as c}
                    <td on:pointerenter={enter(c)} on:pointerleave={leave}>
                        {c ? c.char : ''}
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
 .container {
     font-size: min(4vw, 2rem);
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
 }
 .info {
     display: flex;
     flex-direction: column;
     min-width: 5em;
     min-height: 6em;
 }
 .info .char {
     font-size: 5em;
 }
 table {
     width: 100%;
     max-width: 300px;
     user-select: none;
 }
 td {
     padding: .4em;
 }
</style>

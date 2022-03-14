<script>
 export let chars;
 export let info;
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
 ].map(target =>
     chars.find(({roman}) => roman === target)
 );
 $: rows = new Array(5).fill(0).map((_, row) => (
     layout.filter((item, i) => i%5 === row)
 ));
</script>

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

<style>
 table {
     width: 100%;
     max-width: 300px;
     user-select: none;
 }
 td {
     padding: .2em;
 }
</style>

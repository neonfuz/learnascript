<script>
 export let chars;
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
</script>

<table>
    {#each rows as row}
        <tr>
            {#each row as c}
                <td>
                    {c ? c.char : ''}
                </td>
            {/each}
        </tr>
    {/each}
</table>

<style>
 table {
     width: 100%;
 }
 td {
     padding: .4em;
 }
</style>

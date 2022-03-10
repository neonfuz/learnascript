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
 let info;
 let infoStyle = 'left:0;top:0';
 function enter(newInfo) {
     return e => {
         if (!e.isPrimary) return;
         info = newInfo;
         const rect = e.target.getBoundingClientRect();
         infoStyle = `
             left: ${rect.x + rect.width/2}px;
             top:  ${rect.y - rect.height - 4}px;
         `;
     }
 }
 function leave(e) {
     if (!e.isPrimary) return;
     info = undefined;
 }
</script>

{#if info}
    <div id="info" style={infoStyle}>
        <div>
            {info}
        </div>
        <svg viewBox="0 0 10 10" width=".5em">
            <path fill="white" stroke="#ccc"
                  d="M 0,0 L 5,5 L 10,0" />
        </svg>

    </div>
{/if}

<table>
    {#each rows as row}
        <tr>
            {#each row as c}
                <td on:pointerenter={enter(c?.roman)} on:pointerleave={leave}>
                    {c ? c.char : ''}
                </td>
            {/each}
        </tr>
    {/each}
</table>

<style>
 * {
     font-size: min(4vw, 2rem);
 }
 #info {
     position: fixed;
     pointer-events: none;
     translate: -50%;
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 #info div:first-child {
     background: white;
     outline: solid #ccc .06em;
     border-radius: .25em;
     padding: .4em;
 }
 table {
     width: 100%;
     max-width: 300px;
 }
 td {
     padding: .4em;
 }
</style>

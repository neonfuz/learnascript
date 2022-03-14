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
</script>

<div>
    {#each chars as c}
        <span on:pointerenter={enter(c)} on:pointerleave={leave}>
            {c.char}
        </span>
    {/each}
</div>
<div>
    {#each chars as c}
        <span on:pointerenter={enter({...c, char: c.char2})} on:pointerleave={leave}>
            {c.char2}
        </span>
    {/each}
</div>

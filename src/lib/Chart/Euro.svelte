<script>
 export let chars;
</script>

<div>
    {#each chars as c}
        <span>
            {c.char}
        </span>
    {/each}
</div>
<div>
    {#each chars as c}
        <span>
            {c.char2}
        </span>
    {/each}
</div>

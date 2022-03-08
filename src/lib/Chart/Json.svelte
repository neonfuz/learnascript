<script>
 export let chars;
</script>

{#each chars as c}
    <span>
        {JSON.stringify(c)}
    </span>
{/each}

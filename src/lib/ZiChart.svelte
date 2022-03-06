<script>
 export let zis;
</script>

<table>
    <tr><td>
        {#each zis as zi}
            <tooltip class="question" title={zi.roman}>{zi.char}</tooltip>
            {' '}
        {/each}
    </td></tr>
    <tr><td>
        {#each zis as zi}
            <tooltip class="question" title={zi.roman}>{zi.char2}</tooltip>
            {' '}
        {/each}
    </td></tr>
</table>

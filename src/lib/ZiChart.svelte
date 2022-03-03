<script>
 export let zis;
</script>

<table>
    <tr><td>
        {#each zis as zi}
            <tooltip class="question" title={zi.ICAO}>{zi.Upper}</tooltip>
            {' '}
        {/each}
    </td></tr>
    <tr><td>
        {#each zis as zi}
            <tooltip class="question" title={zi.ICAO}>{zi.Lower}</tooltip>
            {' '}
        {/each}
    </td></tr>
</table>

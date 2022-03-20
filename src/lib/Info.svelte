<script>
 export let info;
</script>

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

<style>
 .info {
     display: flex;
     flex-direction: column;
     min-width: 5em;
     min-height: 6em;
     outline: solid #ccc .125rem;
     border-radius: 1rem;
     padding: .2rem;
     margin: 1rem;
 }
 .info .char {
     font-size: 5em;
 }
</style>

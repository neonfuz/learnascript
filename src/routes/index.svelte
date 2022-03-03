<script>
 import Quiz from '$lib/Quiz.svelte';

 const languages = [
     { name: 'Cyrillic (Russian)', id: 'russian' },
     { name: 'Hiragana (Japanese)', id: 'hiragana' },
     { name: 'Katakana (Japanese)', id: 'katakana' },
 ];
</script>

<section>
    <h2>About</h2>
    <p>This is a website with tools to learn writing systems</p>
    <p>It is a work in progress, languages will be added gradually</p>
</section>
<section>
    <h2>Languages</h2>
    <ul>
        {#each languages as lang}
            <li><a href={'study/'+lang.id}>{lang.name}</a></li>
        {/each}
    </ul>
</section>

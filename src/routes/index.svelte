<script>
 import Quiz from '$lib/Quiz.svelte';

 const languages = [
     { name: 'Arabic (Arabic)', id: 'arabic' },
     { name: 'Cyrillic (Russian)', id: 'russian' },
     { name: 'Devanagari (Hindi)', id: 'hindi' },
     { name: 'Greek (Greek)', id: 'greek' },
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

<style>
 li {
     margin-bottom: .5em;
 }
 a:visited {
     color: blue;
 }
</style>

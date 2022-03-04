<script>
 import Quiz from '$lib/Quiz.svelte';

 const languages = [
     { name: 'Arabic (Arabic)', id: 'arabic', wip: true },
     { name: 'Cyrillic (Russian)', id: 'russian' },
     { name: 'Devanagari (Hindi)', id: 'hindi', wip: true },
     { name: 'Greek (Greek)', id: 'greek', wip: true },
     { name: 'Hiragana (Japanese)', id: 'hiragana', wip: true },
     { name: 'Katakana (Japanese)', id: 'katakana', wip: true },
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
            <li><a class:wip={lang.wip} href={'study/'+lang.id}>{lang.name}</a></li>
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
 a.wip {
     color: grey;
 }
</style>

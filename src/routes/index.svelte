<script>
 import Quiz from '$lib/Quiz.svelte';

 const languages = [
     { name: 'Arabic (Arabic)', id: 'arabic', wip: true },
     { name: 'Cyrillic (Russian)', id: 'russian' },
     { name: 'Devanagari (Hindi)', id: 'hindi', wip: true },
     { name: 'Greek (Greek)', id: 'greek', wip: true },
     { name: 'Hangul (Korean)', id: 'hangul', wip: true },
     { name: 'Hiragana (Japanese)', id: 'hiragana' },
     { name: 'Katakana (Japanese)', id: 'katakana' },
 ];
 $: categories = {
     ready: languages.filter(({wip}) => !wip),
     wip: languages.filter(({wip}) => wip),
 }
</script>

<section>
    <h2>About</h2>
    <p>This is a website with tools to learn writing systems</p>
    <p>It is a work in progress, languages will be added gradually</p>
</section>
<section>
    <h2>Languages</h2>
    <ul>
        {#each categories.ready as lang}
            <li><a class:wip={lang.wip} href={'study/'+lang.id}>{lang.name}</a></li>
        {/each}
    </ul>
    <section>
        <h3>Planned</h3>
        <ul>
            {#each categories.wip as lang}
                <li><a class:wip={lang.wip} href={'study/'+lang.id}>{lang.name}</a></li>
            {/each}
        </ul>
    </section>
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
 section {
     margin-top: 1em;
 }
</style>

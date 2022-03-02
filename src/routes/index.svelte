<script>
 import WIP from '../lib/WIP.svelte';
 import Quiz from '../lib/Quiz.svelte';

 const languages = [
     { name: 'Cyrillic (Russian)', id: 'russian' },
     { name: 'Hiragana (Japanese)', id: 'hiragana' },
     { name: 'Katakana (Japanese)', id: 'katakana' },
 ];
</script>

<WIP/>

<section id="header">
    <h1>LEARN A SCRIPT . XYZ</h1>
</section>
<section>
    This is a website with tools to learn the writing system for various
    languages
</section>
<section>
    <h2>Languages</h2>
    <ul>
        {#each languages as lang}
            <li><a href={'study/'+lang.id}>{lang.name}</a></li>
        {/each}
    </ul>
</section>

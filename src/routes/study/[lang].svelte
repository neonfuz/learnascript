<script>
 import { page } from '$app/stores';
 import Quiz from '$lib/Quiz.svelte';
</script>

<section>
    <Quiz lang={$page.params.lang} />
</section>

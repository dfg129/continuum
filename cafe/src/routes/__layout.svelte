<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import "../app.postcss";
    import '../app.css';
</script>

<Header/>

<main>
    <slot />
</main>

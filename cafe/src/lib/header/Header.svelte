<script lang="ts">
   	import Content from '$lib/header/Content.svelte';
    import Modal from '$lib/header/Modal.svelte';
	import { writable } from 'svelte/store';

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

	let modal = writable(null);
    let windowStyle = writable({});
</script>


<div class="corner">
	<Modal show={$modal}>
    	<Content/>
	</Modal> 
</div>
<div class="text-black text-3xl text-center font-bold p-3">
    Cafe Continuum
</div>


<style>
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}


	/* nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	} */
</style>

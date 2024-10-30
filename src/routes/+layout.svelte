<script>
	import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css"
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>
<main class="bg-[#4801ff] min-h-screen relative overflow-hidden">
    <Navbar/>
    {@render children?.()}
</main>
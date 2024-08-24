<script>
	import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css"
</script>
<main class="bg-[#4801ff] min-h-screen">
    <Navbar/>
    <slot/>
</main>
<script>
    import { onMount } from 'svelte';
    let condition = false;
    let showAnimate = false;
    onMount(() => {
     showAnimate = true;
     condition = !condition
    })
    import Description from "$lib/components/Description.svelte"
	import { slide } from 'svelte/transition';
</script>

<div class="flex  flex-col  text-white">
    {#if showAnimate}
        <h1 transition:slide={{ axis: "x"}} class="text-4xl gap-5 my-4">Arya Wirasandi</h1>
    {/if}
    <Description classNameRoot="md:w-1/2" description="Hi, I'm Arya, a Software Engineer specializing in frontend development. I've built some amazing projects, explore more in my project section!"/>
</div>
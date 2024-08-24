<script lang="ts">
	import { skills } from "$lib/data/skilss"
	import { cubicIn, quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate'
	import { onMount } from 'svelte';
	let condition = false;
	onMount(() => condition = !condition);
</script>

<div class="flex overflow-scroll mx-3 py-3 gap-4 md:overflow-auto justify-center flex-wrap scroll-hidden">
	{#each skills as skill (skill)}
		<div  animate:flip={{ delay: 250, duration: 250, easing: quintOut }} class="border-red-500 p-[12px] border-solid border-[1px] rounded-full hover:text-white hover:bg-red-500">
			{skill}
		</div>
	{/each}
</div>
<script lang="ts">
    import { navs } from '$lib/data/navs';
	import { onMount } from 'svelte';
	import hamburger from "$lib/assets/icons/hamburger.svg"
	import close from "$lib/assets/icons/close.svg"
	let pathName = ""
	onMount(() => {
		pathName = window.location.pathname.slice(1);
	})
	let show = false;
	const handleMenu = () => show = !show
</script>

<nav class="xs:absolute xs:z-10 xs:w-full xs:bottom-0 xs:h-full text-white p-[18px] bg-[#4801ff] hidden md:block">
	<ul class="flex xs:flex-col xs:gap-10 xs:items-center xs:justify-evenly md:justify-end">
		{#each navs as {name, id, href, ...rest} (id) }
			<li class="text-xl">
				<a  {href} {...rest} class="md:mr-[15px] text-white hover:text-green-400">{name}</a>
			</li>
		{/each}
	</ul>
</nav>

{#if show}
<nav class="xs:fixed xs:z-10 xs:w-full xs:bottom-0 xs:min-h-screen text-white p-[18px] bg-[#4801ff] block md:hiddden">
	<ul class="flex xs:flex-col  xs:min-h-screen xs:items-center xs:justify-center xs:gap-10 md:justify-end">
		{#each navs as {name, id, href, ...rest} (id) }
			<li class="text-xl">
				<a on:click={handleMenu} {href} {...rest} class="md:mr-[15px] text-white hover:text-green-400">{name}</a>
			</li>
		{/each}
	</ul>
</nav>
{/if}

<button on:click={handleMenu} class="rounded-full md:hidden  bg-green-400 text-white p-3 fixed bottom-5 right-5 z-20">
	{#if !show}
		<img src={hamburger} width="20" height="20" alt="hamburger"/>
	{:else}
		<img src={close} width="20" height="20" alt="hamburger"/>
	{/if}
</button>
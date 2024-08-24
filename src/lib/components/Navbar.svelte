<script lang="ts">
    import { navs } from '$lib/data/navs';
	import { onMount } from 'svelte';
	let pathName = ""
	onMount(() => {
		pathName = window.location.pathname.slice(1);
	})
</script>

<nav class="xs:fixed xs:w-full xs:bottom-0  text-white p-[18px] bg-[#4801ff]">
	<ul class="flex xs:justify-evenly md:justify-end">
		{#each navs as {name, id, href, ...rest} }
			{#if pathName !== id }
				<li class="text-xl">
					<a  {href} {...rest} class="md:mr-[15px] hover:text-green-400">{name}</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

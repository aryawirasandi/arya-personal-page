<script lang="ts">
	import { once, handlers } from 'svelte/legacy';

	import { navs as data } from '$lib/data/navs';
	import { onMount } from 'svelte';
	import hamburger from '$lib/assets/icons/hamburger.svg';
	import close from '$lib/assets/icons/close.svg';
	import { fade, fly, slide } from 'svelte/transition';
	import { cubicIn, cubicInOut } from 'svelte/easing';
	import type { IComponentNavs } from '$lib/types/components/Navs';
	let pathName = '';
	let showAnimate = $state(false);
	let navTrigger = false;
	let navs: IComponentNavs[] = $state([]);
	onMount(() => {
		pathName = window.location.pathname.slice(1);
		showAnimate = true;
	});
	let show = $state(false);
	let ping = $state(true);
	const handleMenu = () => {
		navs = [];
		let index = 0;
		show = !show;
		let interval: any;
        
		if (show) {
			interval = setInterval(() => {
				if (index < data.length) {
					navs.push(data[index]);
					navs = navs;
					index++;
				} else {
					clearInterval(interval);
				}
			}, 200);
		}

		if (!show) clearInterval(interval);
	};

	onMount(() => {
		let isBounce = localStorage.getItem("hold-ping");
		if(isBounce !== null && isBounce === "true"){
			ping = false;
		}else{
			ping = true;
		}
	})
</script>

{#if showAnimate}
	<nav
		transition:slide={{ axis: 'y', duration: 1000 }}
		class="xs:absolute xs:z-10 xs:w-full xs:bottom-0 xs:h-full text-white p-[18px] bg-[#4801ff] hidden md:block"
	>
		<ul class="flex xs:flex-col xs:gap-10 xs:items-center xs:justify-evenly md:justify-end">
			{#if data.length > 0}
				{#each data as { name, id, href, ...rest } (id)}
					<li class="text-xl">
						<a {href} {...rest} class="md:mr-[15px] text-white hover:text-green-400">{name}</a>
					</li>
				{/each}
			{/if}
		</ul>
	</nav>
{/if}

{#if show}
	<nav
		transition:fade={{ easing: cubicIn }}
		class="xs:fixed xs:z-50 xs:w-full xs:bottom-0 xs:min-h-screen text-white p-[18px] bg-[#4801ff] block md:hiddden"
	>
		{#if show}
			<div class="relative">
				<div
				transition:slide={{ axis: 'y', delay: 500 }}
				class="min-h-[500px] rotate-[320deg] min-w-full bg-green-400 absolute top-0 right-1/2 xs:min-h-0 xs:min-w-0 xs:top-0 xs:rotate-[120deg] xs:right-0 xs:h-[20rem] xs:w-[2rem]"
			></div>
			<div
				transition:slide={{ axis: 'x', delay: 500 }}
				class="min-h-[500px] rotate-[320deg] min-w-full bg-green-400 absolute bottom-0 left-1/2 x xs:rotate-45 xs:min-h-0 xs:min-w-0 xs:-top-20 xs:left-80 xs:h-[20rem] xs:w-[2rem]"
			></div>
			</div>
		{/if}
		{#if show}
			<ul
				class="flex xs:flex-col xs:min-h-screen xs:items-center xs:justify-center xs:gap-10 md:justify-end"
			>
				{#each navs as { name, id, href, ...rest } (id)}
					<li class="text-xl" transition:slide={{ axis: 'x', easing: cubicInOut }}>
						<a
							onclick={handleMenu}
							{href}
							{...rest}
							class="md:mr-[15px] text-white hover:text-green-400">{name}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
	</nav>
{/if}

{#if showAnimate}
	<div class="fixed bottom-5 right-5 z-50">
		<button
			transition:fly={{ easing: cubicIn }}
			onclick={handlers(handleMenu, once(() => {
				localStorage.setItem("hold-ping", "true")
				ping = false;
			}))}
			class="rounded-full md:hidden bg-green-400 border-white border-solid border-2 relative text-white p-3"
		>
			{#if ping}
				<div
					class="bg-green-400 animate-ping bottom-0 -left-1 h-[47.2px] w-[46.2px] rounded-full absolute"
				></div>
			{/if}
			{#if !show}
				<img
					transition:slide={{ axis: 'y' }}
					src={hamburger}
					width="20"
					height="20"
					alt="hamburger"
				/>
			{:else}
				<img transition:slide={{ axis: 'y' }} src={close} width="20" height="20" alt="hamburger" />
			{/if}
		</button>
	</div>
{/if}

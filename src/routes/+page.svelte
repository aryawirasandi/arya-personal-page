<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
	import { onMount } from 'svelte';
	import Typewritter from 'svelte-typewriter';
	import { slide } from 'svelte/transition';
	let showAnimate = $state(false);
	onMount(() => {
		showAnimate = true;
	});
</script>

<svelte:head>
	<title>Arya Personal Page</title>
	<meta name="description" content="Hello, Welcome to Arya Wirasandi Personal Page!" />
</svelte:head>
<div class="absolute top-1/2 right-1/2 translate-x-1/2">
	<h1 class="text-white text-4xl hidden md:block">
		I am <Typewritter mode="loop" wordInterval={3000} interval={75} unwriteInterval={75}>
			<span class="text-green-400"> Software Engineer </span>
			<span class="text-white"> Web Developer </span>
			<span class="text-green-400"> Frontend Dev </span>
		</Typewritter>
	</h1>
</div>

<div class="absolute xs:bottom-1/2 xs:translate-y-1/2 md:bottom-0 left-0 p-5 xs:z-10">
	<Profile />
	<h1 class="text-white text-4xl mt-4 md:hidden">
		I am <Typewritter mode="loop">
			<span class="text-green-400"> Software Engineer </span>
			<span class="text-white"> Web Developer </span>
			<span class="text-green-400"> Frontend Dev </span>
		</Typewritter>
	</h1>
</div>

{#if showAnimate}
	<div
		transition:slide={{ axis: 'y' }}
		class="min-h-[500px] rotate-[320deg] min-w-full bg-green-400 absolute top-0 right-1/2 xs:min-h-0 xs:min-w-0 xs:top-0 xs:rotate-[120deg] xs:right-0 xs:h-[20rem] xs:w-[2rem]"
	></div>
	<div
		transition:slide={{ axis: 'x' }}
		class="min-h-[500px] rotate-[320deg] min-w-full bg-green-400 absolute bottom-0 left-1/2 x xs:rotate-45 xs:min-h-0 xs:min-w-0 xs:-top-20 xs:left-80 xs:h-[20rem] xs:w-[2rem]"
	></div>
	<div
		transition:slide={{ axis: 'y' }}
		class="absolute rotate-[120deg] min-w-0 -bottom-20 left-0 h-[20rem] w-[2rem] bg-green-400 md:hidden"
	></div>
	<div class="absolute rotate-45 -bottom-32 h-[20rem] w-[2rem] bg-green-400 md:hidden"></div>
{/if}

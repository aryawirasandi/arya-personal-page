<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	import Error from '$lib/components/Error.svelte';
	import Success from '$lib/components/Success.svelte';
	export let form: ActionData;
	let showAnimate = false;
	onMount(() => {
		showAnimate = true;
	});
</script>

<svelte:head>
	<title>Contact Me</title>
	<meta name="description" content="to find out more, you can contact me!" />
</svelte:head>
<div class="p-4 min-h-screen justify-center flex flex-col">
	<h1 class="text-white text-4xl">Contact Me!</h1>
	<ul transition:slide={{ axis: 'y' }} class="text-white flex flex-col gap-3 mt-10">
		<li class="xs:text-xl text-3xl hover:text-green-400">
			<a href="mailto:aryawirasandi7153@gmail.com">aryawirasandi7153@gmail.com</a>
		</li>
		<li class="xs:text-xl text-3xl hover:text-green-400">
			<a href="tel:+6282218341631">Call (+6282281341631)</a>
		</li>
		<li class="xs:text-xl text-3xl hover:text-green-400">
			<a href="https://wa.me/+6282218341631?text=Hello%20Arya">WhatsApp (+6282281341631)</a>
		</li>
	</ul>
	<div class="border-solid border-[1px] border-white w-1/2 mt-4 xs:w-full"></div>
	<div class="md:w-1/2 lg:w-1/2 mt-4">
		{#if typeof form?.success !== 'undefined'}
			{#if form.success}
				<Success>
					{form.message}
				</Success>
			{:else}
				<Error>
					{form.message}
				</Error>
			{/if}
		{/if}
		<form class="grid grid-cols-1" method="POST" action="/contact">
			<label class="text-white flex flex-col">
				<span class="mb-3"> Email </span>
				<input
					class="text-black rounded-md px-3 outline-none py-2 font-sans"
					placeholder="please enter your email"
					name="email"
					type="text"
				/>
			</label>
			<label class="text-white flex flex-col mt-3">
				<span class="mb-3"> Subject </span>
				<input
					class="text-black rounded-md px-3 outline-none py-2 font-sans"
					placeholder="please enter your subject"
					name="subject"
					type="text"
				/>
			</label>
			<label class="text-white flex flex-col mt-4 font-sans">
				<span class="mb-3"> Description </span>
				<textarea
					name="description"
					class="rounded-md outline-none text-black px-3 py-2"
					placeholder="please enter your description"
				></textarea>
			</label>
			<button class="rounded-md bg-green-400 text-white mt-4 p-3">Send Mail</button>
		</form>
	</div>
</div>
{#if showAnimate}
	<div
		transition:slide={{ axis: 'y' }}
		class="md:hidden bg-green-400 absolute min-h-0 min-w-0 top-0 rotate-[120deg] right-0 h-[20rem] w-[2rem]"
	/>
	<div
		transition:slide={{ axis: 'x' }}
		class="md:hidden bg-green-400 absolute bottom-0 x rotate-45 min-h-0 min-w-0 -top-20 left-[24rem] h-[20rem] w-[2rem]"
	/>
	<div transition:slide={{ axis: 'y' }}>
		<div
			class="min-h-[500px] rotate-[320deg] min-w-full bg-green-400 absolute bottom-0 left-1/2 xs:hidden"
		></div>
	</div>
{/if}

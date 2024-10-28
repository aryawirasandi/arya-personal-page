<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	import Error from '$lib/components/Error.svelte';
	import Success from '$lib/components/Success.svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { Contact } from './contact.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	let { form } = $props<{ form: ActionData }>();
	let timer = tweened(100, {
		duration: 1500
	});
	$effect(() => {
		contact.showAnimate = true;
		if (contact.isThereElement(form)) {
			if ($timer < 0) {
				contact.showAlert = false;
			} else {
				contact.showAlert = true;
				timer.set($timer - 25);
			}
		}
		return () => {
			contact.showAlert = false;
			contact.showAnimate = false;
		};
	});
	let contact = new Contact();
</script>

<svelte:head>
	<title>Contact Me</title>
	<meta name="description" content="to find out more, you can contact me!" />
</svelte:head>
<div class="p-4 min-h-screen justify-center flex flex-col relative z-20">
	<h1 class="text-white text-4xl">Contact Me!</h1>
	<ul class="text-white flex flex-col gap-3 mt-10">
		{#each contact.infos as { href, name }, index (index)}
			<li class="xs:text-xl text-3xl hover:text-green-400">
				<a {href}>{name}</a>
			</li>
		{/each}
	</ul>
	<div class="border-solid border-[1px] border-white w-1/2 mt-4 xs:w-full"></div>
	<div class="md:w-1/2 lg:w-1/2 mt-4">
		<div class="hidden md:block">
			{#if contact.isThereElement(form)}
				{@render modal(form.success, form.message)}
			{/if}
		</div>
		<ContactForm/>
	</div>
</div>
{#if contact.showAnimate}
	<div
		transition:slide={{ axis: 'y' }}
		class="md:hidden bg-green-400 absolute min-h-0 min-w-0 -top-20 rotate-[120deg] right-0 h-[20rem] w-[2rem]"
	></div>
	<div
		transition:slide={{ axis: 'x' }}
		class="md:hidden bg-green-400 absolute bottom-0 x rotate-45 min-h-0 min-w-0 -top-20 right-10 h-[20rem] w-[2rem] z-10"
	></div>
	<div transition:slide={{ axis: 'y' }}>
		<div
			class="min-h-[500px] rotate-[320deg] min-w-full bg-green-400 absolute bottom-0 left-1/2 xs:hidden"
		></div>
	</div>
{/if}

<div class="block md:hidden">
	{#if contact.isThereElement(form) && contact.showAlert}
		<div
			transition:fly={{ y: 250, delay: 200, duration: 200, easing: cubicOut }}
			class="fixed w-1/2 bottom-20 right-0 -translate-x-1/2 z-[60]"
		>
			<div class="relative">
				{@render modal(form.success, form.message)}
				<div
					id="timer"
					class="h-1 rounded-md bottom-0 {contact.timerPopupClass(form)} absolute left-0"
					style="width: {$timer}%"
				></div>
			</div>
		</div>
		<div
			transition:fade
			class="xs:fixed xs:z-50 xs:w-full xs:bottom-0 xs:min-h-screen text-white p-[18px] bg-black opacity-75 block md:hiddden"
		></div>
	{/if}
</div>

{#snippet modal(success: boolean, message: string)}
	{#if success}
		<Success>
			{message}
		</Success>
		{:else}
		<Error>
			{message}
		</Error>
	{/if}
{/snippet}

<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
	import Typewritter from "svelte-typewriter"
</script>
<svelte:head>
	<title>Arya Personal Page</title>
    <meta name="description" content="Hello, Welcome to Arya Wirasandi Personal Page!">
</svelte:head>
<div class="absolute top-1/2 right-1/2 translate-x-1/2">
	<h1 class="text-white text-4xl hidden md:block">
		I am <Typewritter mode="loop" wordInterval={3000} interval={75} unwriteInterval={75}>
			<span class="text-green-400">
				Software Engineer
			</span>
			<span class="text-white">
				Web Developer
			</span>
			<span class="text-green-400">
				Frontend Dev
			</span>
		</Typewritter>
	</h1>
</div>

<div class="absolute xs:bottom-0 xs:-translate-y-1/2 md:bottom-0 left-0 p-5">
	<Profile/>
	<h1 class="text-white text-4xl mt-4 md:hidden">
		I am <Typewritter mode="loop">
			<span class="text-green-400">
				Software Engineer
			</span>
			<span class="text-white">
				Web Developer
			</span>
			<span class="text-green-400">
				Frontend Dev
			</span>
		</Typewritter>
	</h1>
</div>
<div class="min-h-[500px] rotate-[320deg]  min-w-full bg-green-400 absolute top-0 right-1/2 xs:hidden">
</div>
<div class="min-h-[500px] rotate-[320deg]  min-w-full bg-green-400 absolute bottom-0 left-1/2 xs:hidden">
</div>
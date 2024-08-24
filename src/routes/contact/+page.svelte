<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
    let showAnimate = false;
    onMount(() => {
        showAnimate = true;
    })
</script>
<div class="p-4 min-h-screen justify-center flex flex-col">
    <h1 class="text-white text-4xl">
        Contact Me!
    </h1>
    <ul transition:slide={{ axis : "y"}} class="text-white flex flex-col gap-10 mt-10">
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
</div>
{#if showAnimate}
    <div transition:slide={{ axis: "y"}}>
        <div class="min-h-[500px] rotate-[320deg]  min-w-full bg-green-400 absolute bottom-0 left-1/2 xs:hidden">
        </div>
    </div>
{/if}
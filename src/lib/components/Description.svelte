<script lang="ts">
	import type { typeVariant } from "$lib/data/type-variant";
	import { onMount } from "svelte";
    import { fade, slide } from "svelte/transition";
    export const classNameRoot: typeVariant<string>= "";
    export const classNAmeHeading: typeVariant<string> = "";
    export const classNameDescription: typeVariant<string> = "";
    export let title: typeVariant<string> = "";
    export let description: typeVariant<string> = "";
    let showAnimate = false;
    onMount(() => {
        showAnimate = true;
    })
</script>
<div class="md:w-1/2 {classNameRoot}">
    {#if !title && !description }
        <slot/>
    {:else if !title && showAnimate }
        <div transition:slide={{ delay: 250}}>
            <p class="{'text-left ' + classNameDescription}">
                {description}
            </p>
        </div>
    {:else}
        <h2 class="font-medium text-left {classNAmeHeading}">
            {title}
        </h2>
    {/if}
</div>
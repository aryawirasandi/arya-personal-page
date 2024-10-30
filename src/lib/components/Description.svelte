<script lang="ts">
	import type { typeVariant } from "$lib/data/type-variant";
	import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    interface Props {
        title?: typeVariant<string>;
        description?: typeVariant<string>;
        classNameRoot?: typeVariant<string>;
        classNAmeHeading?: typeVariant<string>;
        classNameDescription?: typeVariant<string>;
        children?: import('svelte').Snippet;
    }

    let { title = "", description = "", classNameRoot = "", classNAmeHeading = "", classNameDescription = "", children }: Props = $props();
    let showAnimate = $state(false);
    onMount(() => {
        showAnimate = true;
    })
</script>
<div class="md:w-1/2 {classNameRoot}">
    {#if !title && !description }
        {@render children?.()}
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
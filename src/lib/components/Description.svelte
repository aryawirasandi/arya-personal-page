<script lang="ts">
	  import type { typeVariant } from "$lib/data/type-variant";
    export const classNameRoot: typeVariant<string>= "";
    export const classNAmeHeading: typeVariant<string> = "";
    export const classNameDescription: typeVariant<string> = "";
    export let title: typeVariant<string> = "";
    export let description: typeVariant<string> = "";
</script>
<div class="md:w-1/2 {classNameRoot}">
    {#if !title && !description }
        <slot/>
    {:else if !title }
        <p class="{'text-left ' + classNameDescription}">
            {description}
        </p>
    {:else}
        <h2 class="font-medium text-left {classNAmeHeading}">
            {title}
        </h2>
    {/if}
</div>
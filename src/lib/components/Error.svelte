<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
    export const className: undefined | string = undefined
</script>

<div class={`bg-red-300 text-red-500 border-solid border-red-300 border-2 p-4 rounded-md text-center my-4 ${className ?? ""}`}>
    {@render children?.()}
</div>
<script lang="ts">
    interface Props {
        className?: undefined | string;
        children?: import('svelte').Snippet;
    }

    let { className = undefined, children }: Props = $props();
</script>
<div class={`bg-green-300 text-green-500 border-solid border-green-300 border-2 p-4 rounded-md text-center my-4 ${className || ""}`}>
    {@render children?.()}
</div>
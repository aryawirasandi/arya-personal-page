<script lang="ts">
	import type { typeVariant } from "$lib/data/type-variant";

  interface Props {
    extendClass?: typeVariant<string>;
    children?: import('svelte').Snippet;
  }

  let { extendClass = undefined, children }: Props = $props();
</script>
<div class={'bg-white shadow-md' + ' ' + extendClass || ""}>
    {@render children?.()}
</div>
<script lang="ts">
	import type { typeVariant } from "$lib/data/type-variant";

  export let extendClass: typeVariant<string> = undefined;
</script>
<div class={'bg-white shadow-md' + ' ' + extendClass || ""}>
    <slot/>
</div>
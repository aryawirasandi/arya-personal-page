<script lang="ts">
    export let className: undefined | string = undefined
</script>
<div class={`bg-green-300 text-green-500 border-solid border-green-300 border-2 p-4 rounded-md text-center my-4 ${className || ""}`}>
    <slot/>
</div>
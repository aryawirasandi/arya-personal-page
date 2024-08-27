<script lang="ts">
    export const className: undefined | string = undefined
</script>

<div class={`bg-red-300 text-red-500 border-solid border-red-300 border-2 p-4 rounded-md text-center my-4 ${className ?? ""}`}>
    <slot/>
</div>
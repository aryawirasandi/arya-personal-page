<script lang="ts">
    import type { IBadgeComponent } from "$lib/types/components/Badge";
    interface Props {
        badge: IBadgeComponent;
    }

    let { badge }: Props = $props();
</script>
<!-- svelte-ignore a11y_missing_attribute -->
<a {...badge} class="border-red-500 p-[12px] border-solid border-[1px] rounded-full hover:text-white hover:bg-red-500">{badge.name}</a>
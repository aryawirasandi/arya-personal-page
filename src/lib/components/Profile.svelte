<script>
    import { url } from "$lib/types/const/url"
    import { onMount } from 'svelte';
    let condition = false;
    onMount(() => {
     condition = !condition
    })
    import Description from "$lib/components/Description.svelte"
</script>

<div class="flex  flex-col  text-white">
    <h1 class="text-4xl gap-5 my-4">Arya Wirasandi</h1>
    <Description classNameRoot="md:w-1/2" description="Hi, I'm Arya, a Software Engineer specializing in frontend development. I've built some amazing projects—explore more in my project section!"/>
</div>
<script lang="ts">
    import Card from "$lib/components/Card.svelte";
	import { projects } from "$lib/data/projects";  
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
    let showAnimate = false;
    onMount(() => {
        showAnimate = true
    })
</script>
<svelte:head>
	<title>List of projects </title>
    <meta name="description" content="List of Projects">
</svelte:head>
<div class="mx-5 md:mx-10 pt-5 text-white">
    <h1 class="underline text-4xl mb-3">Experience Projects!</h1>
    <p>The latest projects that i've been working on! </p>
    {#if projects.length > 0 }
        {#if showAnimate}
            <div transition:slide={{ axis: "y"}} class="xs:w-full xs:mx-auto mt-10 md:grid md:grid-cols-2 md:gap-10">
                {#each projects as project }
                    <Card extendClass="mt-10 rounded-[4px]">
                        {#if Array.isArray(project.src)}
                            {#each project.src as img }
                                <img transition:slide={{ axis: "y", duration: 250}} src={img} alt="placeholder preview" class="w-full rounded-[4px]"/>
                            {/each}
                            {:else}
                                <img transition:slide={{ axis: "y", duration: 250}} src={project.src} alt="placeholder preview" class="w-full rounded-[4px]"/>
                        {/if}
                        <div class="p-5 md:flex md:flex-col md:justify-between">
                            <p class="mb-2 text-md text-green-400">{project.title}</p>
                            {#if project.url !== "-" }
                                <a href={project.url} target="_blank" class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-300 w-full block text-center md:inline md:w-auto">See The Projects</a>
                            {:else}
                                <button on:click={() => alert("Sorry!, it's a private project so i can only show you a preview image")} class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-300 w-full block text-center md:inline md:w-auto">
                                    Intranet or Private Project
                                </button>
                            {/if}
                        </div>
                    </Card>
                {/each}   
        </div>
        {/if}
    {:else}
    <p class="text-center absolute top-[50%] left-[50%] translate-x-[-50%] text-3xl">Tidak ada Data</p>
    {/if}
</div>
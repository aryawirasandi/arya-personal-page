<script lang="ts">
    import Card from "$lib/components/Card.svelte";
	import { projects } from "$lib/data/projects";  
</script>
<svelte:head>
	<title>List of projects </title>
    <meta name="description" content="List of Projects">
</svelte:head>
<div class="mx-5 md:mx-10 pt-5 text-white">
    <h1 class="underline text-4xl mb-3">Experience Projects!</h1>
    <p>The latest projects that i've been working on! </p>
    {#if projects.length > 0 }
    <div class="w-full mx-auto mt-10 md:w-full">
            {#each projects as project }
                <Card extendClass="mt-10">
                    {#if Array.isArray(project.src)}
                      {#each project.src as img }
                         <img src={img} alt="placeholder preview" class="w-full"/>
                      {/each}
                    {:else}
                    <img src={project.src} alt="placeholder preview" class="w-full"/>
                    {/if}
                    <div class="p-5">
                        <p class="mb-2 text-3xl">{project.title}</p>
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
    {:else}
    <p class="text-center absolute top-[50%] left-[50%] translate-x-[-50%] text-3xl">Tidak ada Data</p>
    {/if}
</div>
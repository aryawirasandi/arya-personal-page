<form class="grid grid-cols-1" method="POST" action="/contact">
    <label class="text-white flex flex-col">
        <span class="mb-3"> Email </span>
        <input
            class="text-black rounded-md px-3 outline-none py-2 font-sans"
            placeholder="please enter your email"
            name="email"
            type="text"
        />
    </label>
    <label class="text-white flex flex-col mt-3">
        <span class="mb-3"> Subject </span>
        <input
            class="text-black rounded-md px-3 outline-none py-2 font-sans"
            placeholder="please enter your subject"
            name="subject"
            type="text"
        />
    </label>
    <label class="text-white flex flex-col mt-4 font-sans">
        <span class="mb-3"> Description </span>
        <textarea
            name="description"
            class="rounded-md outline-none text-black px-3 py-2"
            placeholder="please enter your description"
        ></textarea>
    </label>
    <button class="rounded-md bg-green-400 text-white mt-4 p-3">Send Mail</button>
</form>
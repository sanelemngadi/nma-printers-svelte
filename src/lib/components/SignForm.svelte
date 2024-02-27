<script lang="ts">
	import SprotInput from "./SprotInput.svelte";

    export let title: string;
    export let remember: boolean = false;
</script>

<form class="sprot-form flex flex-col max-w-xl mx-auto bg-sprotCard px-6 py-9 border my-6 rounded-md shadow-md">
    <h1 class="text-3xl my-6 text-center">{title}</h1>
    <label for="email" class="flex flex-col mb-6 gap-4">
        <span>Email: <span class="text-red-700">*</span></span>
        <!-- <input class="border p-2 border-sprotDark rounded-md" > -->
        <SprotInput type="email" placeholder="enter your email" name="email" id="email" />
    </label>
    <label for="password" class="flex flex-col mb-6 gap-4">
        <span>Password: <span class="text-red-700">*</span></span>
        <!-- <input class="border p-2 border-sprotDark rounded-md" placeholder="enter your password" type="password" name="password" id="password"> -->
        <SprotInput type="password" id="password" placeholder="enter your password" />
    </label>
    {#if remember}
        <label for="remember" class="flex flex-row gap-6 mb-6">
            <input type="checkbox" name="remember" id="remember">
            Remember me
        </label>
    {/if}
    <button class="px-4 py-2 border w-full bg-sprotBlue text-sprotBg rounded-md hover:bg-sprotDark"><slot name="button"/></button>
    <slot name="links" />
    <!-- <p class="mt-3">Don't have an account? <a href={"#"} class="text-sprotBlue underline">Register now</a></p> -->
    
</form>
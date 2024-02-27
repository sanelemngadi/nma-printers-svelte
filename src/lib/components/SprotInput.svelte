<script lang="ts">
	import { onMount } from "svelte";

    export let type: string = "text";
    export let name: string | undefined = undefined;
    export let placeholder: string | undefined = undefined;
    export let id: string;
    export let className: string = "";
    export let label: string | undefined = undefined;
    export let important: boolean = false;

    onMount(() => {
        if(!placeholder && label) {
            placeholder = `Enter your ${label}`;
        }
    })
</script>

<div class="sprot-form-control flex flex-col gap-2 {className}">
    {#if label}
    <label for={id}>{label}:  
        {#if important}
            <span class="text-lg text-red-600 inline-flex w-3 h-3 items-center justify-center">*</span>
        {/if}
    </label>
    {/if}
    <input class="input h-10 p-2 outline-none border border-sprotDark rounded-md text-[16px]" {id} {type} {name} {placeholder} />
</div>

<style>
    .input:focus {
        box-shadow: 4px 4px rgba(198, 231, 255, 1),
                    4px -4px rgba(198, 231, 255, 1),
                    -4px 4px rgba(198, 231, 255, 1),
                    -4px -4px rgba(198, 231, 255, 1);
    }
</style>
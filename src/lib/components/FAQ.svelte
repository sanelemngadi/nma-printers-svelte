<script lang="ts">
    export let open: boolean = false;
    export let question: string;
</script>

<div class="max-w-2xl my-2">
    <button class="flex flex-col gap-4 bg-sprotCard p-2 md:flex-row md:items-center" on:click={() => open = !open}>
        <span class="inline-flex transition-all w-8 h-8 border bg-sprotGray items-center justify-center rounded-[50%] text-2xl text-sprotBg {open && "rotate-45"} md:w-8 md:h-8">+</span>
        <h4 class="font-bold text-[16px]">{question}</h4>
    </button>
    <div class="pl-4 md:pl-14">
        <div class="pl-4 border-l-2 border-sprotBlue overflow-hidden">
            <div class="transition-all {open ? "h-4" : "h-0" }"></div>
            <p class="text-[16px] max-w-lg overflow-hidden transition-all {open ? "h-auto" : "h-0" }">
                <slot />
            </p>
            <div class="transition-all {open ? "h-4" : "h-0" }"></div>
        </div>
    </div>

</div>
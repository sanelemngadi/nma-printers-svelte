<script lang="ts">
    export let className: string = "";
    export let horizontal: boolean = true;
    export let size = 32;
</script>

<div class="flex gap-2 {horizontal ? `items-center h-[${size}px] px-3 flex-row` : `items-center w-[${size}px] py-3 flex-col`}  {className}">
    <slot />
</div>

<!-- <style>
    div {
        background-color: var(--mid-gray, white);
    }
</style> -->
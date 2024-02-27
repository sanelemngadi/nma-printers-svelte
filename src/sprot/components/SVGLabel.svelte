<script lang="ts">
    export let svg: string | undefined = undefined;
    export let className: string = "";
</script>

<p class="flex rounded-full items-center justify-between gap-1 w-fit {className}">
    {#if svg}
    <img src={svg} alt="this is the dynamic icon for labels" class="w-4 h-4">
    {/if}
    <slot />
</p>

<script lang="ts">
    export let svg: string | undefined = undefined;
    export let className: string = "";
    export let href: string = "#";
</script>

<a {href} class="flex rounded-md border border-sprotDark items-center justify-between gap-1 w-fit px-4 py-2 {className}">
    {#if svg}
    <img src={svg} alt="this is the dynamic icon for labels" class="w-4 h-4">
    {/if}
    <slot />
</a>

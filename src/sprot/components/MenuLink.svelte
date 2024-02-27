<script lang="ts">
    export let url: string = "#";
    export let className: string = "";
</script>

<a href={url} class="relative flex px-4 h-8 rounded-sm items-center justify-center hover:text-sprotBlue {className}">
    <slot />
</a>

<style lang="scss">
    a {
        white-space: nowrap;
        font-size: 1rem;
    }
    
    a.sprot-active::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0%;
        width: 0.75rem;
        height: 0.75rem;
        transform: translate(0%, -50%);
        background-color: rgba(blue, 1);
    }
</style>
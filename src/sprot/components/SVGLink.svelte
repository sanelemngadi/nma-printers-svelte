<script lang="ts">
    export let url: string = "#";
    export let svg: string | undefined;
    export let alt: string;
    export let className: string = "";
</script>

<a href={url} class="relative inline-flex w-7 h-7 rounded-full items-center justify-center {className}">
    <img src={svg} {alt} class="w-4 h-4">
</a>

<style lang="scss">
    a::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0%;
        height: 0%;
        transform: translate(-50%, -50%);
        background-color: rgba(#DE80DB, 0.25);
        border-radius: 50%;
        border: 1px solid transparent;
    }
    
    a:hover::after {
        // transition: none;
        width: 100%;
        height: 100%;
        border: 1px solid gray;
        transition: all .25s ease-in-out;
    }
    
    a:active::after {
        width: 90%;
        height: 90%;
        // border: 1px solid gray;
        transition: all .05s ease-in-out;
    }
</style>
<script lang="ts">
    import dropDownSVG from "$assets/ui/dropdown.svg"
    export let svg: string | undefined = undefined;
    export let className: string = "";
    export let href: string = "#";
    export let label: string = "";
    export let hovered: boolean = false;

    let dontTurnOffOnMouseUp = false;
</script>

<!-- <a {href} class="flex rounded-md border border-sprotDark items-center justify-between gap-1 w-fit px-4 py-2 {className}">
    
</a> -->

<button 
    class="relative flex gap-1 px-4 h-8 items-center justify-center hover:text-sprotBlue {className}"
    on:mouseenter={() => hovered=true}
    on:mousedown={() => {
        dontTurnOffOnMouseUp = true;
        hovered=true;
    }}
    on:mouseleave={() => hovered=false}
    on:mouseup={() => {
        if(dontTurnOffOnMouseUp) {
            dontTurnOffOnMouseUp = false;
        } else {

            hovered =false;
        }
        }}
    >
    <span>{label}</span>
    <img src={dropDownSVG} width="16" height="16" class="w-4 h-4 opacity-70" alt="">

    <div class="sprot-dropdown absolute top-8 z-30 w-52 bg-sprotBg border rounded-md overflow-hidden shadow-xl {hovered && "sprot-hovered" }">
        <div class="w-full h-full">
            <!-- <button class="w-8 h-8">
            </button> -->
            <a on:click={() => hovered=false} class="w-full h-8 px-4 flex items-center hover:text-sprotBg hover:bg-sprotBlue" href={"/shop"}>All</a>
            <!-- <button class="w-full h-8">
            </button> -->
            <a on:click={() => hovered=false} class="w-full h-8 px-4 flex items-center hover:text-sprotBg hover:bg-sprotBlue" href={"/shop?query=t-shirt"}>T-shirt</a>
            <!-- <button class="w-full h-8">
            </button> -->
            <a on:click={() => hovered=false} class="w-full h-8 px-4 flex items-center hover:text-sprotBg hover:bg-sprotBlue" href={"/shop?query=hoodies"}>Hoodies</a>
            <!-- <button class="w-full h-8">
            </button> -->
            <a on:click={() => hovered=false} class="w-full h-8 px-4 flex items-center hover:text-sprotBg hover:bg-sprotBlue" href={"/shop?query=sweaters"}>Sweaters</a>
        </div>
    </div>
</button>

<style lang="scss">
    button {
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

    .sprot-dropdown {
        visibility: none;
        opacity: 0;
        transform: translateY(32px);
        transition: none;
        pointer-events: none;
    }
    
    .sprot-dropdown.sprot-hovered {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
        pointer-events: all;
        transition: all 0.15s ease-in-out;

    }
</style>

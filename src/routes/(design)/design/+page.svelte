<script>
    import closeSVG from "$assets/ui/search.svg";
	import entity from "$lib/entity";
	import { SVGLabel, SVGLink } from "$sprot/components";
	import Draggable from "$sprot/components/Draggable.svelte";
	import MenuLink from "$sprot/components/MenuLink.svelte";
	import Toolbars from "$sprot/components/Toolbars.svelte";
	import Notebook from "./Notebook.svelte";

    // let entity = entity;
</script>

<div class="sprot-container flex relative z-50 w-full h-full bg-slate-400">
    <div class="sprot-main flex-1 border border-solid border-red-700">
        <div class="sprot-close w-8 h-8 flex absolute  right-3 lg:right-72 top-2">
            <SVGLink svg={closeSVG} alt="" url="/" />
        </div>
    
        <Draggable horizontal={true} right>
            <Toolbars horizontal={true}>
                <MenuLink>Rotate</MenuLink>
                <MenuLink>Scale</MenuLink>
                <MenuLink>Left</MenuLink>
                <MenuLink>Right</MenuLink>
                <MenuLink>Top</MenuLink>
                <MenuLink>Bottom</MenuLink>
            </Toolbars>
        </Draggable>
        <Draggable horizontal={false} left={true}>
            <Toolbars>
                <SVGLabel svg={closeSVG}>Pace Image</SVGLabel>
            </Toolbars>
            <Toolbars>
                <SVGLabel svg={closeSVG}>Pace Image</SVGLabel>
            </Toolbars>
            <Toolbars>
                <SVGLabel svg={closeSVG}>Pace Image</SVGLabel>
            </Toolbars>
            <Toolbars>
                <SVGLabel svg={closeSVG}>Pace Image</SVGLabel>
            </Toolbars>
        </Draggable>
    
        <div class="container mx-auto p-8">
            <div class="canvas w-full h-full flex items-center justify-center">
                <img src={entity.back?.image} alt="">
            </div>
        </div>
    </div>
    <div class="sprot-panels w-64 border border-solid border-red-700 h-full">
        <Notebook />
    </div>
</div>



<style lang="scss">
    .sprot-container {
        height: calc(100vh - 32px);
    }
</style>
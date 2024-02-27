<script lang="ts">
	import { onMount } from 'svelte';

    export let className: string = "";
    export let horizontal: boolean = true;
    export let top: boolean = true;
    export let right: boolean = false;
    export let bottom: boolean = false;
    export let left: boolean = false;



    let draggedElement: HTMLElement;

    let mouse = { x: 0, y: 0 };
    let init_mouse = { x: 0, y: 0 };
    let item_position = { x: 0, y: 0 };
    let client_size = { w: 0, h: 0 }
    let dragging = false;

    const turnoff = () => {
        top = false;
        left = false;
        right = false;
        bottom = false;
    }


    $: {
        if(bottom) {
            turnoff();
            bottom = true;
        } else if(top) {
            turnoff();
            top = true;
        } else if(left) {
            turnoff();
            left = true;
        } else if(right) {
            turnoff();
            right = true;
        }
    }

    onMount(() => {
        window.addEventListener("mousemove", drag);
        window.addEventListener("pointermove", drag);

        window.addEventListener("mouseup", dragEnd);
        window.addEventListener("pointerup", dragEnd);

        window.addEventListener("resize", onResize);

        onResize();

        return () => {
            window.removeEventListener("mousemove", drag);
            window.removeEventListener("pointermove", drag);

            window.removeEventListener("mouseup", dragEnd);
            window.removeEventListener("pointerup", dragEnd);
            window.removeEventListener("resize", onResize);
        }
    });

    const onResize = () => {
        client_size = { w: window.innerWidth - 10, h: window.innerHeight - 38 };
    }

    const dragStart = (e: MouseEvent) => {
        init_mouse = { x: e.clientX, y: e.clientY };
        dragging = true;

        item_position = { x: draggedElement.offsetLeft, y: draggedElement.offsetTop }

        // console.log("drag init");   
    }

    const drag = (e: MouseEvent) => {
        mouse = { x: e.clientX, y: e.clientY };

        if(dragging) {
            const movement = {
                x: mouse.x - init_mouse.x, y: mouse.y - init_mouse.y
            }

            const item_size = { w: draggedElement.clientWidth, h: draggedElement.clientHeight };

            let minX = Math.max(10, item_position.x + movement.x);
            let minY = Math.max(10, item_position.y + movement.y);

            let maxX = Math.min(minX, client_size.w - item_size.w );
            let maxY = Math.min(minY, client_size.h - item_size.h );

            draggedElement.style.left = maxX + "px";
            draggedElement.style.top = maxY + "px";
            draggedElement.style.bottom = "auto";
            draggedElement.style.right = "auto";

            document.body.style.cursor = "all-scroll";
            document.body.style.pointerEvents = "none";
            draggedElement.style.pointerEvents = "all";

            // console.log("dragging: left ", item_position.x + movement.x + "px", " top: ", item_position.y + movement.y + "px");
            
        }

        // init_mouse = mouse;
    }
    const dragEnd = (e: MouseEvent) => {
        dragging = false;

        console.log("drag ended");
        document.body.style.cursor = "auto";
        document.body.style.pointerEvents = "auto";
        draggedElement.style.pointerEvents = "auto"
        
    }
</script>

<div 
    class="sprot-draggable flex 
        {horizontal ? "flex-row" : "flex-col"} absolute z-40
        {top && "left-1/2 -translate-x-1/2 top-3"} {left && "top-1/2 -translate-y-1/2 left-3"} 
        {bottom && "left-1/2 -translate-x-1/2 bottom-3"} {right && "top-1/2 -translate-y-1/2 right-3"}
        {dragging && "shadow-lg"} border-2 border-solid border-blue-500 bg-white {className}" 
        bind:this={draggedElement}>

    <div class="border border-red-600">
        <button 
            class="sprot-gripper block min-h-1 min-w-1 {horizontal ? "w-3 h-full mr-1" : "h-3 w-full mb-1"} cursor-all-scroll bg-black"
            on:mousedown={dragStart}
            on:pointerdown={dragStart}>
    
        </button>
    </div>
    <div class="flex-1 border border-red-600">
        <slot />
    </div>
</div>
<!-- 
<style>
    .sprot-draggable {
        left: var(--left);
        top: var(--top);
        bottom: var(--bottom);
        right: var(--right);
    }
</style> -->
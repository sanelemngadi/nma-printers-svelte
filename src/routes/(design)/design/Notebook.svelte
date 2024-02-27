<script lang="ts">
    import { onMount } from "svelte";
    // import CanvasTab from "../../canvas/components/CanvasTab.svelte";
    // import closeSvg from "../../../assets/ui/dark/close.svg";
    // import dropdownSvg from "../../../assets/ui/dark/dropdown-arrow.svg";
    // import plusSvg from "../../../assets/ui/dark/plus.svg";
    // import { panelState, removePanel, setActionPanel, type SprotPanel } from "../../state/action-panel";
    // import SidePanel from "../../panels/componets/SidePanel.svelte";
    // import PanelsTab from "../../panels/componets/PanelsTab.svelte";
    // import SvgButton from "../SVGButton.svelte";

    // let actionPanel: SprotPanel | null = null;
    // let panels: SprotPanel[] = [];

    onMount(()=> {

    });

    const onClosePanel = (id: number) => {
        // removePanel(id);
    }

    const onCloseActive = () => {
        // const active = panels.find(panel => panel.active);

        // if(active) {
        //     removePanel(active.id);
        // }
    }
    
</script>

<div class="sprot-notebook">
    {#if true}
    <div class="sprot-notebook_header">
        <p class="label">{"Properties"}</p>
        <div class="gripper"></div>
        <div class="controls">
            <input type="checkbox" name="" id="" title="undo panel">
            <button 
                class="close-notebook" 
                title="close panel"
                on:click={() => onCloseActive()}
                >
                <img src={"closeSvg"} alt="">
            </button>
        </div>
    </div>
    {/if}
    <div class="sprot-notebook_body">
        {#if true}
        <div class="sprot-notebook_page" data-name={"Properties"}>
            <!-- <svelte:component this={actionPanel.panel} /> -->
        </div>  
        {/if}
    </div>
    {#if true}
    <div class="sprot-notebook_footer" >
        <!-- <button class="sprot-notebook_tab-options">
            <img src={dropdownSvg} alt="">
        </button> -->
        <!-- <SvgButton size={{w: 24, h: 24}} svg={dropdownSvg} /> -->
        <div class="tabs">
            <!-- {#each panels as panel (panel.name)} -->
            <!-- <PanelsTab 
                label={panel.name} 
                active={panel.active} 
                on:tab={() => setActionPanel(panel.id)} 
                on:requestclose={() => onClosePanel(panel.id)}
                /> -->
        <!-- {/each} -->
        </div>
        <!-- <SvgButton size={{w: 24, h: 24}} svg={plusSvg} /> -->
        <!-- <button class="sprot-notebook_tab-options sprot-new">
            <img src={plusSvg} alt="">
        </button> -->
    </div>
    {/if}
    <!-- // 294 -->
</div>

<style>
    .sprot-notebook {
        border: 1px solid rgb(62, 64, 67);
        width: 256px;
        height: 100%;
        overflow: hidden;
        /* background-color: rgb(32, 34, 37); */
        background: var(--white, black);
        color: var(--black, white);
        user-select: none;
        /* position: relative; */


        /* background: var(--bg, #202225); */
        box-shadow: 1px 1px 2px 0px rgba(108, 108, 108, 0.25) inset;
        border: 1px solid #000;
    }

    .close-notebook {
        width: 16px;
        background-color: inherit;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .tabs {
        display: flex;
        flex: 1;
        /* background: #141414;
        box-shadow: 2px 2px 2px 0px rgba(108, 108, 108, 0.25) inset;
        border: 1px solid #000; */
    }

    .sprot-notebook_header {
        display: flex;
        align-items: center;
        height: 24px;
        /* border: 1px solid gray; */
    }

    .sprot-notebook_header .label {
        padding: 0 0.5rem;
    }

    .sprot-notebook_header .gripper {
        height: 100%;
        /* width: 100%; */
        flex: 1;
        cursor: all-scroll;
        position: relative;
        /* background-color: blue; */
    } 
    
    .sprot-notebook_header .gripper::after {
        content: "";
        height: 8px;
        width: 100%;
        background-color: var(--black, white);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
    }

    .sprot-notebook_body {
        /* border: 1px solid green; */
        height: calc(100% - 24px - 24px);
    }

    .sprot-notebook_page {
        height: 100%;
    }

    .controls {
        display: flex;
        align-items: center;
        padding: 0 .5rem;
        gap: .5rem;
    }

    .controls input {
        appearance: none;
        border: 1px solid gray;
        -moz-appearance: none;
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
    }

    .controls input:checked {
        border: 1px solid red;
        background-image: url(/src/assets/tools/dark/tool-line.svg);
        background-repeat: no-repeat;
        background-position: center center;
    }

    .sprot-notebook_footer {
        display: flex;
        height: 24px;
        border-top: 1px solid gray;
        margin-top: -1px;
        gap: 1px;
        /* background-color: blue; */
        text-overflow: ellipsis;
    }

</style> 


<script lang="ts">
	import MenuButton from "$sprot/components/MenuButton.svelte";
	import SVGLabel from "$sprot/components/SVGLabel.svelte";
	import QuantityInput from "./QuantityInput.svelte";
    import trashSVG from "$assets/ui/email.svg";
</script>

<div class="flex flex-col pb-2 border border-sprotGray rounded-md bg-sprotCard my-2 sm:pb-0 hover:shadow-md sm:flex-row">
    <div class="sprot-image bg-sprotGray w-36 h-36 border"></div>
    <div class="sprot-content px-4 flex flex-col justify-center">
        <div class="items md:grid md:grid-cols-2 lg:grid-cols-3">
            <div class="mb-2">
                <h3 class="text-xl font-semibold">Bronze t-shirt</h3>
                <p>Premium shirt</p>
            </div>
            <!-- <div class="flex items-center justify-start md:items-start lg:items-center md:justify-center">
                <button 
                    class="px-2 py-1 bg-sprotDark font-bold uppercase text-sprotBg h-8 hover:bg-sprotGray active:bg-sprotBlue"
                    on:click={decrementQuantity}>-</button>
                <input 
                    type="text" 
                    class="border border-sprotDark w-12 px-2 py-1 h-8 outline-none hover:outline-none focus:outline-none focus:bg-sprotGray" 
                    name="quantity" id="" on:change={onChange}
                    bind:value={quantity}>
                <button 
                    class="px-2 py-1 bg-sprotDark font-bold uppercase text-sprotBg h-8 hover:bg-sprotGray active:bg-sprotBlue"
                    on:click={incrementQuantity}>+</button>
            </div> -->
            <QuantityInput />
            <div class="my-2 flex items-center justify-start lg:justify-center lg:items-center">
                <p class="text-lg font-semibold">R299.99</p>
            </div>
        </div>
        <div class="buttons">
            <MenuButton className="p-1 bg-sprotBlue text-sprotBg hover:bg-sprotDark">
                <SVGLabel svg={trashSVG}>Remove</SVGLabel>
            </MenuButton>
        </div>
    </div>
</div>
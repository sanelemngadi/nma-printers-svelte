<script>
	import CartCard from "$lib/components/CartCard.svelte";
import MenuButton from "$sprot/components/MenuButton.svelte";

</script>
<div>
    <div class="sprot-container">
        <div class="flex max-w-4xl flex-wrap mt-7 mx-auto">
            <div class="sprot-status">
                <span>1</span>
                <h3>Shopping cart</h3>
            </div>
            <div class="sprot-seperator"></div>
            <div class="sprot-status sprot-active">
                <span>2</span>
                <h3>Checkout</h3>
            </div>
            <div class="sprot-seperator"></div>
            <div class="sprot-status">
                <span>3</span>
                <h3>Complete</h3>
            </div>
            <!-- <div class="sprot-seperator"></div> -->
        </div>



        <div class="flex my-9 gap-4 flex-col-reverse md:flex-row">
            <div class="sprot-content grid grid-cols-2 gap-2 sm:gap-0 sm:grid-cols-1" style="flex: 3;">
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div class="sprot-summary flex-1 px-4 py-6 rounded-md md:shadow-md bg-sprotCard max-h-64 md:sticky md:top-14">
                <h2 class="text-xl md:text-2xl lg:text-3xl">Cart Summary</h2>
                <div class="flex items-center justify-between">
                    <p>Items</p> 
                    <h3 class="text-xl">25</h3>
                </div>
                <div class="flex items-center justify-between">
                    <p>total</p> 
                    <h3 class="text-xl">R239.99</h3>
                </div>
                <MenuButton className="w-full py-2 rounded-sm my-4">Proceed Checkout</MenuButton>
                <!-- <a href={"#"}>Proceed Checkout</a> -->
                <a href={"/shop"} class="text-sprotBlue underline">Continue Shopping</a>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .sprot-active {
        @apply font-bold;
    }

    .sprot-active span {
        background-color: blue;
        color: white;
    }

    .sprot-status {
        @apply flex gap-4 justify-center items-center md:justify-center;
    }

    .sprot-status span {
        @apply hidden w-4 h-4 border border-black rounded-[50%] items-center justify-center md:w-7 md:h-7 md:flex;
    }

    .sprot-status h3 {
        @apply font-normal text-sm;
        /* font-size: 1.25rem; */
    }
    
    .sprot-seperator, .sprot-status {
        @apply flex-1;
    }

    .sprot-seperator {
        @apply relative hidden md:block;
    }

    .sprot-seperator::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        height: 2px;
        background-color: black;
    }
</style>
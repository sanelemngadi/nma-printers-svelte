<script lang="ts">
	import ProductCard from "$lib/components/ProductCard.svelte";
    import image from "$assets/images/front.png";
    import un from "$assets/images/hat3.jpg"
    import un0 from "$assets/images/hat1.jpg"
    import un2 from "$assets/images/hat2.jpg"
	import { SVGLink } from "$sprot/components";
    import userSVG from "$assets/ui/email.svg";


</script>

<div class="sprot-shop">
    <div class="sprot-container">
        <h2 class="text-2xl font-medium m-4">Shop {">"} Sweaters (152 items)</h2>

        <div class="sprot-flex flex flex-col md:flex-row gap-6">
            <div class="flex-1 h-fit overflow-auto p-4 rounded-md hidden md:block md:sticky md:top-14">
                <div class="links">
                    <h3 class="header">Categories</h3>
                    <ul>
                        <li class="sprot-active">
                            <a href={"/shop?query=t-shirt"} class="flex items-center w-full h-full px-5">T shirts</a>
                        </li>
                        <li>
                            <a href={"/shop?query=hoodies"} class="flex items-center w-full h-full px-5">Hoodies</a>
                        </li>
                        <li>
                            <a href={"/shop?query=sweaters"} class="flex items-center w-full h-full px-5">Sweaters</a>
                        </li>
                    </ul>
                </div>
                <div class="links">
                    <h3 class="header">Keep in touch!</h3>
                    <ul>
                        <li>
                            <h4 class="font-medium text-center sm:text-left">Cellphone:</h4>
                            <a href="tel:+27607013296" class="underline">0607013296</a>
                        </li>
                        <li>
                            <h4 class="font-medium text-center sm:text-left">Email:</h4>
                            <a href="mailto:ema@com.com" class="underline">info@nmaprinters.co.za</a>
                        </li>
                        <li class="flex items-center justify-center sm:justify-start">
                            <span>
                                <SVGLink svg={userSVG} alt="" />
                                <SVGLink svg={userSVG} alt="" />
                                <SVGLink svg={userSVG} alt="" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex-[3] grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
                <ProductCard thumbnail={image} label="sweater" price={25.32} title="nice for cold" />
                <ProductCard thumbnail={un2} label="sweater" price={25.32} title="nice for cold" />
                <ProductCard thumbnail={image} label="sweater" price={25.32} title="nice for cold" />

                <ProductCard thumbnail={image} label="sweater" price={25.32} title="nice for cold" />
                <ProductCard thumbnail={un} label="sweater" price={25.32} title="nice for cold" />
                <ProductCard thumbnail={image} label="sweater" price={25.32} title="nice for cold" />

                <ProductCard thumbnail={image} label="sweater" price={25.32} title="nice for cold" />
                <ProductCard thumbnail={un0} label="sweater" price={25.32} title="nice for cold" />
                <ProductCard thumbnail={image} label="sweater" price={25.32} title="nice for cold" />
            </div>
        </div>

        
    </div>
</div>

<style lang="postcss">
    .links {
        padding-bottom: 1rem;
    }
    .header {
        @apply text-2xl font-medium text-center sm:text-left;
    }
    .links ul li {
        @apply w-full mt-4;

    }

    .links h4 {
        @apply text-[18px] font-semibold;
    }
    
    .links ul li a {
        @apply pr-4 w-full h-full text-[16px] flex hover:text-sprotBlue items-center justify-center sm:justify-start;
    }

    li.sprot-active {
        position: relative;
        color: blue;
    }

    li.sprot-active::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        background-color: blue;
    }
</style>
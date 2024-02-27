<script lang="ts">
    import front from "$assets/images/front.png";
    import featureSVG from "$assets/ui/product-feature.svg";
    import rates from "$assets/ui/rates.svg";
	import MenuButton from "$sprot/components/MenuButton.svelte";
    import cartSVG from "$assets/ui/email.svg";
    import ProductReview from "$lib/components/ProductReview.svelte";
	import ProductCard from "$lib/components/ProductCard.svelte";
    import beannies from "$assets/images/hat1_oR7STuf.jpg"
	import QuantityInput from "$lib/components/QuantityInput.svelte";
</script>
<div class="sprot-details">
    <div class="sprot-container py-14">
        <div class="flex flex-col md:flex-row justify-center max-w-2xl overflow-hidden mx-auto">

            <div class="sprot-image relative" style="flex: 2;">
                <img src={front} alt="" class="object-contain aspect-square">
                <ul class="features absolute bottom-1/2 translate-y-1/2 left-2">
                    <li>
                        <span><img src={featureSVG} alt=""></span>
                        <span>100% Polyester microfleece</span>
                    </li>
                    <li>
                        <span><img src={featureSVG} alt=""></span>
                        <span>Chin guard</span>
                    </li>
                    <li>
                        <span><img src={featureSVG} alt=""></span>
                        <span>Warm, lightweight & fashionable</span>
                    </li>
                    <li>
                        <span><img src={featureSVG} alt=""></span>
                        <span>Fabric: 100% Combed Cotton</span>
                    </li>
                </ul>
            </div>
            <div class="sprot-info flex flex-col justify-center" style="flex: 1;">
                <h1 class="text-2xl font-medium mb-4">Premium Regatta Softshell Jacket</h1>
                <p class="text-[16px] font-medium mb-2">R119.99</p>
                <img src={rates} alt="" class="h-5">
                <h4 class="my-2 text-[16px] font-medium">Sizes and quantities:</h4>
                <div class="flex items-center gap-2 h-9 ">
                    
                    <!-- <button>+</button>
                        <input type="text" name="" id="">
                        <button>-</button> -->
                        <QuantityInput />
                        <select name="" id="" class="h-8 border">
                            <option value="">sm</option>
                            <option value="">md</option>
                            <option value="">lg</option>
                            <option value="">xl</option>
                            <option value="">xxl</option>
                        </select>
                </div>
    
                <div class="flex items-center gap-6 my-3">
                    <p class="text-[16px] font-normal">Subtotal</p>
                    <h4 class="text-[16px] font-medium" >R256.25</h4>
                </div>
    
                <MenuButton svg={cartSVG}>Add to cart</MenuButton>
                <!-- <button>add to cart</button> -->
            </div>
        </div>
    </div>
    <div class="sprot-container my-9 md:pl-14">
        <div class="max-w-2xl mx-auto">

            <h2 class="text-xl font-medium mt-6">Description:</h2>
            <p class="text-lg font-light max-w-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”</p>
        </div>
    </div>

    <div class="sprot-container md:pl-14">
        <div class="max-w-2xl mx-auto">
            <h2 class="text-4xl font-medium mt-8">User reviews</h2>
            <ProductReview>
                “I love these jackets - so much so that I re-ordered two others in different colours. The quality is very good and the fit is absolutely perfect for me. The sleeve length is often where I have problems when the trunk fits fine but this design is amazing. The size I ordered is standard (Medium) sizing and it fits beautifully.”
            </ProductReview>
            <ProductReview>
                “I love these jackets - so much so that I re-ordered two others in different colours. The quality is very good and the fit is absolutely perfect for me. The sleeve length is often where I have problems when the trunk fits fine but this design is amazing. The size I ordered is standard (Medium) sizing and it fits beautifully.”
            </ProductReview>
            <ProductReview>
                “I love these jackets - so much so that I re-ordered two others in different colours. The quality is very good and the fit is absolutely perfect for me. The sleeve length is often where I have problems when the trunk fits fine but this design is amazing. The size I ordered is standard (Medium) sizing and it fits beautifully.”
            </ProductReview>
        </div>
    </div>

    <div class="sprot-container md:pl-14">
        <h2 class="text-4xl font-medium mt-8 mb-6">Related Products</h2>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            <ProductCard label="sweater" title="beautiful sweater for winter" price={258.28} thumbnail={beannies} />
            <ProductCard label="sweater" title="beautiful sweater for winter" price={258.28} thumbnail={beannies} />
            <ProductCard label="sweater" title="beautiful sweater for winter" price={258.28} thumbnail={beannies} />
            <ProductCard label="sweater" title="beautiful sweater for winter" price={258.28} thumbnail={beannies} />
        </div>
    </div>
</div>

<style>
    .features {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .features li  {
        display: flex;
        font-size: 1rem;
        font-weight: 500;
        gap: 1rem;
    }
</style>
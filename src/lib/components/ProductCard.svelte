<script lang="ts">
	import { SVGLink } from "$sprot/components";
    import cardSVG from "$assets/ui/email.svg";
	import MenuButton from "$sprot/components/MenuButton.svelte";
	import RatesSvg from "./RatesSVG.svelte";

    export let price: number;
    export let label: string;
    export let title: string;
    export let thumbnail: string;

    export let className: string = ""
</script>

<a href={"/shop/product/product-id-goes-here"} style="border: 1px solid rgb(230,230,230);" class="sprot-card bg-sprotCard min-w-44 p-1 md:p-4 border border-transparent rounded-lg hover:border-sprotBlue hover:shadow-md {className}">
    <div class="sprot-header flex items-center justify-end px-4 gap-4">
        <SVGLink svg={cardSVG} alt="" />
        <!-- <SVGLink svg={cardSVG} alt="" /> -->
    </div>
    <div class="sprot-image flex items-center justify-center min-h-32 overflow-hidden relative">
        <img src={thumbnail} alt="" class="w-full mx-auto aspect-square object-cover">
    </div>
    <div class="sprot-section">
        <p class="text-[12px] text-sprotGray">{label}</p>
        <h3 class="text-sm font-medium" style="color: #515151;">{title}</h3>
        <h2 class="flex items-center justify-between text-[16px] font-semibold">
            <span>R{price}</span>
            <span class="flex items-center justify-center gap-1">
                <!-- <svg width="43" height="8" viewBox="0 0 43 8" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="43" height="8" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_535_812" transform="matrix(0.00930233 0 0 0.05 -0.00697674 0)"/>
                    </pattern>
                    <image id="image0_535_812" width="109" height="20" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg> -->
                <RatesSvg className="w-14" />

                <span class="font-light text-[12px]">4.4 (2)</span>
                    
            </span>
        </h2>
    </div>
    <div class="sprot-footer flex items-center mt-4">
        <MenuButton className="h-7 text-[12px] rounded-sm hover:bg-sprotDanger hover:text-sprotBlue hover:border-sprotBlue" svg={cardSVG} href={"#cart"}>Add to cart</MenuButton>
    </div>
</a>
<script lang="">
    import rates from "$assets/ui/rates.svg";
</script>

<div class="mb-8 border-b pb-4">
    <h3 class="text-xl my-2">Very impressive</h3>
    <img src={rates} alt="" class="h-4">
    <p class="text-sm mt-2">Sanele, 20/02/2024</p>

    <span class="block max-w-2xl mt-4">
        <slot />
    </span>

    <a href={"#"} class="mt-3 text-sprotBlue underline">reply</a>
</div>
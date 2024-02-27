<script lang=ts>
    import searchSVG from "../../assets/ui/search.svg";

    let active = false;
</script>



<div class="mmasco-search h-8 rad">

    <label for="search" 
        class="{active && "border border-white"} bg-white flex border items-center justify-between h-full border-r-8 overflow-hidden">
        <img src={searchSVG} alt="" class="w-8 h-5">
        <input 
            type="text"     
            name="search" 
            id="search" 
            placeholder="Search" 
            on:focus={() => active = true}
            on:blur={() => active = false}
            class="flex-1 h-full border-none outline-0"
            >
    </label>
</div>

<style lang="scss">
    .mmasco-search {
        height: 32px;
        border-radius: .25rem;
    }
</style>
<script lang="ts">
    let quantity: number = 2;

    const onChange = (e: any) => {
        const target = e.e.target as HTMLInputElement;

        let num = parseInt(target.value);
        if(isNaN(num)) {
            quantity = Math.max(quantity, 1);
            return;
        }

        quantity = Math.max(num, 1);

        target.value = quantity.toString();
    }

    const incrementQuantity = () => {
        const num = parseInt(quantity.toString());
        if(isNaN(num)) { return; }
        quantity = Math.max( num +  1, 1);
    }

    const decrementQuantity = () => {
        const num = parseInt(quantity.toString());
        if(isNaN(num)) { return; }
        quantity = Math.max( num -  1, 1);
    }
</script>

<div class="inline-flex items-center justify-start md:items-start lg:items-center md:justify-center">
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
</div>
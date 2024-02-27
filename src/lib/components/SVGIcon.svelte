<script lang=ts>
    export let svg: string;
</script>

<span class="inline-flex items-center justify-between w-fit p-1 gap-2 h-8">
    <img src={svg} alt="svg">
    <p class="label"><slot/></p>
</span>
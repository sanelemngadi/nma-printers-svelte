<script lang="ts">
    export let reverse: boolean = false;
</script>

<div class="flex {reverse ? "flex-col-reverse" : "flex-col"}">
    <slot/>
</div>
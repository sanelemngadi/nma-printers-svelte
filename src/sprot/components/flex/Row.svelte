<script lang="ts">
    export let reverse: boolean = false;
</script>

<div class="flex {reverse ? "flex-row-reverse" : "flex-row"}">
    <slot/>
</div>
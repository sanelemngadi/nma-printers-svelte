<script lang="ts">
    import logoSVG from "$assets/ui/logo.svg";
    export let className: string = "";
</script>

<a href="/" class="flex items-center justify-start {className}"><img src={logoSVG} alt="" class="h-full"></a>
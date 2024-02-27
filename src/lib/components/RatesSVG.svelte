<script lang="ts">
    import full from "$assets/ui/rates/full.svg";
    import half from "$assets/ui/rates/half.svg";
    import empty from "$assets/ui/rates/empty.svg";
    export let className: string = "";
</script>

<ul class="flex {className}">
    <li><img src={full} alt=""></li>
    <li><img src={full} alt=""></li>
    <li><img src={full} alt=""></li>
    <li><img src={half} alt=""></li>
    <li><img src={empty} alt=""></li>
</ul>
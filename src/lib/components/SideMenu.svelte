<script lang="ts">
    import emailSVG from "../../assets/ui/email.svg";
	import SvgIcon from "./SVGIcon.svelte";
	import SearchInput from "./SearchInput.svelte";

</script>
<div class="mmasco-card">   
    <SvgIcon svg={emailSVG} >
        <a href="mailto:admin@nmaprinters.com">admin@nmaprinters.com</a>
    </SvgIcon><br>
    <SvgIcon svg={emailSVG} >
        <h4>Mkhululi Gumede</h4>
    </SvgIcon>
    <SearchInput />
</div>

<style lang="scss">
    .mmasco-card {
        width: 333px;
        height: 444px;
        border: 1px solid silver;
        border-radius: .5rem;
        box-shadow: .25rem .25rem .25rem rgba(#000000,  0.25);
        background-color: #D9D9D9;
        margin: 4rem;
        padding: 1rem;
    }
</style>
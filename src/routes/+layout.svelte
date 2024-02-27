<script lang=ts>
     import "../app.css";
     import emailSVG from "$assets/ui/email.svg";
	import { SVGLabel, SVGLink, Spacer, Stretcher, Toolbars } from "$sprot/components";
</script>

<div class="bg-sprotDanger">
    <Toolbars className="sprot-container z-50">
        <SVGLabel svg={emailSVG}>
            <a href="mailto:sanelemngadi@gmail.com" class="hidden md:inline-block">info@nmaprinters.com</a>
        </SVGLabel>
        <Spacer spacer={80}/>
        <SVGLink svg={emailSVG} alt=""/>
        <SVGLink svg={emailSVG} alt=""/>
        <SVGLink svg={emailSVG} alt=""/>
        <Stretcher />
        <SVGLabel svg={emailSVG}>
            <p class="hidden md:inline-block">+27607013296</p>
        </SVGLabel>
    </Toolbars>
</div>
<slot />
<!-- 
<style>
    .container {
        max-width: 960px;
        margin: 0 auto;
    }
</style> -->

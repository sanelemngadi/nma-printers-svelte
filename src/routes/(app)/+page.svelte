<script>
	import emailSVG from "$assets/ui/email.svg";
	import { MenuLink, SVGLabel, SVGLink, Toolbars, Spacer, Stretcher } from "$sprot/components";
	import MenuButton from "$sprot/components/MenuButton.svelte";

</script>

<div class="sprot-shirt bg-sprotBg">
	<div class="sprot-banner bg-transparent mx-auto h-screen">
		<div class="sprot-container">
			<div class="h-5 sm:h-8 md:h-14"></div>
			<h1 class="font-semibold text-3xl md:text-4xl max-w-4xl text-center mx-auto pb-2 md:pb-4 w-full">Pride your brand with our added 
				<span class="sprot-texture text-sprotBlue md:text-sprotGray md:whitespace-nowrap md:text-nowrap">
					texture and dimension
				</span> 
				to your apparel</h1>

				<p class="text-lg max-w-3xl mx-auto sm:hidden my-4 md:mt-16 text-center">We sell plane clothing and offer personalized apparel printing for individuals, small to medium size businesses and organisations.</p>
			<div class="flex flex-col md:flex-row justify-center items-center mt-2 md:mt-8">
				<MenuButton  className="bg-sprotBlue text-sprotBg hover:bg-sprotDark mb-4">Create custom design</MenuButton>
				<Spacer spacer={16} className="hidden md:block"/>
				<MenuButton className="bg-sprotBg border-sprotBlue text-sprotBlue hover:underline hover:underline-offset-2 mb-4">Request bulk order {">"}</MenuButton>
			</div>

			<div>
				<p class="text-xl max-w-3xl mx-auto mt-4 hidden sm:block md:mt-16 text-center">We sell plane clothing and offer personalized apparel printing for individuals, small to medium size businesses and organisations.</p>
			</div>
		</div>
	</div>
	<div class="bg-transparent h-screen">jello</div>
</div>


<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.white);
	}

	.sprot-banner {
		background-image: url(/src/assets/ui/cage.svg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: top;
	}

	.sprot-shirt {
		background-image: url(/src/assets/ui/shirt-bg.svg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: top;
	}

	@media screen and (min-width: 648px) {
		.sprot-texture {
			background-image: url(/src/assets/ui/texture.svg);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: cover;
		}
	}
</style>
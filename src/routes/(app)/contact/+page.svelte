<script>
	import { SVGLabel, SVGLink } from "$sprot/components";
    import emailSVG from "$assets/ui/email.svg";
	import Faq from "$lib/components/FAQ.svelte";
	import SprotInput from "$lib/components/SprotInput.svelte";

</script>

<div>
    <div class="sprot-container">
        <h2 class="text-center text-[40px] font-medium">Wanna talk?</h2>
        <p class="text-center mt-1 mb-9 text-lg font-normal max-w-2xl mx-auto md:mt-3 md:text-2xl">Contact us today to discuss your requirements and let us help you bring your vision to life.
        </p>

        <div class="flex flex-col-reverse md:flex-row">
            <div class="border flex-1 flex flex-col items-center justify-center md:items-start md:justify-start">
                <p class="text-center md:text-start">Mon - Fri, 8am – 5pm</p>
                <SVGLabel svg={emailSVG}>info@nmaprinters.co.za</SVGLabel>
                <SVGLabel svg={emailSVG}>+27 607013296</SVGLabel>
                <div class="flex items-center justify-center">
                    <SVGLink svg={emailSVG} alt="" />
                    <SVGLink svg={emailSVG} alt="" />
                    <SVGLink svg={emailSVG} alt="" />
                </div>
            </div>
            <div class="sprot-image border flex-1 h-48">
                <h2>image</h2>
            </div>
        </div>

        <div class="max-w-3xl mx-auto md:my-12">
            <h1 class="text-[40px] font-bold text-center sm:text-left">Frequently Asked Questions</h1>
            <p class="text-xl font-medium max-w-lg mb-4 text-sprotGray text-center md:text-left">Before contacting our team members please read FAQ to save time.</p>

            <Faq question="Before contacting our team members please read FAQ to save time." open>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptas natus necessitatibus praesentium accusamus dolore, soluta voluptates! At, adipisci laudantium!
            </Faq>
            <Faq question="Before contacting our team members please read FAQ to save time.">
                Lorem ipsum dolor sit amet.
            </Faq>
            <Faq question="Before contacting our team members please read FAQ to save time.">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non quam debitis explicabo officiis vero voluptate quidem itaque iure eius blanditiis dolorum, id amet sequi neque quis laudantium doloremque? Quibusdam omnis libero consectetur molestiae, sunt debitis distinctio nostrum animi eum veritatis laborum mollitia soluta fuga obcaecati, quae ipsam nobis iure.
            </Faq>

            <a href={"#"} class="my-4 text-xl text-sprotBlue underline">read all faqs</a>
        </div>

        <div class="flex flex-col gap-2 my-8 md:flex-row md:mt-14">
            <div class="h-full">
                <form class="w-full h-full">
                    <h2 class="text-2xl text-center mb-2">Please fill the form bellow to contact us</h2>
                    <SprotInput id="name" label="name" className="w-full" />
                    <SprotInput id="email" label="email" type="email" className="w-full my-4" />
                    <label for="content" class="flex flex-col gap-4 mb-4">
                        <span>content: <span>*</span></span>
                        <textarea class="border rounded-md border-sprotDark" name="" id="" cols="30" rows="10"></textarea>
                    </label>

                    <button class="w-full py-2 bg-sprotBlue rounded-md text-sprotBg hover:bg-sprotDark">Submit</button>
                </form>
            </div>
            <div class="border w-full h-full">
                <div class="sprot-map w-full h-full bg-sprotGray flex items-center justify-center">
                    map
                </div>
            </div>
        </div>
    </div>
</div>
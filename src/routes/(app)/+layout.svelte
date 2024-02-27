<script lang=ts>
	import {MenuLink, Spacer, SVGLabel, Stretcher, MenuButton, SVGLink, SearchInput} from "$sprot/components";

    import userSvg from "$assets/ui/email.svg";
    import cartSVG from "$assets/ui/email.svg";
	import Logo from "$sprot/components/Logo.svelte";
    import logoSVG from "$assets/images/sanele-logo.png";
    // import logoSVG from "$assets/images/logo-dark.png";
    import heroImage from "$assets/images/intro-hero.jpg";
	import Toolbars from "$sprot/components/Toolbars.svelte";
	import MenuDropdown from "$sprot/components/MenuDropdown.svelte";

</script>

<div class="sticky top-0 bg-sprotBg z-40">
    <Toolbars className="h-[56px] gap-0 sprot-container">
        <Logo className="w-40"/>
        <Spacer spacer={24}/>
        <MenuLink className="hidden md:inline-block sprot-active" url="/">
            <span class="inline-flex h-full w-full items-center justify-center">Home</span>
        </MenuLink>
        <MenuDropdown className="hidden md:flex" label="Shop">
            <!-- <span class="inline-flex h-full w-full items-center justify-center"></span> -->
        </MenuDropdown>
        <MenuLink className="hidden md:inline-block" url="/design">
            <span class="inline-flex h-full w-full items-center justify-center">Design Studio</span>
        </MenuLink>
        <MenuLink className="hidden md:inline-block" url="/contact">
            <span class="inline-flex h-full w-full items-center justify-center">Contact</span>
        </MenuLink>
        <MenuLink className="hidden md:inline-block" url="/about">
            <span class="inline-flex h-full w-full items-center justify-center">About</span>
        </MenuLink>

        <Stretcher className="hidden md:block" />
        <MenuButton svg={cartSVG} className="bg-sprotBg hover:bg-sprotGray" href="/order/cart">
            <span class="hidden lg:inline-block">
                My cart
            </span>
        </MenuButton>
        <Spacer spacer={8}/>
        <MenuButton svg={userSvg} className="bg-sprotDark text-sprotBg hover:bg-sprotGray hover:text-sprotDark" href="/user/login">
            <span class="hidden lg:inline-block">
                My Account
            </span>
        </MenuButton>
        <Stretcher className="lg:hidden" />
        <MenuButton svg={userSvg} className="md:hidden"/>
    </Toolbars>

</div>
<div class="sprot-container">
    <div class="sprot-divider h-1 w-full md:w-1/2 bg-sprotBlue md:ml-[160px]" style="background: var(--gradient);"></div>
</div>
<div class="sprot-container">
    <Toolbars className="min-h-[80px] overflow-auto max-w-full">
        <Logo className="hidden md:block h-24 w-40 absolute z-50 -top-12 bg-sprotBg"/>
        <Spacer spacer={160} className="hidden md:block"/>
        <MenuButton className="border-none">
            <span>
                <h3 class="text-lg md:text-2xl font-medium text-sprotGray">Nqobi</h3>
                <p class="text-sm text-slate-400">product designer</p>
            </span>
        </MenuButton>
        <MenuButton className="border-none">
            <span>
                <h3 class="text-lg md:text-2xl font-medium text-sprotGray">Mkhululi</h3>
                <p class="text-sm text-slate-400">Machine operator</p>
            </span>
        </MenuButton>
        <MenuButton className="border-none">
            <span>
                <h3 class="text-lg md:text-2xl font-medium text-sprotGray">Amanda</h3>
                <p class="text-sm text-slate-400">product designer</p>
            </span>
        </MenuButton>
    </Toolbars>
</div>

<slot />

<div class="sprot-subscibers md:my-6">
    <div class="sprot-container">
        <h2 class="text-3xl font-medium text-center max-w-2xl mx-auto">Don't miss out our updates and discounts!</h2>
        <p class="text-lg text-center max-w-2xl mx-auto">Be the first to know of we have new products and discounts.</p>

        <form action="POST" class="max-w-2xl mx-auto flex gap-4 my-10 bg-sprotDark p-7">
            <label for="email" class="w-full">
                <input 
                    type="email" name="email" id="email" placeholder="enter your email" 
                    class="sprot-input h-10 p-2 w-full rounded-sm bg-sprotBg"
                    >
            </label>
            <button class="bg-sprotPurplr h-10 px-4 rounded-sm text-sprotDark hover:text-sprotBg">Subscribe</button>
        </form>
    </div>
</div>

<div class="sprot-footer bg-sprotDanger p-10">
    <div class="sprot-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-sprotDanger">
        <div class="links">
            <h3 class="header">Clothing</h3>
            <ul>
                <li><a href={"#"}>T shirt</a></li>
                <li><a href={"#"}>Hoodie</a></li>
                <li><a href={"#"}>Sweater</a></li>
            </ul>
        </div>
        <div class="links">
            <h3 class="header">Navigation</h3>
            <ul>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Contact</a></li>
                <li><a href={"#"}>Request to make bulk order</a></li>
            </ul>
        </div>
        <div class="links">
            <h3 class="header">Information</h3>
            <ul>
                <li><a href={"#"}>Delivery terms</a></li>
                <li><a href={"#"}>Returning an order</a></li>
                <li><a href={"#"}>Terms and condition</a></li>
                <li><a href={"#"}>Private Policy</a></li>
            </ul>
        </div>
        <div class="links">
            <h3 class="header">Keep in touch!</h3>
            <ul>
                <li>
                    <h4 class="font-medium text-center sm:text-left">Cellphone:</h4>
                    <a href="tel:+27607013296" class="underline">0607013296</a>
                </li>
                <li>
                    <h4 class="font-medium text-center sm:text-left">Email:</h4>
                    <a href="mailto:ema@com.com" class="underline">info@nmaprinters.co.za</a>
                </li>
                <li class="flex items-center justify-center sm:justify-start">
                    <span>
                        <SVGLink svg={userSvg} alt="" />
                        <SVGLink svg={userSvg} alt="" />
                        <SVGLink svg={userSvg} alt="" />
                    </span>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="sprot-rights min-h-10 bg-sprotBlue text-sprotBg flex items-center justify-center">
    <p class="text-[16px] text-center font-light p-2">
        All rights reserved &copy; 2024 nma. designed and developed by 
        <a href={"#"} class="text-sprotDanger underline">Team forever Designs</a></p>
</div>

<style lang="postcss">
    .links {
        padding-bottom: 1rem;
    }
    .header {
        @apply text-2xl font-medium text-center sm:text-left;
    }

    .links ul li {
        @apply w-full;

    }
    
    .links ul li a {
        @apply pr-4 py-2 w-full h-full flex hover:text-sprotBlue items-center justify-center sm:justify-start;
    }
    
    .sprot-input {
        outline: none;
        border: 1px solid red;
    }

    .sprot-input:focus {
        box-shadow: 4px 4px rgba(0, 0, 200, 0.75), 4px -4px rgba(0, 0, 200, 0.75), -4px 4px rgba(0, 0, 200, 0.75), -4px -4px rgba(0, 0, 200, 0.75);
    }
</style>
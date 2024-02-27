<script lang="ts">
	import SignForm from "$lib/components/SignForm.svelte";
    const action: "register" | "login" = "login";

    export let data;

</script>

<div>
    <div class="sprot-container">
       {#if data.register}
       <SignForm title="Register">
           <p slot="links" class="mt-3">Alread have an account? <a href={"/user/login?register=false"} class="text-sprotBlue underline">Login now</a></p>
           <span slot="button">Submit</span>
       </SignForm>
       {:else}
       <SignForm title="Login">
           <p slot="links" class="mt-3">Don't have an account? <a href={"/user/login?register=true"} class="text-sprotBlue underline">Register now</a></p>
           <span slot="button">Login</span>
       </SignForm>
       {/if}

    </div>
</div>
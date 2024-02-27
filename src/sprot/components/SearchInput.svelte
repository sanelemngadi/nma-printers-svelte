<script lang="ts">
    import searchSVG from "$assets/ui/search.svg";
    export let className: string = ""

    import {Label, Input} from "flowbite-svelte";
    import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<label for="search" class="flex gap-2 bg-white h-8 pl-2 w-1/2 {className}">
    <img src={searchSVG} alt="search icon" class="w-4">
    <input type="text" name="search" id="search" class="h-8 block flex-1 outline-none" placeholder="Search">
</label>

<!-- <div class="mb-6">
    <Label for="input-group-1" class="block mb-2">Your Email</Label>
    <Input id="email" type="email" placeholder="name@flowbite.com">
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </Input>
  </div> -->
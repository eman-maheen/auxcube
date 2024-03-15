<script lang="ts">
  let showMobileMenu: boolean;
  let screenWidth = 0;
  $: {
   if (screenWidth > 768) showMobileMenu = false 
   else showMobileMenu = true;
 }
</script>
<svelte:window bind:innerWidth={screenWidth} />
{#if showMobileMenu}
 <div class="heroContent" >
   <slot />
   <slot name="rightColumn" />
   <slot name="leftColumn" />
 </div>
{:else}
 <div class="heroContent">
   <div class="flex flex-col flex-1 bannerText border-r-2 border-zinc-700 md:px-5">
     <slot name="leftColumn" />
   </div>
   <div class="bannerText flex-2 md:w-3/5 items-center self-start">
     <div class="flex flex-col md:px-5">
       <slot name="rightColumn" />
     </div>
     <slot />
   </div>
 </div>
{/if}


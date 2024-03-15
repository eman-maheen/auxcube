<script lang="ts">
  let showMobileMenu: boolean;
  let isConsultingComponent: boolean;
  let screenWidth = 0;
  export let imageAligned = 'right';
  $: {
    if (screenWidth > 768) showMobileMenu = false;
    else showMobileMenu = true;
  }
  $: isConsultingComponent = imageAligned === 'left'
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if showMobileMenu}
  <div class="heroContent">
    {#if !isConsultingComponent}
      <slot name="leftColumn" />
      <slot name="rightColumn" />
    {:else if isConsultingComponent}
      <slot />
      <slot name="rightColumn" />
      <slot name="rightColumnImage" />
      <slot name="leftColumn" />
    {/if}
  </div>
{:else}
  <div class="responsiveFullWidthRow">
    <div class="wrapperLeftCol flex-1">
      <slot name="leftColumn" />
    </div>
    <div class="wrapperRightCol">
      <div class={imageAligned === "left" ?"contentRightCol": "contentRightCol ml-20"}>
        <slot name="rightColumn" />
        {#if isConsultingComponent}
          <div class="ml-0 md:mr-10"><slot name="rightColumnImage" /></div>
        {:else if !isConsultingComponent}
          <div class="md:mr-0 md:self-end"><slot name="rightColumnImage" /></div>
        {/if}
      </div>
      <slot />
    </div>
  </div>
{/if}

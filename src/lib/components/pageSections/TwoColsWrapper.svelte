<script lang="ts">
  let showMobileMenu: boolean;
  let screenWidth = 0;
  export let imageAligned = 'left';
  $: {
    if (screenWidth > 768) showMobileMenu = false;
    else showMobileMenu = true;
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if showMobileMenu}
  <div class="heroContent">
    <slot />
    <slot name="rightColumn" />
    <slot name="leftColumn" />
  </div>
{:else}
  <div class="responsiveFullWidthRow">
    <div class="wrapperLeftCol">
      <slot name="leftColumn" />
    </div>
    <div class="wrapperRightCol">
      <div class="flexCol md:self-start">
        <slot name="rightColumn" />
        {#if imageAligned === 'right'}
          <div class="ml-0 mr-10"><slot name="rightColumnImage" /></div>
        {:else}
          <div class="mr-0"><slot name="rightColumnImage" /></div>
        {/if}
      </div>
      <slot />
    </div>
  </div>
{/if}

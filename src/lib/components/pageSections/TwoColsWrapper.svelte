<script lang="ts">
  let showMobileView: boolean;
  let isConsultingComponent: boolean;
  let screenWidth = 0;
  export let imageAligned = 'right';
  $: {
    if (screenWidth > 768) showMobileView = false;
    else showMobileView = true;
  }
  $: isConsultingComponent = imageAligned === 'left';
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if showMobileView}
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
  <div class={'responsiveFullWidthRow max-w-[78%] ' + (isConsultingComponent ? '' : 'heroMain')}>
    <div
      class={'wrapperLeftCol ' +
        (isConsultingComponent ? '' : 'modelsLeftCol')}
    >
      <slot name="leftColumn" />
    </div>
    <div class="wrapperRightCol">
      <div class={isConsultingComponent ? 'contentRightCol' : 'contentRightCol ml-20'}>
        <slot name="rightColumn" />
        {#if isConsultingComponent}
          <div class="consultingRightCol"><slot name="rightColumnImage" /></div>
        {:else if !isConsultingComponent}
          <div class="modelsRightCol"><slot name="rightColumnImage" /></div>
        {/if}
      </div>
      <slot />
    </div>
  </div>
{/if}

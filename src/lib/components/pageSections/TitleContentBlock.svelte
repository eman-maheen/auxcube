<script lang="ts">
  export let heading: string;
  export let emphasis: string;
  export let content: string;
  export let icon: string | undefined;

  function decorateHeading(
    heading: string,
    emphasis: string
  ): { reducedHeading: string; highlightedPart: string } {
    const reducedHeading = heading.replace(emphasis, '');
    return {
      reducedHeading: reducedHeading.trim(),
      highlightedPart: emphasis.trim()
    };
  }

  const { reducedHeading, highlightedPart } = decorateHeading(heading, emphasis);
</script>

<div class="wrapperTitleContentBlock ">
  {#if icon}
    <div class="flexStart">
      <span class="mr-2"><img src="/icons/{icon}" class='pt-1' alt="Consulting list icon" /></span>
      <h3 class="bannerHeading">
        {reducedHeading}<span class="emphasize">{` ${highlightedPart}`}</span>
      </h3>
    </div>
    <p class="topAlignedText">{content}</p>
  {:else}
    <h3 class="bannerHeading">
      {reducedHeading}<span class="emphasize">{` ${highlightedPart}`}</span>
    </h3>
    {content}
  {/if}
</div>

<script lang="ts">
  export let heading: string;
  export let emphasis: string;
  export let content: string;

  function decorateHeading(
    heading: string,
    emphasis: string
  ): { reducedHeading: string; highlightedPart: string } {
    const reducedHeading = heading.replace(emphasis, "");
    return {
      reducedHeading: reducedHeading.trim(),
      highlightedPart: emphasis.trim(),
    };
  }

  const { reducedHeading, highlightedPart } = decorateHeading(
    heading,
    emphasis
  );
</script>

<div class="text-start mb-10 mx-5">
  <h3 class="bannerHeading">
    {reducedHeading}<span class="text-primary">{` ${highlightedPart}`}</span>
  </h3>
  {content}
</div>

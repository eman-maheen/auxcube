<script lang="ts">
  import PlanetaryResonance from "$lib/components/animations/PlanetaryResonance.svelte";
  import Breadcrumbs from "$lib/components/pageSections/Breadcrumbs.svelte";
  import GridOneCol from "$lib/components/pageSections/GridOneCol.svelte";
  import HeroRightLayout from "$lib/components/pageSections/HeroRightLayout.svelte";

  // TODO: Optimize all the page containers
  // TODO: Hero does not stretch if page is a container?!
</script>

<svelte:head>
  <title
    >PAGE_TITLE | LowcodeN | We Elevate Your Tech
    Transformation</title
  >
  <meta name="description" content="LowcodeN" />
</svelte:head>

<HeroRightLayout>
  <svelte:fragment slot="bannerHeading"
    >PUT OUR EXPERTISE TO WORK</svelte:fragment
  >
  <svelte:fragment slot="bannerText">
    <h2 class="lg:text-start lg:self-center">...to enable your vision</h2>
    <!-- <h2 class="mb-5 lg:text-start lg:self-end"></h2> -->
  </svelte:fragment>
  <svelte:fragment slot="bannerRightContent">
    <PlanetaryResonance />
  </svelte:fragment>
</HeroRightLayout>

<!-- <Breadcrumbs /> -->

<GridOneCol cssClass="">
  <h1 class="pageTitle  text-center mx-auto">PAGE_TITLE</h1>
  <div class="sectionText">
    PAGE_INTRO
  </div>
  <a
    href="/contact"
    class="btn flex flex-row justify-end place-self-center m-4"
    aria-label="Begin your transformation">Let's Talk &gt;</a
  >
</GridOneCol>

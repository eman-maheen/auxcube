<script lang="ts">
  import OrigamiAnimation from '$lib/components/OrigamiAnimation.svelte';
  import SubpagesGrid from '$lib/components/SubpagesGrid.svelte';
  import Cycloid from '$lib/components/animations/Cycloid.svelte';
  import LowcodeN from '$lib/components/animations/LowcodeN.svelte';
  import PlanetaryResonance from '$lib/components/animations/PlanetaryResonance.svelte';
  import GridOneCol from '$lib/components/pageSections/GridOneCol.svelte';
  import HeroRightLayout from '$lib/components/pageSections/HeroRightLayout.svelte';
  import { services } from '$lib/content/site';

  // TODO: Optimize all the page containers
  // TODO: Hero does not stretch if page is a container?!
</script>

<svelte:head>
  <title>LowcodeN | We Elevate Your Tech</title>
  <meta name="description" content="LowcodeN" />
</svelte:head>
<HeroRightLayout>
  <svelte:fragment slot="bannerHeading">
    <div class="flex flex-col items-start">
      <div>The <span class="text-info whitespace-nowrap"> best code</span> is</div>
      <div class=""><span class="text-info">no code</span> at all!</div>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="bannerText">
    <h2 class="lg:text-start lg:self-start">
      Build your software at twice the speed and half the cost! *
    </h2>
    <p class="mb-5 text-sm lg:text-start lg:self-start">* YMMV</p>
    <a id="intro" class="btn btn-primary lg:self-start" aria-label="Get our Guide to Low Code" href="/low-code"
      >Get our Guide to Low Code</a
    >
  </svelte:fragment>
  <svelte:fragment slot="bannerRightContent">
    <PlanetaryResonance />
  </svelte:fragment>
</HeroRightLayout>
<GridOneCol cssClass="mt-12">
  <h2 class="sectionTitle justify-self-center mx-auto text-center">
    <span class="text-info">Accelerate</span> Your Time to Market
  </h2>
  <div class="sectionText text-justify">
    <p class="text-center">
      <em>Perfect is the enemy of good</em>.
    </p>
    <p>
      In today's fast-paced business world, where success is all about bringing your new products
      and services to market quickly and efficiently, a conventional product development cycle
      spanning months, or years, is too slow. Our accelerated development services utilize the power
      of Low Code and No Code (LCNC), coupled with a sprinkling of Full Code where absolutely
      necessary, to help you accelerate proofs of concept, minimum viable products, or the final
      product development.
    </p>
    <p>
      Low Code and No Code tools have shifted the balance in technology development and have
      empowered you to develop your prototypes and test them for a product-market fit quicker than
      ever. Instead of committing large chunks of cash and time to engineer products from scratch,
      you now have the option to utilize LCNC to create a fully-function product with the
      feature-set ready for the market in weeks or months, rather than years, and the opportunity to
      quickly test initial ideas, freely experiment, and mature your product without significant
      investment.
    </p>
    <p>
      Get on a call with us to discuss your ambitions, and we will love to help you accelerate your
      time to market.
    </p>
  </div>
  <a
    href="/contact"
    class="btn btn-primary flex flex-row justify-end place-self-center m-4 mb-16"
    aria-label="Begin Acceleration">Begin Acceleration</a
  >
</GridOneCol>
<GridOneCol cssClass="sectionPad bg-zinc-800">
  <h2 class="self-center text-center w-3/5">Our <span class="text-info">Arsenal</span></h2>
  <div class="sectionText lg:w-4/5">
    <p>
      Every product is unique, each problem different. We will work with you to understand your
      vision before recommending the right mix of No Code and Low Code tools that are ideally suited
      for a streamlined process automation, or an accelerated beta version delivery. We will then
      help you execute the plan many times faster than conventional high-code development.
    </p>
    <p>Check a few of our services below, and learn more by browsing our website.</p>
  </div>
</GridOneCol>
<SubpagesGrid cssClass="mb-16 " parentPage={services} />

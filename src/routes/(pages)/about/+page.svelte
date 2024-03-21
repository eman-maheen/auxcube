<script lang="ts">
  import PlanetaryResonance from '$lib/components/animations/PlanetaryResonance.svelte';
  import HeroMiddleLayout from '$lib/components/pageSections/HeroMiddleLayout.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  // TODO: Add snippet for description
</script>

<svelte:head>
  <title>About LowcodeN | LowcodeN | Elevate Your Tech Transformation</title>
  <meta
    name="description"
    content="LowcodeN is a premium consulting firm that specializes in Low Code and No Code solutions and automations to take your business higher."
  />
</svelte:head>
<HeroMiddleLayout>
  <svelte:fragment slot="bannerHeading">
    <span class="text-info whitespace-break-spaces">About </span><span> LowcodeN</span>
  </svelte:fragment>
  <svelte:fragment slot="bannerText">
    <h2 class="lg:text-start">We take you higher</h2>
  </svelte:fragment>
  <svelte:fragment slot="bannerRightContent">
    <PlanetaryResonance />
  </svelte:fragment>
</HeroMiddleLayout>
<div class="section">
  <div class="prose self-center mx-auto px-2">
    <p>
      LowcodeN specializes in innovative and transformational technology and automation solutions
      based on the software industry's latest No Code and Low Code platforms. Our extensive
      expertise in the software industry, working with startups, enterprises, and small businesses,
      has given us a deep expertise in producing robust, cost-effective, and scalable solutions to
      take your business higher.
    </p>
    <p>
      LowcodeN is a subsidiary of <a href="https://www.auxcube.com" target="_blank" aria-label="Auxcube"
        >Auxcube</a
      >, a premium software consultancy.
    </p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm service={{ title: 'LowcodeN' }} formTitle={`No Obligation Consultation`} />

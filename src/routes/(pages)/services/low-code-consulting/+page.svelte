<script lang="ts">
  import { services } from '$lib/content/site';
  import { page } from '$app/stores';
  import PlanetaryResonance from '$lib/components/animations/PlanetaryResonance.svelte';
  import HeroMiddleLayout from '$lib/components/pageSections/HeroMiddleLayout.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';

  let service = services?.children?.find(
    (v) =>
      v.slug === $page.url.pathname.substring($page.url.pathname.lastIndexOf('/')).replace('/', '')
  );

  // TODO: Optimize all the page containers
  // TODO: Hero does not stretch if page is a container?!
</script>

<svelte:head>
  <title>{service?.title ?? ''} | LowcodeN | Elevate Your Tech Transformation</title>
  <meta name="description" content={service?.snippet} />
</svelte:head>
<HeroMiddleLayout>
  <svelte:fragment slot="bannerHeading">
    <span class="text-info whitespace-break-spaces"
      >{`${service.title.split(' ').slice(0, -1).join(' ')}`}</span
    ><span>&nbsp;</span>{`${service.title.split(' ').slice(-1)}`}
  </svelte:fragment>
  <svelte:fragment slot="bannerText">
    <h2 class="lg:text-start">{service?.subtitle ?? ''}</h2>
  </svelte:fragment>
  <svelte:fragment slot="bannerRightContent">
    <PlanetaryResonance />
  </svelte:fragment>
</HeroMiddleLayout>
<div class="section">
  <div class="prose self-center mx-auto px-2">
    <h3>What is Low Code?</h3>
    <p>
      Low Code is a software development approach that enables businesses to create applications
      with little coding. Low code platforms provide visual interfaces and pre-built
      components that make it easy to drag and drop to create applications.
    </p>

    <h3>Why use Low Code?</h3>

    <p>Using a Low Code platform for software development enables businesses to:</p>

    <ul>
      <li>Accelerate software development</li>
      <li>Directly involve domain experts in the development process</li>
      <li>Reduce development costs</li>
      <li>Release software faster</li>
    </ul>

    <h3>How can LowcodeN help you through Low Code Consulting?</h3>
    <p>
      We will begin by conducting in-depth analysis and discovery calls with you to understand your
      problem statement and vision and to make it our own. We will ask the right questions and
      assess if a Low Code solution suits your needs. We will then recommend one or more Low Code
      platforms, based on our extensive experience, for execution. Our Low Code experts will be
      available to work with your team throughout the project.
    </p>

    <h3>How to begin your Low Code journey?</h3>
    <p>
      The first step is to contact LowcodeN. We will set up a no-obligation discovery call to
      understand the problem you are working on, share some viable platform options, and help you
      navigate the implementation till the end. Fill out the form below, and we'll get in touch!
    </p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

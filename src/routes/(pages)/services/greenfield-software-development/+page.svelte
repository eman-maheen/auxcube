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
    <span class="text-info"
      >{`${service.title.split(' ').slice(0, -1).join(' ')}`}</span
    ><span>&nbsp;{`${service.title.split(' ').slice(-1)}`}</span>
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
    <h3>What is a Greenfield Project?</h3>
    <p>
      Greenfield Development is the process of developing a new product or service from scratch on a
      clean slate, usually without the constraints of Brownfield Projects, where an update or
      enhancement of existing systems is the goal. Greenfield software development is used to create
      new products and services, replace outdated or inefficient legacy systems, or develop custom
      software solutions for specific industries or needs. Most startups, PoCs, and MVPs are
      greenfield development projects.
    </p>
    <h3>How can LowcodeN help you with Greenfield Development?</h3>
    <p>
      Our teams have decades of experience in Greenfield Development for enterprises, small
      businesses, startups, as well as solopreneurs. Our people come with expertise and deep
      insights into a diverse set of business domains and technologies, giving you the confidence
      that the greenfield solution they implement would be polished, scalable, and top-notch in
      quality. We handle everything for you, from idea refinement to product release. All you need
      to do is share your vision and provide periodic feedback.
    </p>
    <h3>How to begin Data Scraping?</h3>
    <p>The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!</p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

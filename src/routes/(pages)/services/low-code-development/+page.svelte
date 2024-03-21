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
    <h3>Low Code Development Services</h3>

    <h3>What is Low Code Development?</h3>
    <p>
      Low code development is a software development approach that allows businesses to create
      applications on Low Code No Code (LCNC) platforms with minimal coding. Low Code
      platforms provide visual interfaces and pre-built components that make it easy to drag and
      drop to create applications and enhance functionality with short code snippets instead of creating everything from scratch, resulting in a faster turnaround time and fewer errors.
    </p>

    <h3>Why opt for Low Code Development?</h3>

    <p>A Low Code Development based solution, where appropriate, is a low-cost, high-speed, and robust alternative to conventional software development, that enables businesses to:</p>
    <ul>
      <li>Accelerate software development</li>
      <li>Reduce development costs</li>
      <li>Empower citizen developers</li>
      <li>Increased agility</li>
      <li>Improved innovation</li>
      <li>Reduced risk</li>
    </ul>

    <h3>How can LowcodeN help you with Low Code Development?</h3>
    <p>
      We can help your business with Low Code development by:
    </p>
    <ul>
      <li>Recommending the right Low Code platform</li>
      <li>Developing a Low Code development strategy</li>
      <li>Orchestrating your team in developing Low Code applications</li>
      <li>Designing and developing Low Code applications</li>
      <li>Providing training and support</li>
    </ul>
    <p>To discuss your Low Code Development needs, please get in touch today!</p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

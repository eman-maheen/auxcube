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
    <h3>What is a PoC?</h3>

    <p>
      A Proof of Concept (PoC) is a small-scale project or experiment used to demonstrate the
      feasibility of a new technology or idea. PoCs are often used in software development to test
      and validate new features or functionality before committing to a complete implementation.
    </p>
    <h3>Why build a PoC?</h3>

    <p>PoCs can help businesses to:</p>

    <ul>
      <li>
        Validate their ideas and reduce the risk of developing a product that does not meet the
        needs of their customers.
      </li>
      <li>
        Assess the potential of a new technology or solution before committing significant resources
        to its development.
      </li>
      <li>Demonstrate the value of a new product or feature to potential investors or partners.</li>
    </ul>

    <h3>How can LowcodeN help you with Open Source?</h3>
    <p>
      At LowcodeN, we have a proven track record of developing successful
      PoCs for startups and businesses of all sizes. We can help you to:
    </p>
    <ul>
      <li>
        Define your goals and objectives: We will work with you to clarify your goals and objectives
        for the PoC and to identify the key features and functionality.
      </li>
      <li>
        Choose the right technology or solution: We will assess your needs and recommend the right
        tech stack for your PoC.
      </li>
      <li>
        Develop a PoC plan: We will develop a detailed PoC plan that outlines the scope of work, the
        timeline, and the budget.
      </li>
    <li>    
        Implement the PoC: We will manage the entire PoC development process, from ideation to
        implementation.
      </li>
      <li>
        Test and validate the PoC: We will thoroughly test and validate the PoC to ensure that it
        meets your requirements.
      </li>
      <li>
        Deploy the PoC: We will deploy the completed PoC on a cloud or on-premise platform so you may begin testing.
      </li>
    </ul>

    <h3>How to begin your PoC journey?</h3>
    <p>The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!</p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

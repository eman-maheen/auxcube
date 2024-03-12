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
    <span class="text-info whitespace-break-spaces">{`${service.title.split(' ').slice(0, -1).join(' ')}`}</span><span
      >&nbsp;</span
    >{`${service.title.split(' ').slice(-1)}`}
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
    <h3>What is Robotic Process Automation?</h3>
    <p>
      Robotic Process Automation (RPA) is an approach that allows businesses to automate repetitive
      and time-consuming tasks, freeing up employees to focus on more strategic and value-added work
      while improving efficiency and accuracy.
    </p>
    <p>
      While No Code and Low Code technologies (NCLC) provide ample automation opportunities, they
      are limited by the existing systems' interfaces. An RPA-centric approach takes the drive to
      automation further by identifying steps in your business process that can be modified or
      programmatically hooked into to eliminate the need for human intervention. RPA is usually a
      more involved process than using No Code and Low Code to automate the low-hanging fruit.
    </p>
    <h3>Where can we use Robotic Process Automation?</h3>
    <p>RPA can be applied to any industry that has data-based business flows, by identifying paths and patterns that can be automated, via programming, simulated inputs, Low Code or No Code, and eliminating human-driven systems by replacing them with software agents that perform the same work. RPA techniques can be applied in:</p>
    <li>
      Financial services - RPA can be used to automate tasks such as account reconciliation, fraud
      detection, and customer service inquiries.
    </li>
    <li>
      Healthcare - RPA can be used to automate tasks such as patient scheduling, medical records
      processing, and insurance claims processing.
    </li>
    <li>
      Retail - RPA can be used to automate tasks such as order processing, inventory management, and
      customer service inquiries.
    </li>
    <li>
      Manufacturing - RPA can be used to automate tasks such as production planning, quality control,
      and order fulfillment.
    </li>
    <p>RPA offers numerous benefits, including:</p>

    <ul>
      <li>Increased efficiency</li>
      <li>Reduced errors</li>
      <li>Improved compliance</li>
      <li>Increased productivity</li>
      <li>Reduced costs</li>
    </ul>
    <h3>How can LowcodeN help you through No Code Automation?</h3>
    <p>
      We will begin by assessing your current business processes and identifying opportunities for automation after a phase of discovery calls with you. We will then architect, propose, refine, and implement RPA solutions tailored to your specific business needs.
    </p>
    <h3>How to begin your Robotic Process Automation journey?</h3>
    <p>The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!</p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

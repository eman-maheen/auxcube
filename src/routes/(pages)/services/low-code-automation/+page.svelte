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
    <h3>What is Low Code Automation?</h3>
    <p>
      Take an inventory of your daily task list. You will likely find many tasks you perform manually, even though they are prime candidates for automation and freeing up your precious time for more valuable accomplishments. Observe the systems running in your business flow. Chances are, many of those systems can benefit from automation as well. Some of these tasks and systems can be automated simply by using No Code tools, but there are instances where some processing is required, which is why Low Code tools exist. Low Code allows you to write small pieces of logic and functionality while taking care of the most common features in a software system through intuitive drag-and-drop interfaces, enabling you to create a software-based solution to a problem in a much shorter time than writing custom software. 
    </p>
    <h3>How does Low Code Automation work?</h3>
    <p>
      At an abstract level, Low Code Automation works by setting up repeatable rules that trigger
      whenever an event specified by you occurs, adding logical checks and data
      transformations through visual interfaces, and performing actions defined by you. Recently, the acceptance of AI in mainstream business computing has opened up even more automation possibilities via Low Code.
      Some examples of Low Code in action would be:
    </p>
    <ul>
      <li>
        Download our monthly bank transactions through the banks' API, update a Google Sheet with the data, run reports, and email them as pdf to the relevant stakeholders' list.
      </li>
      <li>
        Whenever somebody fills up a contact form on our website, email them an introductory package, then email the sales team and share the data we have gathered through their interaction after enriching it with any existing data we may have on them.
      </li>
      <li>
        Every night at closing time, analyze the inventory and inform the purchase manager about any low-running items that need restocking.
      </li>
    </ul>
    <p>
      Scenarios like the above, and some involving even more complicated decision-making processes,
      can be automated via Low Code, letting the computer do your work for you. If you believe in
      hyper-automation, Low Code is an invaluable tool.
    </p>

    <h3>How can LowcodeN help you through Low Code Automation?</h3>
    <p>
      We will begin by taking an inventory of your repetitive business processes at a granular level and the available data and interfaces that can be utilized for automation. After an in-depth analysis, we will propose appropriate NCLC platforms and a practical automation plan, along with some pointers on increasing your systems' efficiency in the future through Full Code. After your approval, our Low Code experts will execute the plan and release the resulting improved systems in your environment.
    </p>

    <h3>How to begin your Low Code Automation journey?</h3>
    <p>The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!</p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

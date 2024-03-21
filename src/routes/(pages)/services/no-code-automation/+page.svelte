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
    <h3>What is No Code Automation?</h3>
    <p>
      During your day's work, there are numerous small tasks that you currently perform
      manually, which can benefit from No Code Automation. By setting up simple logic-based
      processing pipelines using No Code tools, you can free up your precious time from tackling
      mundane and monotonous tasks and focus on adding real value to your business.
    </p>
    <h3>How does No Code Automation work?</h3>
    <p>
      At an abstract level, No Code Automation works by setting up repeatable rules that
      trigger whenever an event specified by you occurs, optionally run some logical checks and data
      transformations, and perform an action defined by you. Recently, the acceptance of AI in
      mainstream business computing has opened up even more automation possibilities via No Code.
      Some examples would be:
    </p>
    <ul>
      <li>
        If an email from an email address not in our CMS arrives, email them an introductory
        package.
      </li>
      <li>
        Whenever somebody fills up a contact form on our website, infer their business from their domain name, automatically collect information about the business, summarize it, and store the results in our CMS for our sales team.
      </li>
      <li>
        If an email subject looks like a job application and contains an attachment, upload the
        email body to our ATS as a new entry.
      </li>
      <li>
        Whenever an order arrives in our online store, update the inventory system's stock count.
      </li>
    </ul>
    <p>Scenarios like the above, and some involving even more complicated decision-making processes, can be automated via No Code, letting the computer do your work for you. If you believe in hyper-automation, No Code is an invaluable tool.</p>

    <h3>How can LowcodeN help you through No Code Automation?</h3>
    <p>
      We will begin by taking an inventory of your repetitive business processes at a granular level with your help. After an in-depth analysis, we will propose a set of automations that are easily feasible through No Code along with the appropriate NCLC platform recommendations and another set that is possible by utilizing Low Code and Full Code. While creating the No Code can be handled by you after some training, our No Code experts will assist and guide you where required or execute the plan if you prefer.
    </p>

    <h3>How to begin your No Code Automation journey?</h3>
    <p>
      The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!
    </p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

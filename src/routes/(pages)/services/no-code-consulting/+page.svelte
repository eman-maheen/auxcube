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
    <h3>What is No Code?</h3>
    <p>
      No-code is a software development approach that allows anyone to build applications without
      writing code. Instead of requiring traditional programming languages, no-code platforms
      provide visual interfaces and drag-and-drop tools that make it easy for the stakeholders to
      create custom applications themselves, with minimal guidance from technical teams. The lack of
      complexity could be a blessing in disguise for many businesses, forcing them to focus on the
      actual problem at hand, and ignoring trivial issues like look and feel, optimization, advanced
      features, and similar non-essential items that can be tackled at a later phase.
    </p>
    <h3>Why No Code?</h3>
    <p>No code offers a number of benefits over traditional software development, including:</p>
    <ul>
      <li>
        Speed and agility: No Code platforms allow businesses to develop and deploy applications
        faster than traditional software development methods, which is a major advantage in today's
        competitive market.
      </li>
      <li>
        Cost savings: No Code platforms eliminate the need for expensive software developers, which
        can save businesses a significant amount of money.
      </li>
      <li>
        Accessibility: No Code platforms make it possible for anyone to build applications,
        regardless of their technical expertise, which opens up the world of software development to
        a wider range of people and businesses.
      </li>
      <li>
        Agility: Frequent functionality change is expected, rather than dreaded, in a No Code
        solution and does not incur the development times and costs associated with a traditional
        system, allowing you to experiment and improve the system at almost run-time speeds.
      </li>
    </ul>
    <h3>When should you use No Code?</h3>
    <p>
      A No Code could be the right approach for you if you want to create and deploy a system with some trackable information, business rules, automation, and interfaces, with a few compromises over the UI and branding. Creating a No Code system can take minutes rather than days or weeks and does not require back-and-forth meetings with engineering teams, allowing you to unleash your creativity without much assistance.
    </p>
    <p>
      If your idea is ambitious and complicated, the features usually available in No Code platforms may not suffice, and you may need Low Code or Full Code solutions; even then, you can still use No Code in select places in your system to speed up the project.
    </p>
    <h3>How can LowcodeN help you through No Code Consulting?</h3>
    <p>
      We will begin by conducting in-depth analysis and discovery calls with you to understand your problem
      statement and vision and to make it our own. We will ask the right questions and assess if a No Code solution suits your needs. We will then recommend one or more No Code platforms, based on our extensive experience, for execution. While creating the No Code can be handled by you after some training, our No Code experts will assist and guide you where required. 
    </p>

    <h3>How to begin your No Code journey?</h3>
    <p>
      The first step is to contact LowcodeN. We will set up a no-obligation discovery call to understand the problem you are working on, share some viable platform options, and help you navigate the implementation till the end. Fill out the form below, and we'll get in touch!
    </p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

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
    <span class="text-info">{`${service.title.split(' ').slice(0, -1).join(' ')}`}</span><span
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
    <h3>When should you go for an MVP?</h3>
    <p>
      Whether you have a fantastic software product idea or you are looking to upgrade an outdated
      software system that is no longer sufficient, an MVP - or Minimum Viable Product - is the
      recommended approach to test the waters, get some early user feedback, and validate your idea,
      before going all-in and committing a sizeable chunk of time and budget to develop the complete
      version. The goal of an MVP is to learn quickly and iterate on the product to ensure that it
      meets the needs of the target market.
    </p>
    <p>
      An MVP can be developed the same way as the final version, following all the ideation,
      planning, architecture, development, and QA phases that software engineering projects
      typically follow, or you can put together a minimal viable product using Low Code tools,
      sometimes making some compromises on the look and feel, and complicated functionality, but
      gaining a lot of insights and saving significant resources by getting the users to test-drive
      the core idea early.
    </p>
    <h3>How can LowcodeN help you with MVP development?</h3>
    <p>
      Our software engineer teams have expertise in conventional software engineering as well as
      quick prototyping and MVP development using Low Code, and understand the pros and cons of each
      approach. We will help you define your product vision, identify your target market, and help
      you find the right pragmatic balance between Low Code technologies and conventional languages
      and frameworks. Working with LowcodeN gives you access to:
    </p>
    <ul>
      <li>
        <span class="font-bold">Expertise</span>: With hundreds of language and Low Code options to
        choose from, our experienced and knowledgeable architects will assist you in utilizing a mix
        that is appropriate for your speed, time, and budget constraints.
      </li>
      <li>
        <span class="font-bold">Breadth</span>: A software product requires a wide variety of
        skills, UI/UX design, architecture, database design, engineering, security, and optimization
        are just a few of them. We will assemble an agile team for your MVP and add and remove
        expertise as necessary, which is impractical for businesses that do not have a dedicated
        engineering team. Our teams are also constantly mentored and coached by industry veterans to
        ensure their growth and your project's success at no extra cost to you.
      </li>
      <li>
        <span class="font-bold">Objectivity</span>: We partner with you with an ownership mindset
        and help you with an objective assessment of your product idea from the get-go, and through
        all phases of development to ensure that you make the best decisions for your business.
      </li>
    </ul>
    <h3>How to get started with your MVP development?</h3>
    <p>
      The first step is to contact LowcodeN. We will get on a no-obligations discovery call to
      understand your idea, assess your needs, and guide you on the best execution path through Low
      Code or Full Code. If you already know you want an MVP, please fill out the form below, and
      we'll get in touch!
    </p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

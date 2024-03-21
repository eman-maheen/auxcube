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
    <h3>What exactly is an SLC?</h3>
    <p>
      An SLC, or Simple, Lovable, and Complete product, is a product that provides the essential
      features and functionality that users need, while not putting too much effort into rarely used
      features, making it easy to use and enjoyable. An SLC may not be full of features, but it gets
      the job done, and the lack of clutter and bloat creates a more loyal user-base than an MVP.
    </p>
    <p>
      The SLC approach is often used in conjunction with MVP (Minimum Viable Product) development.
      MVP development is about building a product with just enough features to satisfy early
      customers and provide feedback for future development. In contrast, SLC development takes the
      MVP approach a step further by focusing on building products that are not only viable but also
      simple, lovable, and complete.
    </p>
    <p>A few examples of SLC products and their comparison with fully-features products are:</p>
    <ul>
      <li>
        A simple productivity tool like Todoist or Trello, vs. a complicated system such as JIRA
      </li>
      <li>A fun and engaging video game like Angry Birds, vs. a AAA game like Call of Duty</li>
      <li>
        A well-designed and easy-to-use website like Google Search, vs. a website with a maze of
        features, like Google Analytics
      </li>
    </ul>
    <h3>When should you aim for an SLC?</h3>
    <p>An SLC is the right approach for you if you want:</p>
    <ul>
      <li>
        Increased user engagement - SLC products are released early and are utilized as a functional
        tool (and not just for testing), which leads to increased user engagement, retention, and a
        better feedback loop on which features the users want next.
      </li>
      <li>
        Reduced development costs - SLC products are developed faster and more efficiently than
        relatively complex products, reducing development costs.
      </li>
      <li>
        Improved product quality - SLC products are more likely to be well-designed and free of bugs
        as they focus on a limited feature set instead of attempting to get many things done, which
        leads to improved product quality.
      </li>
      <li>
        Early Brand Awareness - SLC products are released early, so the users are engaging with your
        product immediately instead of waiting a year for a ground-breaking release.
      </li>
    </ul>
    <p>
      The MVP and SLC approaches are not mutually exclusive. You can start by building an MVP and
      then iterate on it to make it more lovable and complete over time. If you are unsure about the
      best approach to utilize for your product, do get in touch with us for a free consultation.
    </p>
    <h3>How can LowcodeN help you with your SLC development?</h3>
    <p>
      We will begin with in-depth analysis and discovery calls with you to understand your problem
      statement and vision and to make it our own. We will ask the right questions to help you
      separate the essence of your idea into an SLC feature set while removing the bells, whistles,
      and features that will get in the way of simplicity. Our engineering team will then get to
      work, using an arsenal of Low Code technologies to bring your vision to life, assisted by
      constant feedback from you.
    </p>

    <h3>How to begin your SLC development?</h3>
    <p>
      The first step is to contact LowcodeN. We will set up a no-obligation discovery call to
      understand your SLC idea, assess your needs, and share the best execution path through LowCode
      or Full Code. If you know that an SLC is what you need fill out the form below, and we'll get
      in touch!
    </p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

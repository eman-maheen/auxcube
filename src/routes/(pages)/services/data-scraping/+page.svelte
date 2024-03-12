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
    <h3>What is Data Scraping?</h3>
    <p>
      Data Scraping is collecting large amounts of data from websites, APIs, and other online
      sources efficiently and at scale through off-the-shelf, No Code, Low Code, or custom tools.
      The scraped data is typically the input for processes such as market research, data analysis,
      competitive intelligence, and artificial intelligence training.
    </p>
    <h3>How does Data Scraping work?</h3>
    <p>
      Depending on the data sources of interest, data scraping techniques employ a mix of
      off-the-shelf software, direct communication with servers, programmatic API calls, scripts,
      and web browser automation to collect large amounts of data. The data may need to be
      validated, enriched, and engineered into another shape before storing it in its destination
      format.
    </p>
    <p>Data scraping is used for a variety of purposes, for instance:</p>

    <ul>
      <li>Market research - collecting a list of menu prices from a food ordering aggregator.</li>
      <li>
        Lead generation - scraping the contact details of business decision-makers from a market
        segment.
      </li>
      <li>
        Data science - gathering statistics from multiple data sources for statistical analysis and
        modeling.
      </li>
      <li>Sentiment Analysis - analyzing a brand's customer reviews and product sentiment.</li>
      <li>
        Competitive intelligence - collecting website content for global competitors for a
        comparative study through AI.
      </li>
    </ul>

    <h3>How can LowcodeN help you with Data Scraping?</h3>
    <p>
      Our expert teams of data engineers and programmers are proficient in most tools and languages
      used for data scraping. We can help you with:
    </p>
    <ul>
      <li>Developing custom data scraping tools</li>
      <li>Automating data scraping tasks</li>
      <li>Cleaning and processing data</li>
      <li>Providing training and support</li>
      <li>Designing and developing data scraping solutions</li>
      <li>Providing training and support</li>
      <li>Managing your data scraping projects</li>
    </ul>

    <h3>How to begin Data Scraping?</h3>
    <p>The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!</p>
    <p></p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

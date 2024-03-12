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
    <h3>What is Open Source?</h3>
    <p>
      Open Source Software, or FOSS (Free and Open Source Software) is the result of a community of
      volunteers and enthusiasts coming together and contributing their time and skill to create and
      improve software that solves a specific problem. It is distributed with its source code,
      making it possible for anyone to inspect, modify, and enhance the software. Open Source
      Software is used by businesses of all sizes, from startups to Fortune 500 companies. Chances
      are that you are already using it in one form or another.
    </p>
    <h3>Why Open Source?</h3>
    <p>
      Build vs. Buy is the recurring dilemma when a business decides to use software to fill a
      business need, but there is usually a third choice - deploy FOSS. Open-source software exists
      for almost all use cases currently covered by commercial or bespoke software. Sometimes, a
      FOSS that solves your problem might be rough around the edges or require some tweaks before it
      works for your particular use case. Still, a supportive community and the availability of
      source code allow anyone with the motivation to fill identified gaps and contribute back to
      the community as a bonus.
    </p>
    <p>
      As open-source software has taken over the cloud, most businesses have shed reluctance and
      indifference towards FOSS and have embraced it as part of their strategy. A few examples of
      Open Source alternatives to common business scenarios are:
    </p>
    <ul>
      <li>
        Operating Systems - An enterprise can pay hundreds of thousands of dollars per annum in
        Windows licensing fees for their employees' laptops or adopt Linux as its primary operating
        system to save a fortune and, some would argue, gain better productivity.
      </li>
      <li>
        Content Management Systems - A small business can opt to create a custom website from
        scratch for their business, or it can use WordPress or another FOSS CMS and quickly set up
        its website at a cost closer to zero.
      </li>
      <li>
        Databases - A software can be created by using Microsoft SQL Server as the database engine,
        with significant annual licensing costs, or it can be created using PostgreSQL for free.
      </li>
      <li>
        Office Software - Your firm can choose to license Office 360 for all of its employees, or it
        can implement LibreOffice, which is just as good for most use cases but free.
      </li>
    </ul>
    <h3>What do you gain from Open Source?</h3>
    <p>There are many benefits to using open-source software in business, including:</p>
    <ul>
      <li>
        Cost savings: Open source software is typically free to use, which can save businesses a
        significant amount of money on software licensing costs.
      </li>
      <li>
        Quality: Open source software is typically very high quality, as it is constantly being
        reviewed and improved by the community of developers.
      </li>
      <li>
        Innovation: Open source software drives innovation, as developers are constantly adding new
        features and functionality.
      </li>
      <li>
        Flexibility: Open source software can be customized to meet the specific needs of a
        business, which can give businesses a competitive advantage.
      </li>
      <li>
        Security: Open source software is typically more secure than proprietary software, because
        the code is open for anyone to inspect and identify vulnerabilities.
      </li>
    </ul>
    <h3>How can LowcodeN help you with Open Source?</h3>
    <p>
      We can help you to reap the benefits of open-source software in your business in several ways,
      including:
    </p>
    <ul>
      <li>
        Assessing your current IT environment and identifying opportunities for open-source
        adoption.
      </li>
      <li>Recommending the best open-source solutions for your problems.</li>
      <li>Customizing an open-source solution for your specific needs.</li>
      <li>Helping you to deploy and manage open-source software.</li>
      <li>Helping you to migrate from proprietary software to its open-source counterpart.</li>
      <li>
        Providing training and support to your employees for effective open-source software
        operations.
      </li>
    </ul>

    <h3>How to begin your Robotic Process Automation journey?</h3>
    <p>The first step is to contact LowcodeN. Fill out the form below, and we'll get in touch!</p>
  </div>
</div>
<!-- <Breadcrumbs /> -->
<ContactForm {service} formTitle={`No Obligation ${service?.title ?? ''} Services Consultation`} />

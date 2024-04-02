<script lang="ts">
  import TitleContentBlock from './TitleContentBlock.svelte';
  import TwoColsWrapper from './TwoColsWrapper.svelte';

  interface Content {
    heading: string;
    content: string;
    emphasis: string;
  }

  export const models: Content[] = [
    {
      heading: 'Dedicated Teams',
      content:
        'A perfect engagement model for long-term collaboration, whether you have just started your journey or your in-house team needs helping hands. We build a squad (or more) for you that you can call your own, with just the right skill set that your endeavor demands, and scale it up as you grow. Our versatile teams integrate into your existing engineering processes from the get-go, freeing you to focus on your core business.',
      emphasis: 'Teams'
    },
    {
      heading: 'Turnkey Projects',
      content:
        'A hassle-free option, when you can define your software needs clearly, and do not expect the requirements to change much. We analyze your requirements at no cost before sharing tentative team size, cost, and schedule estimates. Our client success managers work with you to prioritize, set milestones, and finally, execute the project, keeping you in the loop at each step through a transparent and regular reporting cycle.',
      emphasis: 'Projects'
    },
    {
      heading: 'On-demand Consulting',
      content:
        'A flexible approach, when your project expertise requirements are in flux and you need multiple experts for short-term engagements. We have you covered whether you want a database guru for performance optimization, an SEO expert to improve your Lighthouse scores, or a UX audit conducted before you begin your next phase. We identify and engage the right person from a collective pool of hundreds of experts to help you stay on track.',
      emphasis: 'Consulting'
    },
    {
      heading: 'Startup Partnership',
      content:
        'A partnership between you and Auxcube, when your startup needs a long-term engineering partner. Our people are passionate about startups and excel in building MVPs that help startups to get to the market fast. If you are well-funded, we help you build, grow, and scale your engineering team quickly. If you are prudent about your burn rate and your idea is awesome, we are open to partial payment through equity to keep your cash reserves high, and have a stake in your success.',
      emphasis: 'Partnership'
    }
  ];
</script>

<TwoColsWrapper imageAligned="right">
  <div slot="leftColumn">
    <h2 class="bannerHeading text-center">
      Engagement<br /><span class="emphasize"><h1>{' Models'}</h1></span>
    </h2>
    {#each models as model, index}
      <ol class="ordered">
        <li>
          <span class="numberedCircleLong">
            {index + 1}
          </span>
          <TitleContentBlock
            heading={model.heading}
            content={model.content}
            emphasis={model.emphasis}
            icon={undefined}
          />
        </li>
      </ol>
    {/each}
  </div>

  <div slot="rightColumn">
    <p class="topAlignedText">
      Whether your existing engineering team is short-handed on one technology, you want an
      engineering team to call your own, or just need an MVP without worrying about software
      engineering, with our flexible engagement models, you choose exactly how we can help you.
    </p>
  </div>
  <div slot="rightColumnImage">
    <img src="/images/engagement-models-foreground.webp" width="300" height="250" alt="cubes" />
  </div>
</TwoColsWrapper>

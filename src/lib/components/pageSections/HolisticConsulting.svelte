<script lang="ts">
  import TitleContentBlock from './TitleContentBlock.svelte';
  import TwoColsWrapper from './TwoColsWrapper.svelte';

  interface Content {
    heading: string;
    content: string;
    emphasis: string;
    icon: string;
  }

  export const consultations: Content[] = [
    {
      heading: 'Software Development',
      content:
        'Our engineering teams are equally at home with green-field projects, software redesign, technology migrations, and feature development for existing software systems.',
      emphasis: 'Development',
      icon: 'development.svg'
    },
    {
      heading: 'QA & Technical Audit',
      content:
        'If you took a few wrong turns during your technology choices or implementation, we will analyze your codebase health, identify architecture and scalability issues, and guide you toward getting things back on track.',
      emphasis: 'Technical Audit',
      icon: 'audit.svg'
    },
    {
      heading: 'Business and Software Consulting',
      content:
        'Our seasoned consultants analyze your business or technology problem to recommend the best course of action that fits within your time, budget, and cost constraints.',
      emphasis: 'Consulting',
      icon: 'consulting.svg'
    },
    {
      heading: 'UI UX Design',
      content:
        'Our design teams collaborate closely with the engineers to maintain tight design guidelines and build a winning UX for your software.',
      emphasis: 'Design',
      icon: 'design.svg'
    }
  ];
</script>

<TwoColsWrapper imageAligned='left'>
  <div slot="leftColumn">
    {#each consultations as consultation}
      <TitleContentBlock
        heading={consultation.heading}
        content={consultation.content}
        emphasis={consultation.emphasis}
        icon={consultation.icon}
      />
    {/each}
  </div>
  <div slot="rightColumn">
    <p class="topAlignedText md:ml-10">
      We believe in a holistic approach to engineering. Our people have a keen eye for innovation
      and a deep understanding of diverse industries and aim to help you lay the foundation for your
      future success by analyzing your business from multiple angles and lenses, adding value beyond
      mere code through sharing insights and recommendations for improvement and optimization.
    </p>
  </div>
  <div slot="rightColumnImage">
    <img src="/images/cubes.webp" alt="cubes" />
  </div>
  <div class="verticalText">
    <h1 class="noWrap">
      Holistic Software<br /><span class="emphasize">{' Consulting'}</span>
    </h1>
  </div>
</TwoColsWrapper>

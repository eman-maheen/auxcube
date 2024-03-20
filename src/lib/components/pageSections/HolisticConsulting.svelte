<script lang="ts">
  import ContentBlock from "./ContentBlock.svelte";
  import HeroLayout from "./HeroLayout.svelte";

  interface Content {
    heading: string;
    content: string;
    emphasis: string;
  }

  export const consultations: Content[] = [
    {
      heading: "Software Development",
      content:
        "Our engineering teams are equally at home with green-field projects, software redesign, technology migrations, and feature development for existing software systems.",
      emphasis: "Development",
    },
    {
      heading: "QA & Technical Audit",
      content:
        "If you took a few wrong turns during your technology choices or implementation, we will analyze your codebase health, identify architecture and scalability issues, and guide you toward getting things back on track.",
      emphasis: "Technical Audit",
    },
    {
      heading: "Business and Software Consulting",
      content:
        "Our seasoned consultants analyze your business or technology problem to recommend the best course of action that fits within your time, budget, and cost constraints.",
      emphasis: "Consulting",
    },
    {
      heading: "UI UX Design",
      content:
        "Our design teams collaborate closely with the engineers to maintain tight design guidelines and build a winning UX for your software.",
      emphasis: "Design",
    },
  ];
</script>
<HeroLayout>
  <div slot="leftColumn">
    {#each consultations as consultation}
      <ContentBlock
        heading={consultation.heading}
        content={consultation.content}
        emphasis={consultation.emphasis}
      />
    {/each}
  </div>
  <div slot="rightColumn">
    <p class="text-start">
      We believe in a holistic approach to engineering. Our people have a keen
      eye for innovation and a deep understanding of diverse industries and aim
      to help you lay the foundation for your future success by analyzing your
      business from multiple angles and lenses, adding value beyond mere code
      through sharing insights and recommendations for improvement and
      optimization.
    </p>
    <img src="/images/cubes.png" alt="cubes" />
  </div>

  <div class="md:transform md:-rotate-90 flex md:flex-col md:w-1/5 items-center">
    <h1 class="md:whitespace-nowrap">
      Holistic Software<br /><span class="text-primary">{" Consulting"}</span>
    </h1>
  </div>
</HeroLayout>

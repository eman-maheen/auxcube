<script lang="ts">
  const services = [
    "Project Analysis",
    "Product/Service Audit",
    "Market Research",
    "Competitor Analysis",
    "Customer/User Research",
    "Analytics",
    "Problem Definition",
    "Strategy",
    "Creative Ideation",
  ];
</script>

<div class="heroMain mx-auto">
  <div class="heroContent">
    <div class="flex flex-col flex-2">
      <h2 class="bannerHeading">
        We understand<span class="text-primary">{" Business"}</span>
      </h2>
      <h2 class="bannerHeading">
        We deliver<span class="text-primary">{" Solutions"}</span>
      </h2>
      <img src="/images/cubes.webp" height="h-screen" alt="cubes" />
    </div>
    <div class="flex flex-col flex-1 self-start text-start">
        We transform your technical challenges into opportunities. Teaming up
        with Auxcube lets you focus on growing your business while our capable
        engineers build robust and scalable solutions for your technical
        challenges.

      <ul class="unordered px-10">
        {#each services as service}
          <li>{service}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

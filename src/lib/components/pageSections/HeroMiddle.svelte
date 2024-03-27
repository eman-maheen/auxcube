<script lang="ts">
  const services = [
    'Project Analysis',
    'Product/Service Audit',
    'Market Research',
    'Competitor Analysis',
    'Customer/User Research',
    'Analytics',
    'Problem Definition',
    'Strategy',
    'Creative Ideation'
  ];
</script>

<div class="heroMain heroMiddle">
  <div class="heroContent">
    <div class="heroMiddleContent">
      <h2 class="bannerHeading heroMiddleHeading">
        We understand<span class="emphasize">{' Business'}</span><br />
        We deliver<span class="emphasize">{' Solutions'}</span>
      </h2>
      <video autoplay loop muted playsinline height="200" width="250" class="self-center">
        <source src="/videos/animated_cuboid.webm" type="video/webm" />
      </video>
    </div>
    <div class="heroMiddleContent self-start">
      We transform your technical challenges into opportunities. Teaming up with Auxcube lets you
      focus on growing your business while our capable engineers build robust and scalable solutions
      for your technical challenges.
      <ul class="unordered">
        {#each services as service}
          <li>{service}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

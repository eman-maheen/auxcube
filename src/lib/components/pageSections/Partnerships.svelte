<script lang="ts">
  const logos = [
    'logo-conrad-labs.webp',
    'logo-tintash.webp',
    'logo-plugd.webp',
    'logo-laamp.svg',
    'logo-ils.webp',
    'logo-porchpass.svg'
  ];
</script>

<div class="heroMain text-end">
  <div class="heroContent zIndex">
    <div class="wrapperPartnersLogos">
      {#each logos as logo}
        <img src="/images/{logo}" width="100" height="100" alt="logo" class="partnerLogo" />
      {/each}
    </div>

    <div class="wrapperPartnersRightCol">
      <h2 class="bannerHeading">
        We Build<br /><span class="emphasize"><h1>{' Partnerships'}</h1></span>
      </h2>
      <p class="bannerText">
        Our clients are our partners. Whether you have just set out to build your next startup, or
        are an industry veteran, you face unique challenges - and each challenge calls for a unique
        combination of skills.
      </p>
    </div>
  </div>
  <video autoplay loop muted playsinline class="animatedBg">
    <source src="/videos/bg.mp4" type="video/mp4" />
  </video>
</div>

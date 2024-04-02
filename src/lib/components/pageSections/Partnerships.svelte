<script lang="ts">
  const logos = [
    'conrad-labs.webp',
    'tintash.webp',
    'plugd.webp',
    'laamp.svg',
    'ils.webp',
    'porchpass.svg'
  ];
</script>

<div class="heroMain text-end">
  <div class="heroContent zIndex">
    <div class="wrapperPartnersLogos">
      {#each logos as logo}
        <img
          src="/images/partner-logos/{logo}"
          loading="lazy"
          width="100"
          height="100"
          alt="logo"
          class="partnerLogo"
        />
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
  <video autoplay loop muted class="animatedBg" poster="/images/hero-background-frame.webp">
    <source src="/videos/hero-background.webm" type="video/webm" />
  </video>
</div>

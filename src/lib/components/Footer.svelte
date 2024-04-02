<script lang="ts">
  import { legalLinks, quickLinks, titleToSlug } from '$lib/content/site';
  import FooterSocialLinks from './FooterSocialLinks.svelte';
</script>

<footer class="p-5" id="footer">
  <div class="footerTopWrapper">
    <div class="footerTopRow flexStart">
      <h2>No-Obligation</h2>
      <a href="https://auxcubed.com/" class="primaryBtn md:mr-10">
        Join Us
        <img src="/icons/arrow-up-right.svg" alt="Link to apply at Auxcubed" />
      </a>
    </div>

    <h1 class="footerMainHeading">Discovery Consultation</h1>
  </div>
  <div class="footerColSection">
    <div class="footerColumn firstCol">
      <p>
        We offer a non-obligation discovery consultation session to understand the problem you are
        working on and to chart out the various ways that Auxcube can be of assistance. PLease use
        the Contact form or email us at <strong
          ><a href="mailto:connect@auxcube.com">connect@auxcube.com</a></strong
        > to initiate a discussion on your engineering needs.
      </p>
    </div>
    <div class="footerColumn">
      <h3>Quick Links</h3>
      {#each quickLinks?.children ?? [] as link}
        <a href={'/' + titleToSlug(link.title)} aria-label={link.url}>
          <p class="footerLink">
            {link.title}
          </p>
        </a>
      {/each}
    </div>
    <div class="footerColumn">
      <h3>Legal</h3>
      {#each legalLinks?.children ?? [] as link}
        <a href={'/' + titleToSlug(link.title)} aria-label={link.url}>
          <p class="footerLink">
            {link.title}
          </p>
        </a>
      {/each}
    </div>
    <div class="footerColumn">
      <h3>Contact</h3>
      <a href="mailto:connect@auxcube.com">connect@auxcube.com</a>
      <br />+1 408 757 0560 <br /><br />
      12520 Pinkham Cr Road, Rexford, <br /> Montana 59930, USA
    </div>

    <div class="footerColumn socialLinksCol">
      <a href="#top" class="goToTopBtn">
        <img src="/icons/arrow-up.svg" alt="Go to Top" />
      </a>
      <FooterSocialLinks />
    </div>
  </div>
  <hr class="footerBreak" />
  <span class="footerCopyRightText"
    >© 2024 <a href="https://auxcube.com/">Auxcube</a>. All Rights Reserved.</span
  >
</footer>

<script lang="ts">
  import { services } from "$lib/content/site";
  import { titleToSlug } from "$lib/content/site";
  import FooterSocialLinks from "./FooterSocialLinks.svelte";
  import NavLogo from "./NavLogo.svelte";
  const quickLinks = ["Skills", "Services", "Build My Team", "Career", "About"];
  const legalLinks = ["Privacy Policy", "Cookie Policy", "Refund Policy"];
</script>

<footer>
  <div class="md:px-10 md:mr-10 px-4">
  <div class="flex md:flex-row justify-between items-center mt-10 md:mr-20">
    <h2 class="bannerHeading ">No-Obligation</h2>
      <a href="https://auxcubed.com/" class="btn btn-primary">
        Join Us
        <img src="/icons/arrow-up-right.svg" alt="Join Us" />
      </a>
    </div>
  <h1 class="bannerHeading">Discovery Consultation</h1>
</div>

  <div class="footerSection justify-items-start justify-start">
    <div class="footerColumn md:col-span-2">
      <p>
        We offer a non-obligation discovery consultation session to understand
        the problem you are working on and to chart out the various ways that
        Auxcube can be of assistance. PLease use the Contact form or email us at <strong
          ><a href="mailto:connect@auxcube.com">connect@auxcube.com</a></strong
        > to initiate a discussion on your engineering needs.
      </p>
    </div>
    <div class="footerColumn">
      <h3 class="py-4">Quick Links</h3>
      {#each quickLinks as link}
        <a href={"/" + titleToSlug(link)} aria-label={link}>
          <p class="footerLink">
            {link}
          </p>
        </a>
      {/each}
    </div>
    <div class="footerColumn">
      <h3 class="py-4">Legal</h3>
      {#each legalLinks as link}
        <a href={"/" + titleToSlug(link)} aria-label={link}>
          <p class="footerLink">
            {link}
          </p>
        </a>
      {/each}
    </div>
    <div class="footerColumn">
      <h3 class="py-4">Contact</h3>
        <p class="footerLink">connect@auxcube.com</p>
    
        <p class="footerLink">+1 408 757 0560</p>
    
        <p class="footerLink">
          12520 Pinkham Cr Road, Rexford, <br /> Montana 59930, USA
        </p>
    
    </div>

    <div class="footerColumn  items-center">
      <a
        href="#top"
        class=" flex flex-row bg-gray-200 items-center justify-center rounded-full w-8 h-8 md:h-16 my-5"
      >
        <img src="/icons/arrow-up.svg" alt="Go to Top" />
      </a>
      <FooterSocialLinks />
    </div>
  </div>
</footer>

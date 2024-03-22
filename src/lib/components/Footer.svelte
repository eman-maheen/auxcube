<script lang="ts">
  import { services } from '$lib/content/site';
  import { titleToSlug } from '$lib/content/site';
  import FooterSocialLinks from './FooterSocialLinks.svelte';
    import NavLogo from './NavLogo.svelte';
  // FIXME: Add real Industries
</script>

<footer>
  <div class="footerStrip">
    <div class="footerStripSection">
      <FooterSocialLinks />
      <div class="flex flex-row flex-wrap justify-center">
        <!-- <a href="/contact" aria-label="Contact">Contact</a>
        <a href="/faq" aria-label="FAQ">FAQ</a>
        <a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a>
        <a href="/rfp" aria-label="Submit RFP">Submit RFP</a> -->
      </div>
      <div class="flex flex-row justify-center lg:justify-end text-center">
        &copy; LowcodeN
      </div>
    </div>
  </div>
  <div class="footerSection justify-items-start justify-start">
    <div class="footerColumn">
      <h3 class="py-4">Services</h3>
      {#each services?.children ?? [] as link}
        <a href={link.publishPage ? link.url : `/contact/${link.slug}`} aria-label={link.title}>
          <div class="footerLink">
            <div class="bg-contain mr-1.5 group bg-[url('/images/on.svg')] w-4 h-4" 
            />
            {link.title}
          </div>
        </a>
      {/each}
    </div>
    <div class="footerColumn">
      <h3 class="py-4">Industries</h3>
      {#each ['Healthcare', 'Transport', 'Real Estate', 'Law'] as link}
        <!-- <a href={'/' + titleToSlug(link)} aria-label={link}> -->
          <div class="footerLink">
            <div class="bg-contain mr-1.5 group bg-[url('/images/on.svg')] w-4 h-4" />
            {link}
          </div>
        <!-- </a> -->
      {/each}
    </div>
    <div class="footerColumn">
      <img src="/images/auxcube-logo.svg" alt="LowcodeN Logo" class="py-4 object-contain w-1/2" width="240" height="120"/>
      {#each ['Contact', 'About'] as link} 
      <!-- , 'Cookie Policy','Careers' -->
        <a href={'/' + titleToSlug(link)} aria-label={link}>
          <div class="footerLink">
            <div class="bg-contain mr-1.5 group bg-[url('/images/on.svg')] w-4 h-4" />
            {link}
          </div>
        </a>
        {/each}
    </div>
  </div>
</footer>

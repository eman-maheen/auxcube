<script lang="ts">
    import { page } from "$app/stores";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { NavLink } from "$lib/content/site";
  import "../app.postcss";
  let currentMenu: NavLink;
  let showMobileMenu: boolean;
  let screenWidth = 0;

  // The below line of code will blur root when mobile menu is opened
  $: blurMobile = screenWidth < 768 && showMobileMenu;
  $: blurDesktop = currentMenu?.children?.length;
  //this piece of code will close the mobile menu if screen size is md and mobile menu is left opened
  //FIXME: Remove javascript based menu hiding
  $: {
    if (screenWidth > 768 && showMobileMenu) showMobileMenu = false;
  }
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MZMDGRKM');
  </script>
</svelte:head>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe title="gtmframe" src="https://www.googletagmanager.com/ns.html?id=GTM-MZMDGRKM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- NOTE: Why >> <div style="display: contents" class="h-full overflow-hidden"> -->
<svelte:window bind:innerWidth={screenWidth} />

<Navbar bind:currentMenu bind:showMobileMenu />
<div id="appShell" class:brightness-25={blurDesktop || blurMobile}>
  <main id="pageSlot">
    <slot />
  </main>
</div>
<Footer />

<script lang="ts">
  import { slide } from 'svelte/transition';
  import { topNav } from '$lib/content/site';
  import ThemeSwitch from './ThemeSwitch.svelte';
  import NavLogo from './NavLogo.svelte';
  import NavbarSubbar from './NavbarSubbar.svelte';
  import MobileNav from './MobileNav.svelte';
  import { page } from '$app/stores';
  export let currentMenu: any = undefined;
  let showMainMenu = false;
  let unique = {};
  let isSearching = false;

  export let showMobileMenu = false;
  // TODO: Debounce top menu mouseleave so that the submenu is not immediately closed
  const showSubMenu = (linkId: string | undefined) => {
    let submenuObj = topNav.find((v) => v.url == linkId);
    if (submenuObj?.url == currentMenu?.url) {
      showMainMenu = true;
      // Same menu as the one showing - do nothing
      //   currentMenu = undefined;
    } else if (!submenuObj?.children?.length) {
      currentMenu = { url: linkId };
      closeAllMenus();
    } else {
      currentMenu = submenuObj;
      document.body.addEventListener('click', closeAllMenus);
    }
  };

  const closeAllMenus = () => {
    currentMenu = undefined;
    showMainMenu = false;
    showMobileMenu = false;
    document.body.removeEventListener('click', closeAllMenus);
  };
</script>

<header
  role="navigation"
  tabindex="-1"
  on:mouseleave={() => {
    showSubMenu('');
  }}
>
  <div class="navStrip">
    <div class="navGrid">
      <div class="navLogoBox">
        <button
          tabindex="0"
          class="navHamburger"
          aria-label="Just a button"
          on:click={() => {
            showMobileMenu = !showMobileMenu;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </button>
        <a href="/" aria-label="LowcodeN Home">
          <NavLogo />
        </a>
      </div>
      <div class="navLinks">
        {#each topNav as link}
          <a
            href={link.publishPage ? link.url : `/contact/${link.slug}`}
            aria-label={link.title}
            class:selected={(currentMenu && link.url === currentMenu?.url) ||
              $page.url.pathname == link.url}
            on:mouseenter={() => {
              showSubMenu(link.url);
            }}
          >
            <div class="flex flex-row items-center">
              <div
                class="bg-contain mr-1.5 bg-[url('/images/on.svg')] opacity-60 w-4 h-4"
                class:selected={currentMenu && link.url === currentMenu?.url}
                class:rotate-90={(currentMenu && link.url === currentMenu?.url) ||
                  $page.url.pathname == link.url}
              />
              {link.title}
            </div>
          </a>
        {/each}
      </div>
      <div class="navTrail">
        <input
          type="text"
          placeholder="Search..."
          class="navSearchInput"
          in:slide={{ axis: 'x', duration: 800 }}
          out:slide={{ axis: 'x', duration: 800 }}
          class:hidden={!isSearching}
        />
        <a class="btn btn-outline lg:self-start ring-0" aria-label="Get in touch" href="/contact"
          >Get in touch</a
        >
        <!-- <button
          class="navSearchButton"
          aria-label="Just a button"
          on:click={() => {
            isSearching = !isSearching;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="-256 -256 1024 1024"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            /></svg
          >
        </button> -->
        <!-- <ThemeSwitch /> -->
      </div>
    </div>
  </div>
  {#if currentMenu?.children?.length}
    {#key currentMenu?.title}
      <NavbarSubbar links={currentMenu} onSublinkClick={closeAllMenus} />
    {/key}
  {/if}
  {#if showMobileMenu}
    <MobileNav onSublinkClick={closeAllMenus} />
  {/if}
</header>

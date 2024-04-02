<script lang="ts">
  import { topNav } from "$lib/content/site";
  import { page } from "$app/stores";
  import NavLogo from "./NavLogo.svelte";
  import MobileNav from "./MobileNav.svelte";
  import ThemeSwitch from "./ThemeSwitch.svelte";
  export let currentMenu: any = undefined;
  export let showMobileMenu = false;
</script>

<header id="header">
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
    <a href="/" aria-label="Auxcube Home">
      <NavLogo />
    </a>
  </div>
  <div class="navLinks">
    <ul>
      {#each topNav as link}
        <li>
          <a
            href={link.publishPage ? link.url : `/contact/${link.slug}`}
            aria-label={link.title}
            class:selected={(currentMenu && link.url === currentMenu?.url) ||
              $page.url.pathname == link.url}
          >
            <div>
              <div
                class:selected={currentMenu && link.url === currentMenu?.url}
                class:rotate-90={(currentMenu &&
                  link.url === currentMenu?.url) ||
                  $page.url.pathname == link.url}
              />
              {link.title}
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  {#if showMobileMenu}
    <MobileNav />
  {/if}
</header>

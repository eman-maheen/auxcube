<script lang="ts">
  // import { IconGauge } from '@tabler/icons-svelte';
  import { fly, slide } from 'svelte/transition';
  import { tick } from 'svelte';
  import { navbarData } from '$lib/content/navbarData';
  import ThemeSwitch from './ThemeSwitch.svelte';
  import NavLogo from './NavLogo.svelte';
  let currentMenu: any = undefined;
  let showMainMenu = false;
  let unique = {};

  const showSubMenu = (linkId: string) => {
    let submenuObj = navbarData.find((v) => v.id == linkId);
    if (submenuObj?.id == currentMenu?.id) {
      // Same menu as the one showing - do nothing
      //   currentMenu = undefined;
    } else if (!submenuObj?.subMenuLinks?.length) {
      closeAllMenus();
    } else {
      currentMenu = submenuObj;
      document.body.addEventListener('click', closeAllMenus);
    }
  };
  const showContactForm = async () => {
    closeAllMenus();
    // TODO: Show and close contact somewhere
  };

  const closeAllMenus = () => {
    currentMenu = undefined;
    showMainMenu = false;
    document.body.removeEventListener('click', closeAllMenus);
  };

  function toggleMainMenu() {
    showMainMenu = !showMainMenu;
    if (!showMainMenu) currentMenu = [];
    unique = {};
    tick();
  }

  // $: console.log(currentMenu);
</script>

<header id="shell-header" class="flex mx-auto items-center w-full shadow-lg">
  <div class="flex-1 flex-row 2xl:container mx-auto items-center w-full">
    <div
      class="app-bar flex flex-col bg-surface-100-800-token space-y-4"
      role="toolbar"
      aria-label=""
      aria-labelledby=""
    >
      <div class="navbar bg-base-100 py-0 h-full">
        <div class="navbar-start">
          <div class="dropdown">
            <button tabindex="0" class="btn btn-ghost lg:hidden"  aria-label="Just a button">
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
            <ul
              class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 w-52"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <!-- <a class="btn btn-ghost normal-case text-xl" href="/"><NavLogo /></a> -->
        </div>
        <div class="navbar-center hidden lg:flex lg:items-start h-full bg-green-300">
          <ul class="menu flex flex-row menu-horizontal px-1 h-full ">
            {#each navbarData as aLink}
              {#if aLink.subMenuLinks}
                <li
                  on:mouseenter={() => {
                    showSubMenu(aLink.id);
                  }}
                  on:mouseleave={() => {
                    showSubMenu('');
                  }}
                >
                <flex class="h-full bg-yellow-500">

                  <details>
                    <summary class="py-0 bg-red-300">{aLink.text}</summary>
                    <ul class="rounded-none">
                      <li><div class="flex flex-row w-full">Test</div></li>
                      <li><a>xSubmenu 2</a></li>
                    </ul>
                  </details>
                </flex>
                </li>
              {/if}
            {:else}
              <li ><a>{aLink.text}</a></li>
            {/each}
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Button</a>
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  </div>
</header>
  {#if currentMenu?.subMenuLinks?.length}
    {#key currentMenu?.id}
      <div
        id="mega-menu-full-dropdown"
        class="w-full mt-1 shadow-sm border-y justify-between"
        in:slide
        out:slide
      >
        <ul>
          <div class="grid max-w-screen-2xl px-4 py-5 mx-auto sm:grid-cols-2 md:px-6">
            {#each currentMenu?.subMenuLinks as aSubLink, i}
              <li>
                <a href={aSubLink.url} class="block" on:click={closeAllMenus}>
                  <div class="flex flex-row gap-2">
                    <!-- <svelte:component
										this={aSubLink.icon || IconGauge}
										class="text-tertiary-600-300-token"
									/> -->
                    <div class="font-semibold">{aSubLink.text}</div>
                  </div>
                  <span class="text-sm">{aSubLink.details}</span>
                </a>
              </li>
            {/each}
          </div>
        </ul>
      </div>
    {/key}
  {/if}

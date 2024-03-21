<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { siteNav } from '$lib/content/site';
  import { page } from '$app/stores';

  export let onSublinkClick = () => {};
  let currentSubMenu: any = undefined;
  const showSubMenu = (linkId: string | undefined) => {
    let submenuObj = siteNav.find((v) => v.url == linkId);
    if (submenuObj?.url == currentSubMenu?.url) {
      // Same menu as the one showing - do nothing
      //   currentMenu = undefined;
    } else if (!submenuObj?.children?.length) {
      currentSubMenu = undefined;
    } else {
      currentSubMenu = submenuObj;
    }
  };
  $: {
    console.log('mob ', $page.url.pathname);
  }
</script>

<div
  class="mobileNav"
  transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
>
  {#if currentSubMenu?.children?.length}
    <div
      class="w-full"
      in:slide={{
        delay: 500,
        duration: 500,
        easing: quintOut,
        axis: 'x'
      }}
      out:slide={{
        delay: 0,
        duration: 250,
        easing: quintOut,
        axis: 'x'
      }}
    >
      {#key currentSubMenu?.title}
        <button
          on:click={() => {
            showSubMenu('');
          }}
        >
          Menu &lt {currentSubMenu?.title}
        </button>
        <ul>
          {#each currentSubMenu.children as link}
            <li class={`subnavItem min-w-[300px]`}>
              <img src="/images/on.svg" alt={link.title} width="16" height="16" />
              <div class="flex flex-row">
                <span class="subnavLinkTitle"
                  ><a
                    on:click={onSublinkClick}
                    href={link.publishPage ? link.url : `/contact/${link.slug}`}>{link.title}</a
                  ></span
                >
              </div>
            </li>
          {/each}
        </ul>
      {/key}
    </div>
  {:else}
    <ul
      in:slide={{
        delay: 500,
        duration: 500,
        easing: quintOut,
        axis: 'x'
      }}
      out:slide={{
        delay: 0,
        duration: 250,
        easing: quintOut,
        axis: 'x'
      }}
    >
      {#each siteNav as link}
        <li class={`subnavItem`}>
          {#if link?.children.length}
            <div
              class="flex flex-row"
              on:click={() => {
                showSubMenu(link.url);
              }}
              role="button"
              tabindex="0"
              on:keypress={() => {}}
            >
              <img src="/images/on.svg" alt={link.title}  width="16" height="16" />
              <span class="subnavLinkTitle justify-items-center"> {link.title}{' >'}</span>
            </div>
          {:else}
            <div class="flex flex-row">
              <img src="/images/on.svg" alt={link.title}  width="16" height="16" />
              <a
                on:click={onSublinkClick}
                href={link.publishPage ? link.url : `/contact/${link.slug}`}
              >
                <span class="subnavLinkTitle justify-items-center"> {link.title}</span>
              </a>
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

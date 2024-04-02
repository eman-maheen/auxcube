<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { topNav } from '$lib/content/site';
  import { page } from '$app/stores';

  export let onSublinkClick = () => {};
  let currentSubMenu: any = undefined;
  const showSubMenu = (linkId: string | undefined) => {
    let submenuObj = topNav.find((v) => v.url == linkId);
    if (submenuObj?.url == currentSubMenu?.url) {
      // Same menu as the one showing - do nothing
      //   currentMenu = undefined;
    } else if (!submenuObj?.children?.length) {
      currentSubMenu = undefined;
    } else {
      currentSubMenu = submenuObj;
    }
  };
 
</script>

<!-- FIXME: Clicking on mobile navbar icon changes the animated bg color back to original - z-index issue-->
<div
  class="mobileNav"
  transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
>

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
      {#each topNav as link}
        <li class={`subnavItem`}>
            <div class="flex flex-row">
              <a
                on:click={onSublinkClick}
                href={link.publishPage ? link.url : `/contact/${link.slug}`}
              >
                <span class="subnavLinkTitle justify-items-center"> {link.title}</span>
              </a>
            </div>
        </li>
      {/each}
    </ul>
</div>

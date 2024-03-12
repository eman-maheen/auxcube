<script lang="ts">
  import { slide } from "svelte/transition";
  import type { NavLink } from "$lib/content/site";
  export let links: NavLink | undefined;
  export let onSublinkClick = () => {};
  let selectedLink: NavLink | undefined = undefined;
</script>

<div id="mega-menu-full-dropdown" class="subnav" in:slide out:slide>
  <ul>
    <div class="subnavGrid">
      {#each links?.children ?? [] as aLink, i}
        <a
          href={aLink.publishPage ? aLink.url : (links?.title === "Services" ? `/contact/${aLink.slug}` : aLink.url)}
          on:click={onSublinkClick}
          on:mouseenter={() => {
            selectedLink = aLink;
          }}
        >
          <li class={`subnavItem`}>
            <img src="/images/on.svg" alt={aLink.title}  width="16" height="16" 
            class:rotate-90={selectedLink === aLink}
            />
            <div class="flex flex-row">
              <span class="subnavLinkTitle">{aLink.title}</span>
            </div>
          </li>
        </a>
      {/each}
    </div>
    <!-- <div class="flex subnavImage items-center" style="background-image: url(/images/{selectedLink?.img ?? "3col1.avif"});">
      <h3 class="subnavImageText">{selectedLink?.snippet ?? ""}</h3>
    </div> -->
  </ul>
</div>

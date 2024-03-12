<script lang="ts">
  import ColOfImageTitleText from './ColOfImageTitleText.svelte';
  import GridFourCol from './pageSections/GridFourCol.svelte';
  import type { NavLink } from '$lib/content/site';

  export let parentPage: NavLink | undefined;

  function stringToHash(v: string) {
    let hash = 0;

    if (v.length == 0) return hash;

    for (let i = 0; i < v.length; i++) {
      const c = v.charCodeAt(i);
      hash = (hash << 5) - hash + c;
      hash = hash & hash;
    }
    return hash;
  }

  export let cssClass = '';
  export let limit = parentPage?.children?.length;
  let childPages: NavLink[] | undefined = parentPage?.children?.slice(undefined, limit) ?? [];
  // FIXME: The font-sans specificity works with dark: only?!
</script>

<GridFourCol cssClass={` ${cssClass} `}>
  {#each childPages ?? [] as aPage}
    <a href={aPage.publishPage ? aPage.url : `/contact/${aPage.slug}`} aria-label={aPage.title}>
      <ColOfImageTitleText
        cssSection="border-logo-n-300/30 hover:border-dashed justify-start h-full hover:shadow-md hover:contrast-75 bg-surface-dark-800 pb-8 "
        cssTitle="font-sans text-xl p-4 bg-surface-dark-900 font-bold border-x border-primary text-center md:text-start md:min-h-[92px]"
        cssText="p-4"
      >
        <svelte:fragment slot="colImage">
          {#if aPage.img}
            <img src="/images/{aPage.img}" alt={aPage.title} aria-label={aPage.title} class="h-auto w-full" width=2000 height=1000/>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="colTitle"><span class="text-info">{`${aPage.title.split(' ').slice(0,-1).join(' ')}`}</span>{` ${aPage.title.split(' ').slice(-1)}`} </svelte:fragment>
        <svelte:fragment slot="colText">{aPage.snippet}</svelte:fragment>
      </ColOfImageTitleText>
    </a>
  {/each}
  {#if limit && limit < (parentPage?.children?.length || 0)}
    <a
      href="/services"
      class={`flex flex-row items-center self-center text-center justify-center col-span-1 md:col-span-1 lg:col-span-3 border border-dashed h-full hover:shadow-lg hover:contrast-200`}
    >
      <h2>Explore All Services...</h2>
    </a>
  {/if}
</GridFourCol>

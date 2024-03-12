<script lang="ts">
  import { page } from "$app/stores";
    import { slugToCrumb } from "$lib/content/site";
    export let cssClass="";
    let crumbs = $page.url.pathname.split('/');
    crumbs[0] = "Home";
    crumbs = crumbs.map(v=> slugToCrumb(v));
    // FIXME: Sohaib move crumbs to prop
    let slugs = $page.url.pathname.split('/');
    let paths = slugs.map((s, i) => `${slugs.slice(0,  i + 1).join('/')}`);
    paths[0] = '/';
</script>
<div class={`sectionBreadcrumbs ${cssClass}`}>
    <ul>
    {#each crumbs as crumb, i }
    <li>
        <a href={paths[i]}>
            <img src="/images/on.svg" class="h-4 pr-2" alt="{crumb}"  width="16" height="16">
            {crumb}
        </a>
    </li> 
    {/each}
</ul>
</div>
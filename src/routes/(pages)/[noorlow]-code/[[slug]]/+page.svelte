<script lang="ts">
  import { services, lowCode, noCode } from '$lib/content/site';
  import { page } from '$app/stores';
  import PlanetaryResonance from '$lib/components/animations/PlanetaryResonance.svelte';
  import Breadcrumbs from '$lib/components/pageSections/Breadcrumbs.svelte';
  import GridOneCol from '$lib/components/pageSections/GridOneCol.svelte';
  import HeroMiddleLayout from '$lib/components/pageSections/HeroMiddleLayout.svelte';
  import { enhance } from '$app/forms';

  export let form: ActionData;

  let submitting = false;
  let formMessage = '';

  let pronoun = 'I';
  let amare = 'am';

  function onSubmit() {
    submitting = true;
    return async ({ result, update }) => {
      submitting = false;
      formMessage = result.data.message;
      setTimeout(() => {
        formMessage = '';
      }, 5000);
      await update();
    };
  }

  // TODO: Optimize all the page containers
  // TODO: Hero does not stretch if page is a container?!
  $: {
    // FIXME: Are all these reactive things necessary?
    amare = pronoun === 'I' ? 'am' : 'are';
  }
</script>

<svelte:head>
  <title>Low Code and No Code Guide | LowcodeN | We Elevate Your Tech Transformation</title>
  <meta name="description" content="LowcodeN" />
</svelte:head>

<HeroMiddleLayout>
  <svelte:fragment slot="bannerHeading">Low Code and No Code Guide</svelte:fragment>
  <svelte:fragment slot="bannerText">
    <h2 class="lg:text-start">Join the wait list</h2>
  </svelte:fragment>
  <svelte:fragment slot="bannerRightContent">
    <PlanetaryResonance />
  </svelte:fragment>
</HeroMiddleLayout>

<!-- <Breadcrumbs /> -->

<GridOneCol cssClass="mb-8">
  <!-- <h1 class="pageTitle  text-center mx-auto">Contact</h1> -->
  <div class="prose">
    {#if formMessage}
      {formMessage}
    {:else}
      We are currently updating our Low Code and No Code Guide. Please share your
      contact details and we will inform you as soon as the LCNC Guide is published. The guide contains a
      detailed explanation for:{/if}
  </div>
  <div class="prose">
    <div>
      <h3>No Code</h3>
      <ul>
        {#each noCode.children as ncItem}
          <li>{ncItem.title}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h3>Low Code</h3>
      <ul>
        {#each lowCode.children as lcItem}
          <li>{lcItem.title}</li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="sectionText prose">Please leave your details to join the wait list, and we will share a link with exclusive access to the guide as soon as it is published.</div>
  <div class="sectionText md:w-4/5">
    <form method="POST" use:enhance={onSubmit}>
      <div class="sectionText items-start space-y-4 bg-surface-dark-800">
          <h2 class="text-center">Join the Wait List</h2>

        <select class="select select-ghost h-full text-lg" bind:value={pronoun} name="pronoun">
          <option selected>I</option>
          <option class="option">We</option>
        </select>
        {amare}
        <input type="text" class="input h-full" placeholder="<name/group>" name="entity" required />
        ,
        <input
          type="text"
          class="input h-full"
          placeholder="<role/designation>"
          name="designation"
          required
        />
        at
        <input
          type="text"
          class="input h-full"
          placeholder="<business name>"
          name="business"
          required
        />.
        {pronoun}
        {amare} interested in learning more about Low Code and No Code, and how LowcodeN may help me.
        Please share a copy with me as soon as it is published.
        {pronoun} may be reached at
        <input
          type="email"
          class="input h-full"
          placeholder="<professional email>"
          name="email"
          required
        />.
        <div class="flex flex-row items-center justify-between">
          <p class="p-0">Looking forward to reading the LowcodeN guide to Low Code and No Code!</p>
        </div>
        <div class="flex flex-row-reverse justify-items-end">
          <button type="submit" disabled={submitting} class="btn btn-secondary self-end">
            {#if submitting}
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
                >
                </path>
              </svg>
              Submitting...
            {:else}
              Join the wait list
            {/if}
          </button>
        </div>
      </div>
    </form>
  </div>
</GridOneCol>

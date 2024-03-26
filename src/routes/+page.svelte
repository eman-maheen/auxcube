<script lang="ts">
  import HeroTop from '$lib/components/pageSections/HeroTop.svelte';
  import HeroMiddle from '$lib/components/pageSections/HeroMiddle.svelte';
  import HolisticConsulting from '$lib/components/pageSections/HolisticConsulting.svelte';
  import EngagementModels from '$lib/components/pageSections/EngagementModels.svelte';
  import Partnerships from '$lib/components/pageSections/Partnerships.svelte';
  import Clients from '$lib/components/pageSections/Clients.svelte';
  import BrandVisionSlider from '$lib/components/pageSections/BrandVisionSlider.svelte';
</script>

<svelte:head>
  <title>Auxcube | Build Outside The Box</title>
  <meta name="description" content="Auxcube" />
</svelte:head>
<div class="content">
  <HeroTop />
  <HeroMiddle />
  <HolisticConsulting />
</div>
<BrandVisionSlider />
<div class="content">
  <EngagementModels />
  <Partnerships />
  <Clients />
</div>

<script lang="ts">
  // FIXME: Rename classes remove un necessary slots

    import ScrollButton from "../ScrollButton.svelte";
    import Cycloid from "../animations/Cycloid.svelte";
    import PlanetaryResonance from "../animations/PlanetaryResonance.svelte";

</script>

<div class="heroMain">
  <div class="heroContent">
    <!-- <div class="absolute z-10 items-end self-end right-0 top-0 p-0 m-0 opacity-50">
        <Cycloid a=+150 b=+51 ox=-150 oy=-80 w=+215 h=+255 dt=+0.05 stroke='hsla( 252 , 50%, 50%, 0.9)'/>
    </div>
    <div class="absolute z-10 items-start self-start left-0 bottom-0 p-0 m-0 opacity-50">
        <Cycloid t=+8 a=+150 b=+51 ox=-50 oy=-220 w=+215 h=+255 dt=+0.05 stroke='hsla( 252 , 50%, 50%, 0.9)'/>
    </div> -->
    <div
      class="heroTextBanner"
    >
      <h1 class="bannerHeading">
        <slot name="bannerHeading">slot heading not supplied!</slot>
      </h1>
     <slot name="bannerText">slot text not supplied!</slot>
    </div>
    <slot name="bannerRightContent">slot content not provided!</slot>
  </div>
  <!-- <div class="flex flex-col h-full text-center justify-end mt-[-8em]">
    <ScrollButton/>
  </div> -->
</div>

<style lang="scss">
  
</style>
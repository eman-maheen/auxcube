<script lang="ts">
  export let cssSection = "";
  export let cssTitle = "";
  export let cssText = "";
</script>

<div class={`sectionCol ${cssSection}`}>
  <slot name="colImage">colImage not provided!</slot>
  <h2 class={`sectionTitle ${cssTitle} w-full `}>
    <slot name="colTitle">slot colTitle not supplied!</slot>
  </h2>
  <p class={`${cssText}`}>
    <slot name="colText">slot colText not supplied!</slot>
  </p>
  <slot />
</div>

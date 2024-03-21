<script lang="ts">
  import OneColumn from "./OneColumn.svelte";

  export let headingCss = "";
  export let textCss = "";
</script>
<OneColumn>
  <svelte:fragment>
  <h2 class={`${headingCss}`}><slot name="sectionTitle">slot sectionTitle not supplied!</slot></h2>
  <!-- <h2 class="invisible 2xl:visible">Look at you, using this wide screen!</h2> -->
  <p class={`flex ${textCss} mx-auto`}>
    <slot name="sectionText">
      slot sectionText not supplied!
    </slot>
  </p>
  <slot></slot>
  </svelte:fragment>
</OneColumn>
<script lang="ts">
  export let cssClass="";
</script>
<div class={`section ${cssClass}`}>
  <div class="sectionThreeCol">
      <slot />
  </div>
</div>

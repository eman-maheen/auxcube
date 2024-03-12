<script lang="ts">
  export let cssClass="";
</script>
<div class={`section ${cssClass} `}>
  <div class="sectionFourCol">
      <slot />
  </div>
</div>

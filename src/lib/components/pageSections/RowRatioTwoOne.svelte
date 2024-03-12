<script lang="ts">
  export let cssClass="";
</script>
<div class={`section ${cssClass}`}>
  <div class="sectionTwoOneCol">
    <div class="sectionCol">
      <slot name="col1">col1 not provided!</slot>
    </div>
    <div class="sectionCol">
      <slot name="col2">col2 not provided!</slot>
    </div>
  </div>
</div>

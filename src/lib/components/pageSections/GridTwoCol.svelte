<!-- <div class="flex-1 w-full"> -->
  <script lang="ts">
    export let cssClass="";
  </script>
  <div class={`section ${cssClass}`}>
  <div class="sectionTwoCol">
      <slot />
  </div>
</div>
<!-- </div> -->

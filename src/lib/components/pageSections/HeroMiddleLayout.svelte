<script lang="ts">
  // FIXME: Rename classes remove un necessary slots
</script>

<div class="heroMiddle">
  <div class="heroContent h-full">
    <div
      class="heroTextBanner"
    >
      <h1 class="bannerHeading">
        <div class="flex-row"><slot name="bannerHeading">slot heading not supplied!</slot></div>
      </h1>
     <slot name="bannerText">slot text not supplied!</slot>
    </div>
    <div class="flex-1 ring-0">
      <slot name="bannerRightContent">slot content not provided!</slot>
    </div>
  </div>
</div>

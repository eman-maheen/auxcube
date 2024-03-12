<!-- <div class="flex-1 w-full"> -->
<div class="sectionPad">
  <div class="sectionTwoCol">
    <div>
      <h2 class="pageTitle">
        <slot name="sectionTitle">slot sectionTitle not supplied!</slot>
      </h2>
      <!-- <h2 class="invisible 2xl:visible">Look at you, using this wide screen!</h2> -->
      <p>
        <slot name="sectionText">slot sectionText not supplied!</slot>
      </p>
      <slot />
    </div>
    <slot name="sectionImage">sectionImage not provided!</slot>
  </div>
</div>
<!-- </div> -->

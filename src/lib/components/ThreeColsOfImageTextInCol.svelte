<div class="sectionPad">
  <div class="sectionThreeCol">
    <div class="sectionCol">
      <slot name="col1Image">sectionImage not provided!</slot>
      <h2 class="sectionTitle">
        <slot name="col1Title">slot sectionTitle not supplied!</slot>
      </h2>
      <p>
        <slot name="col1Text">slot sectionText not supplied!</slot>
      </p>
      <slot />
    </div>

    <div class="sectionCol">
      <slot name="col2Image">sectionImage not provided!</slot>
      <h2 class="sectionTitle">
        <slot name="col2Title">slot sectionTitle not supplied!</slot>
      </h2>
      <p>
        <slot name="col2Text">slot sectionText not supplied!</slot>
      </p>
      <slot />
    </div>
    <div class="sectionCol">
      <slot name="col3Image">sectionImage not provided!</slot>
      <h2 class="sectionTitle">
        <slot name="col3Title">slot sectionTitle not supplied!</slot>
      </h2>
      <p>
        <slot name="col3Text">slot sectionText not supplied!</slot>
      </p>
      <slot />
    </div>
  </div>
</div>

<div class="heroContent">
  <div class="flex flex-col flex-1 bannerText border-r-2 border-zinc-700 px-5">
    <slot name="leftColumn" />
  </div>
  <div class="bannerText flex flex-row flex-2 md:w-3/5 items-center self-start">
    <div class="flex flex-col px-10">
      <slot name="rightColumn" />
    </div>
    <slot />
  </div>
</div>

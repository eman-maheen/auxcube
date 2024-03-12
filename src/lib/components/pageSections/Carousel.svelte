<script lang="ts">
  // FIXME: Standardize Carousel
  import ImageTextInARow from "../ImageTextInARow.svelte";
  import GridTwoCol from "./GridTwoCol.svelte";
  import TwoEqualColumnsNoPadding from "./GridTwoCol.svelte";
</script>
<div class="sectionCarousel">
  <div id="slide1">
    <GridTwoCol>
        <img  src="/images/3col2.avif" class="object-fill  w-full" alt="Just a test" aria-label="Just a test"/>
      <p class="">Ding dong bell</p>
    </GridTwoCol>
  </div> 
  <div class="carouselControls">
    <a href="#slide4" class="btn btn-circle">❮</a> 
    <a href="#slide2" class="btn btn-circle">❯</a>
  </div>
</div>


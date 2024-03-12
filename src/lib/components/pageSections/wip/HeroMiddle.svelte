<script lang="ts">
  import { slide } from "svelte/transition";
  let bgImage = '/images/hero-animated-001.svg';
</script>

<div
  class="hero"
  style="background-image: url({bgImage});"
  in:slide={{ axis: "y", duration: 1000 }}
>
  <div class="hero-overlay bg-opacity-60" />
  <div
    class="heroContentCenter"
  >
    <h1 class="text-6xl font-bold">TRANSFORM YOUR VENTURE</h1>
    <h2 class="mb-5">from zero to one!</h2>
    <a class="btn btn-outline btn-secondary self-end" href="/contact">Get Started</a>
  </div>
</div>

<script lang="ts">
  import { onMount } from 'svelte';

  const brandVision: string[] = [
    'Accelerate',
    'Analyze',
    'Advise',
    'Architect',
    'Assemble',
    'Augment'
  ];

  let currentIndex = 0;
  let currentStory = brandVision[currentIndex];

  const changeStory = () => {
    currentIndex = (currentIndex + 1) % brandVision.length;
    currentStory = brandVision[currentIndex];
  };

  const interval = setInterval(changeStory, 2000);

  onMount(() => {
    return () => clearInterval(interval);
  });
</script>

<div class="brandVisionSliderWrapper">
  <div class="brandVisionSliderBgImg"></div>
  <div class="brandVisionSliderTextWrapper">
    <h1 class="brandVisionSliderText">{currentStory}</h1>
  </div>
</div>

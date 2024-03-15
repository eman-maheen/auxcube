<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    
    interface Vision {
      text: string;
      image: string;
    }
    
    // TODO: Update the images here
    const brandVision: Vision[] = [
      { text: 'Accelerate', image: '/images/bg.svg' },
      { text: 'Analyze', image: '/images/bg.svg' },
      { text: 'Advise', image: '/images/bg.svg' },
      { text: 'Architect', image: '/images/bg.svg' },
      { text: 'Assemble', image: '/images/bg.svg' },
      { text: 'Augment', image: '/images/bg.svg' }
    ];
    
    let currentIndex = 0;
    let currentStory = brandVision[currentIndex];
    
    const changeStory = () => {
      currentIndex = (currentIndex + 1) % brandVision.length;
      currentStory = brandVision[currentIndex];
    };
    
    const interval = setInterval(changeStory, 2000);
    
    onMount(() => {
      onDestroy(() => clearInterval(interval));
    });
  </script>
  <!-- FIXME: Adjust the paddingX of this component -->
  <div class="bg-[url('{currentStory.image}')] bg-cover w-full bg-no-repeat bg-center filter grayscale">
      <div class="items-center justify-center">
          <h1 class="bannerHeading text-white tracking-widest">{currentStory.text}</h1>
      </div>
  </div>
  
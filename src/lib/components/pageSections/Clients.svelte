<script lang="ts">
  const clients = [
    {
      review:
        'We were thoroughly impressed by the professionalism of the Auxcube team and the quality of their work. It was a pleasure collaborating with Auxcube, and we are excited to continue our partnership in future endeavors.',
      name: 'Ray Watts',
      position: 'CEO, Neutral Party'
    },

    {
      review:
        'Developers from Auxcube were communicative, skilled professionals that were flexible to working within our process to complete the necessary development work. We look forward to a continued relationship with Auxcube as a valuable partner, advisor, and member of our team.',
      name: 'Edgar Briza',
      position: 'Founder, The Forge'
    },
    {
      review:
        "We are highly satisfied with Auxcube's performance. They are very responsive, good problem solvers and work with you to get you what you need. They stayed highly engaged with our project, gave good technical advice, and stuck to the task to get to satisfactory solutions within a reasonable timeframe and cost.",
      name: 'Aurelio Prifitera',
      position: 'Founder, PsycHealth'
    }
  ];
  let currentClientIndex = 0;
  let isLeftDisabled = false;
  let isRightDisabled = false;

  function nextClient() {
    currentClientIndex = (currentClientIndex + 1) % clients.length;
  }

  function prevClient() {
    currentClientIndex = (currentClientIndex - 1 + clients.length) % clients.length;
  }
  let showMobileView: boolean;
  let screenWidth = 0;

  $: isRightDisabled = currentClientIndex === clients.length - 1;
  $: isLeftDisabled = currentClientIndex === 0;
  $: {
    if (screenWidth > 768) showMobileView = false;
    else showMobileView = true;
  }
</script>
<svelte:window bind:innerWidth={screenWidth} />
<div class="heroMain">
  <div class="heroContent">
    {#if showMobileView===false}
      <div class="gradWrapper">
        <div class="gradEffect"></div>
      </div>
    {/if}
    <div class="wrapperClientsRightCol">
      <h2 class="bannerHeading">
        We Build<br /><span class="emphasize"><h1>{' Values'}</h1></span>
      </h2>
      <p>{clients[currentClientIndex].review}</p>
      <div class="flexStart my-5">
        <div class="pillBox">
          <div class="numberedCircle">
            {currentClientIndex + 1 + '/' + clients.length}
          </div>
          <div class="clientName">
            {clients[currentClientIndex].name}<br />{clients[currentClientIndex].position}
          </div>
        </div>

        <div class="clientSlider">
          <button
            on:click={prevClient}
            disabled={isLeftDisabled}
            class="{isLeftDisabled ? 'activeBtn' : 'disabledBtn'} prevBtn"
          >
            <img src="/icons/arrow-up.svg" alt="Previous" />
          </button>
          <button
            on:click={nextClient}
            disabled={isRightDisabled}
            class="{isRightDisabled ? 'activeBtn' : 'disabledBtn'} nextBtn"
          >
            <img src="/icons/arrow-up.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
    <div class="clientAnimationWrapper">
      <video autoplay loop muted playsinline height="200" width="250">
        <source src="/videos/3D-cuboid.webm" type="video/webm" />
      </video>
    </div>
  </div>
</div>

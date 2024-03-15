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

  $: isRightDisabled = currentClientIndex === clients.length - 1;
  $: isLeftDisabled = currentClientIndex === 0;
</script>

<div class="heroMain">
  <div class="heroContent">
    <div class="wrapperClientsRightCol">
      <h1 class="mb-5">
        We Build<br /><span class="emphasize">{' Values'}</span>
      </h1>
      <p>{clients[currentClientIndex].review}</p>
      <div class="flexStart my-5">
        <div class="pillBox flex-1">
          <div class="numberedCircle">
            {currentClientIndex + 1 + '/' + clients.length}
          </div>
          <div class="md:pl-5 flex-1">
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
    <div class="flex-1">
      <img src="/images/cubes.webp" alt="cubes" />
    </div>
  </div>
</div>

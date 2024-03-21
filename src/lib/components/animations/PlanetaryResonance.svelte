<script lang="ts">
  import { onMount } from 'svelte';

  // NOTE: Sohaib Athar transformed this animation from svg to a svelte component
  // Source: https://thenewcode.com/1149/Orbital-Resonance-in-SVG

  let earth = {
    cx: 250.0,
    cy: 85.0,
    r: 8.0,
    transform: ''
  };
  let earthorbit = {
    cx: 250.0,
    cy: 250.0,
    r: 165.0,
    transform: ''
  };
  let venus = {
    cx: 250.0,
    cy: 130.0,
    r: 5.0,
    transform: ''
  };
  let venusorbit = {
    cx: 250.0,
    cy: 250.0,
    r: 120.0,
    transform: ''
  };
  let sol = {
    cx: 250.0,
    cy: 250.0,
    r: 16.0,
    transform: ''
  };
  let lines = [];
  let noMoreLines = false;

  // TODO: requestAnimationFrame?

  const earthDeg = 3.0,
    earthOrbits = 8.0,
    venusOrbits = 13.0,
    resonance = earthOrbits / venusOrbits,
    centre = 250.0,
    earthDist = centre - earth.cy,
    venusDist = centre - venus.cy;
  let i = 0.0;
  let skip = false;
  let earthX, earthY, venusX, venusY;
  onMount(() => {
    const anim = () => {
      {
        skip = !skip;
        (earthX = Math.cos((i * Math.PI) / 180.0) * earthDist + centre),
          (earthY = Math.sin((i * Math.PI) / 180.0) * earthDist + centre);
        venusX = Math.cos(((i / resonance) * Math.PI) / 180.0) * venusDist + centre;
        venusY = Math.sin(((i / resonance) * Math.PI) / 180.0) * venusDist + centre;
        if (!noMoreLines) {
          lines.push({
            x1: earthX,
            y1: earthY,
            x2: venusX,
            y2: venusY,
            stroke: 'hsla(' + i + ', 50%, 50%, 0.2)'
          });
        }
        i += earthDeg;
        if (lines.length > 360 * earthOrbits + earthDeg) {
          noMoreLines = true;
          // clearInterval(orbitals);
        }
      }
      requestAnimationFrame(anim);
    };
    anim();
    return () => {
      cancelAnimationFrame(anim);
    };
  });
  $: {
    earth.transform = 'rotate(' + i + ' ' + centre + ' ' + centre + ')';
    venus.transform = 'rotate(' + i / resonance + ' ' + centre + ' ' + centre + ')';
    lines = lines;
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 500 500"
  on:click={() => {
    lines = [];
    noMoreLines = false;
  }}
  on:keypress={() => {}}
  role="button"
  tabindex="0"
  focusable="false"
>
  <!-- <g id="orbits">
    <circle id="venusorbit" {...venusorbit} />
    <circle id="earthorbit" {...earthorbit} />
  </g> -->
  <g id="lineGroup" transform="rotate(-90 250 250)">
    {#each lines as aLine}
      <line {...aLine} />
    {/each}
    <line x1={earthX} y1={earthY} x2={venusX} y2={venusY} stroke="red" />
  </g>
  <circle id="earth" {...earth} />
  <circle id="venus" {...venus} />
  <circle id="sol" {...sol} />
</svg>

<style lang="scss">
  svg {
    outline: none !important;
    stroke: transparent;
    stroke-width: 0px;
    display: block;
    margin: 0 auto;
    width: 50%;
  }

  #lineGroup line {
    stroke-width: 1px;
  }

  #earth {
    @apply fill-logo-n-400;
  }
  #venus {
    @apply fill-logo-n-100;
  }
  #sol {
    @apply fill-logo-lowcode-300;
  }
  :hover #sol {
    @apply fill-logo-lowcode-700;
  }
</style>

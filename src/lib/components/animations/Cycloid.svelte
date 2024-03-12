<script lang="ts">
  import { onMount } from 'svelte';

  // NOTE: Sohaib Athar transformed this animation from svg to a svelte component
  // Source: https://thenewcode.com/1149/Orbital-Resonance-in-SVG

  let lines = [];
  let noMoreLines = false;

  function getCycloidPoint(a: number, b: number, t: number) {
    return {
      x: (a - b) * Math.cos(t) + b * Math.cos((t * (a - b)) / b),
      y: (a - b) * Math.sin(t) + b * Math.sin((t * (a - b)) / b)
    };
  }
  // TODO: requestAnimationFrame?

  export let a = +50;
  export let b = +37;
  export let dt = +0.2;
  const side = a > b ? +a : +a + +b;
  export let ox = -side;
  export let oy = -side;
  export let w = +side * 2;
  export let h = +side * 2;
  export let stroke:string = undefined;
  export let maxLines = +5000;

  export let t = +0.0;
  let { x: px, y: py } = getCycloidPoint(a, b, t);

  onMount(() => {
    const anim = () => {
      if (!noMoreLines) {
        t = parseFloat(t) + parseFloat(dt);
        const { x: nx, y: ny } = getCycloidPoint(a, b, t);
        lines.push({
          x1: px,
          y1: py,
          x2: nx,
          y2: ny,
          stroke: stroke || 'hsla(' + t + ', 50%, 50%, 0.5)'
        });
        px = nx;
        py = ny;
      }
      lines = lines;
      if (lines.length > maxLines) {
        noMoreLines = true;
        // clearInterval(orbitals);
      }
      requestAnimationFrame(anim);
    };
    anim();
    return () => {
      cancelAnimationFrame(anim);
    };
  });
  $: {
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="{ox} {oy} {w} {h}"
  on:click={() => {
    lines = [];
    noMoreLines = false;
  }}
  on:keypress={() => {}}
  role="button"
  tabindex="0"
>
  <g id="lineGroup">
    {#each lines as aLine}
      <line {...aLine} />
    {/each}
  </g>
</svg>

<style lang="scss">
  svg {
    display: block;
    margin: auto auto;
    width: 100%;
  }
  #lineGroup line {
    stroke-width: 1px;
  }
  #earth {
    fill: hsl(var(--p));
  }
  #venus {
    fill: hsl(var(--pf));
    // fill: hsl(var(--sf));
    // fill: hsl(60, 80%, 80%);
  }
  #sol {
    fill: yellow;
  }
</style>

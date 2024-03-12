<script lang="ts">
  import { onMount } from 'svelte';

  // Generate the polygon
  let r = 200;
  let height = r * Math.cos((30 * Math.PI) / 180.0);
  let width = r;

  let pts = [];
  for (let i = 0; i < 360; i += 60) {
    pts.push({
      x: r * Math.cos((i * Math.PI) / 180.0),
      y: r * Math.sin((i * Math.PI) / 180.0) - height
    });
  }
  let ptsString = pts.reduce((p, c) => {
    return p + ` ${c.x},${c.y}`;
  }, '');

  let rot = 0.0;
  let rots = 0;
  let prevTx = '';
  let groupTx = ``;
  let rotX = width / 2.0;
  onMount(() => {
    const anim = () => {
      rot = rot + 1;
      groupTx = prevTx + ` rotate(${rot} ${rotX}, 0)`;
      if (rot >= 60.0) {
        rots = rots + 1;
        prevTx = ` translate(${width * rots}, 0)`;
        rot = 0;
      }
      if (rots < 4) {
        requestAnimationFrame(anim);
      }
    };
    anim();
    return () => {
      cancelAnimationFrame(anim);
    };
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="-1500 -1500 3000 3000"
  class="border"
  on:click={() => {}}
  on:keypress={() => {}}
  role="button"
  tabindex="0"
>
  <defs>
    <g id="hex">
      <polygon points={ptsString} />
      <text fill="red">A poly</text>
    </g>
  </defs>
  <g id="axes">
    <line x1="-1500" y1="0" x2="1500" y2="0" stroke="green" stroke-width="5" />
    <line x1="0" y1="-1500" x2="0" y2="1500" stroke="blue" stroke-width="5" />
  </g>
  <g id="lineGroup" transform={groupTx}>
    <use href="#hex" fill="green" stroke-width="0" id="hexClient"/>
  </g>
  <use href="#hex" x={-2*width} fill="green" stroke-width="0" />
  <text x="0" y="623" fill="blue">{rot}</text>
</svg>

<style lang="scss">
  svg {
    display: block;
    margin: 0 auto;
    width: 50%;
  }
  #lineGroup #hexClient {
    fill: hsl(60, 80%, 80%);
    // fill: hsl(var(--pf));
  }
</style>

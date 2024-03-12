<!-- From https://codepen.io/anavicente/pen/MbXWGQ -->
<!-- TODO: See if we can use things from https://codepen.io/pehaa/pen/zbvbwd -->
<div class="flex flex-col w-full h-full min-h-[300px] items-center self-center justify-center content-center">
  <div class="flex tangram ~border-token -z-50">
    <div class="triangle" />
    <div class="triangle" />
    <div class="square" />
    <div class="triangle--medium" />
    <div class="triangle--big" />
    <div class="triangle--big" />
    <div class="parallelogram" />
  </div>
</div>

<style lang="scss">
  /*
	Function from here: https://www.antimath.info/css/sass-sqrt-function/
*/

@use "sass:math";

@function sqrt($r) {
    $x0: 1;
    $x1: $x0;
    @for $i from 1 through 10 {
      $x1: $x0 - math.div($x0 * $x0 - abs($r), 2 * $x0);
      $x0: $x1;
    }
    @return $x1 * 1px;
  }

  /*
	Variables
*/

  $color: #aea8d3;
  $size: 70;
  $sizePX: $size * 1px;
  $cathetus: sqrt(($size * $size) + ($size * $size)) * 0.5;

  /*
	Grid
*/

  // html,
  // body {
  //   align-items: center;
  //   display: flex;
  //   height: 100%;
  //   overflow: hidden;
  //   justify-content: center;
  //   width: 100%;
  // }

  /*
	Default pieces
*/

  %defaults {
    left: 0;
    position: absolute;
    top: 0;
  }

  %defaultsTriangle {
    height: 0;
    width: 0;
  }

  .tangram {
    animation: tangram 10s forwards infinite ease;
    height: $sizePX * 2;
    position: relative;
    width: $sizePX * 2;
    will-change: transform;
  }

  .square {
    animation: square 10s forwards infinite ease-out;
    @extend %defaults;
    background: $color;
    height: $cathetus;
    transform: translate($sizePX + $sizePX*0.5, $sizePX*0.5 + 0.5px) rotate(45deg);
    transform-origin: 0 0;
    width: $cathetus;
    will-change: transform;
  }

  .triangle {
    @extend %defaults;
    @extend %defaultsTriangle;
    animation: triangleSmall1 10s forwards infinite ease-out;
    border-bottom: $sizePX*0.5 solid lighten($color, 15%);
    border-left: $sizePX*0.5 solid transparent;
    border-right: $sizePX*0.5 solid transparent;
    transform: rotate(-90deg) translate(-100%, $sizePX * 2 - $sizePX*0.5);
    transform-origin: 0 0;
    will-change: transform;
    ~ .triangle {
      animation: triangleSmall2 10s forwards infinite ease;
      border-bottom-color: lighten($color, 10%);
      transform: translate($sizePX*0.5, $sizePX);
      transform-origin: 0 0;
    }
    &--big {
      @extend %defaults;
      @extend %defaultsTriangle;
      animation: triangleBig1 10s forwards infinite ease-in;
      border-bottom: $sizePX solid darken($color, 20%);
      border-left: $sizePX solid transparent;
      border-right: $sizePX solid transparent;
      transform: rotate(180deg) translate(-100%, -100%);
      transform-origin: 0 0;
      ~ .triangle--big {
        animation: triangleBig2 10s forwards infinite ease;
        border-bottom-color: darken($color, 30%);
        transform: rotate(90deg) translate(0, -100%);
      }
    }
    &--medium {
      @extend %defaults;
      @extend %defaultsTriangle;
      animation: triangleMedium 10s forwards infinite ease-in;
      border-bottom: $cathetus solid darken($color, 10%);
      border-left: $cathetus solid transparent;
      border-right: $cathetus solid transparent;
      transform: translate($sizePX * 2 + $sizePX*0.5 - 1px, $sizePX + $sizePX*0.5)
        rotate(135deg);
      transform-origin: 0 0;
    }
  }

  .parallelogram {
    @extend %defaults;
    animation: parallelogram 10s forwards infinite ease;
    background: darken($color, 40%);
    height: $sizePX*0.5;
    width: $sizePX;
    transform: skewX(-45deg) translate(200%, 300%);
    transform-origin: 0 0;
    will-change: transform;
  }

  /*
	Animations
*/

  @keyframes tangram {
    0%,
    10%,
    100% {
      height: $sizePX * 2;
      width: $sizePX * 2;
    }
    33%,
    50% {
      height: $sizePX * 4;
      width: $sizePX * 3 + $sizePX*0.25;
    }
    66%,
    85% {
      height: $cathetus * 4 + $cathetus*0.5;
      width: $sizePX * 3 - math.div($sizePX, 7);
    }
  }

  @keyframes triangleSmall1 {
    0%,
    10%,
    100% {
      transform: rotate(-90deg) translate(-100%, $sizePX * 2 - $sizePX*0.5);
      transform-origin: 0 0;
    }
    33%,
    50% {
      transform: rotate(90deg) translateY(-$sizePX*0.5);
      transform-origin: 0 0;
    }
    66%,
    85% {
      transform: translate($cathetus + math.div($sizePX, 3) + 1px, math.div($sizePX, 3))
        rotate(135deg);
      transform-origin: 0 0;
    }
  }

  @keyframes triangleSmall2 {
    0%,
    10%,
    100% {
      transform: translate($sizePX*0.5, $sizePX);
      transform-origin: 0 0;
    }
    33%,
    50% {
      transform: rotate(-90deg) translateY(-$sizePX*0.5);
      transform-origin: right 0;
    }
    66%,
    85% {
      transform: rotate(90deg) translate(150%, -141%);
      transform-origin: 0 0;
    }
  }

  @keyframes triangleMedium {
    0%,
    10%,
    100% {
      transform: translate($sizePX * 2 + $sizePX*0.5 - 1px, $sizePX + $sizePX*0.5)
        rotate(135deg);
      transform-origin: 0 0;
    }
    33%,
    50% {
      transform: rotate(-90deg) translateX(-$sizePX * 3 + math.div($sizePX, 3));
      transform-origin: 0 0;
    }
    66%,
    85% {
      transform: rotate(-90deg) translate(-228%, 28%);
      transform-origin: 0 0;
    }
  }

  @keyframes triangleBig1 {
    0%,
    10%,
    100% {
      transform: rotate(180deg) translate(-100%, -100%);
    }
    33%,
    50% {
      transform: rotate(90deg)
        translate($sizePX + $sizePX*0.25, -$sizePX - $cathetus + 1px);
    }
    66%,
    85% {
      transform: translate(80%, 390%) rotate(-135deg);
    }
  }

  @keyframes triangleBig2 {
    0%,
    10%,
    100% {
      transform: rotate(90deg) translate(0, -100%);
    }
    33%,
    50% {
      transform: translateX($sizePX * 2 + $cathetus*0.5 + 2px)
        translateY($cathetus * 4 + $cathetus*0.2 - 1px) rotate(135deg);
    }
    66%,
    85% {
      transform: rotate(180deg) translate(-145%, -280%);
    }
  }

  @keyframes parallelogram {
    0%,
    10%,
    100% {
      transform: skewX(-45deg) translate(200%, 300%);
    }
    33%,
    50% {
      transform: translateX($sizePX * 2 + $sizePX*0.2 - 2px)
        translateY($sizePX * 3 + $sizePX*0.2 - 3px) skewX(-45deg);
    }
    66%,
    85% {
      transform: translate($sizePX + $sizePX*0.2, $sizePX*0.5) skewY(45deg)
        rotate(90deg);
    }
  }

  @keyframes square {
    0%,
    10%,
    100% {
      transform: translate($sizePX + $sizePX*0.5, $sizePX*0.5 + 0.5px) rotate(45deg);
    }
    33%,
    50% {
      transform: rotate(45deg) translateX($cathetus);
    }
    66%,
    85% {
      transform: translate($cathetus, $sizePX) rotate(45deg);
    }
  }
</style>

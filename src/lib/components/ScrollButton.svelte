<section id="section04" class="demo">
  <a href="#intro"><span></span>Learn More</a>
</section>

<style lang="scss">
  section {
    position: relative;
    width: 100%;
    height: 100%;
  }
  section::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 80%;

  }

  .demo a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: opacity 0.3s;
  }
  .demo a:hover {
    opacity: 0.5;
  }

  #section04 a {
    padding-top: 60px;
  }
  #section04 a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb04 2s infinite;
    animation: sdb04 2s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb04 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      -webkit-transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
  }
  @keyframes sdb04 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      transform: rotate(-45deg) translate(0, 0);
    }
  }
</style>

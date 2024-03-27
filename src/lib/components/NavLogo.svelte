<script>
  import { slide } from 'svelte/transition';
  // TODO: Fix nav icon height
  // TODO: Use custom css variables
  // FIXME: Not creating the light theme, going with the dark theme for now, everything changes if we go light
</script>

<div class="navLogo">
  <img
    class="block dark:hidden"
    src="/images/auxcube-logo.svg"
    aria-label="Logo"
    alt="Auxcube Logo"
    width="240"
    height="120"
  />
  <img
    class="hidden dark:block"
    src="/images/auxcube-logo.svg"
    aria-label="Logo"
    alt="Auxcube Logo"
    width="240"
    height="120"
  />
</div>

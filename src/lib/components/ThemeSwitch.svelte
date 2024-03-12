<script lang="ts">
  import { browser } from '$app/environment';

  let darkMode = false;

  function handleSwitchDarkMode() {
    darkMode = !darkMode;
    const themeSet = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', themeSet);
    const storedTheme = localStorage.getItem('theme');

    document.documentElement.setAttribute('data-theme', storedTheme || 'light');

    if (themeSet === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  if (browser) {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      darkMode = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
      darkMode = false;
    }
  }
</script>

<input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
<label for="theme-toggle" class="h-[24px] p-2" />

<style lang="postcss">
  #theme-toggle {
    @apply invisible;
  }
  #theme-toggle + label {
    @apply inline-block cursor-pointer h-6 w-6 rounded-full duration-300 content-[''];
    transition: all 0.5s ease-in-out, color 0.5s ease-in-out;
  }

  #theme-toggle:not(:checked) + label {
    @apply bg-amber-400;
  }

  #theme-toggle:checked + label {
    @apply bg-transparent;
    box-shadow: inset -9px -8px 1px 1px #fff;
  }
</style>

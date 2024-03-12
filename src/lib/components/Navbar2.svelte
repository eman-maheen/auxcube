<script>
  import NavLogo from './NavLogo.svelte';
</script>

<header id="shell-header" class="flex mx-auto items-center w-full shadow-lg">
  <div class="flex-1 flex-row 2xl:container mx-auto items-center w-full">
    <div
      class="app-bar flex flex-col bg-surface-100-800-token space-y-4"
      role="toolbar"
      aria-label=""
      aria-labelledby=""
    >
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <button tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                /></svg
              >
           </button>
            <ul
              stabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl" href="/"> <NavLogo /> </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 z-10">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <details>
                <summary>xParent</summary>
                <ul class="p-2 rounded-none">
                  <li><div class="flex flex-row w-full">Test</div></li>
                  <li><a>xSubmenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Button</a>
        </div>
      </div>
    </div>
  </div>
</header>

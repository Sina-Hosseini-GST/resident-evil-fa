<script>
  import Arrow from "./Arrow.svelte";
  export let game;
  export let file;
</script>

  <div class="z-10 flex gap-2 items-center flex-nowrap overflow-x-auto bg-black h-12 px-6 fixed top-16 inset-x-0 overflow-y-hidden border-y border-c-gray-6">
    <a href="/" class="text-c-red whitespace-nowrap hover:font-bold">
      REDOCS
    </a>
    <Arrow />
    <span>
      {#if game}
        <span class="text-c-red">
          {game.shortTitle}
        </span>
        {:else}
          <i class="text-c-green whitespace-nowrap first-letter:font-bold underline underline-offset-4 decoration-dashed">
            SELECT A GAME
          </i>
      {/if}
    </span>
    {#if game}
      <Arrow />
      <span class="text-c-red">
        FILES
      </span>
      <Arrow />
      <span class="text-c-green whitespace-nowrap first-letter:font-bold underline underline-offset-4 decoration-dashed">
        <i>
          {#if file}
            {file.title}
            {:else}
              SELECT A FILE
          {/if}
        </i>
      </span>
    {/if}
  </div>
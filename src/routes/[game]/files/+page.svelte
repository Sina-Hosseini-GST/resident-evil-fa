<script>
  import { page } from '$app/stores';
	import gameStore from '../../../stores/gameStore.js';
  import Breadcrumb from '../../components/Breadcrumb.svelte';

  const url = $page.url.pathname;

  let numberOfFilesTranslated = 0;

  for (let i = 0; i < $gameStore.length; i++) {
    const game = $gameStore[i];
    if (game.url == url) {
      for (let j = 0; j < game.files.length; j++) {
        numberOfFilesTranslated++;
      }
    }
  }
</script>

<svelte:head>
  {#each $gameStore as game}
    {#if game.url == url}
      <title>{game.title} Files</title>
    {/if}
  {/each}
</svelte:head>

<header class="fixed top-0 inset-x-0 bg-black z-10">
  <nav>
    <ul class="flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16">
      {#each $gameStore as game}
        {#if game.url == url}
          {#each game.files as file}
            <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex">
              <a class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" href={`${game.url}${file.url}`}>
                {file.title}
              </a>
            </li>
          {/each}
        {/if}
      {/each}
    </ul>
  </nav>
</header>

{#each $gameStore as game}
  {#if game.url == url}
    <Breadcrumb game={game} />
  {/if}
{/each}

<main class="max-w-c mx-auto">
  <div class="text-c-gray-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
    Number of Files Translated => {numberOfFilesTranslated}
  </div>
</main>
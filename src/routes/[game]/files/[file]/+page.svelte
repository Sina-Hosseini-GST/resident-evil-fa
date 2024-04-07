<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
	import gameStore from '../../../../stores/gameStore.js';
  import Breadcrumb from '../../../components/Breadcrumb.svelte';

  $: url = $page.url.pathname;
  $: gameUrl = url.substring(url.indexOf('/'), url.lastIndexOf('/'));
  
  let mapViewIndex = 1;
  let mapViewArray;

  onMount(() => {
    mapViewArray = document.querySelectorAll('.map-view');
    if (mapViewArray.length) {
      showMapView(mapViewIndex);
    }
  });
  
  const showMapView = (index) => {
    mapViewIndex = index;

    if (mapViewIndex == - 1) {
      mapViewIndex = 2;
    }

    if (mapViewIndex == 3) {
      mapViewIndex = 0;
    }

    for (let i = 0; i < mapViewArray.length; i++) {
      mapViewArray[i].classList.add('hidden');
    }
    mapViewArray[mapViewIndex].classList.remove('hidden');
  }

  const changeMapView = (index) => {
    mapViewIndex += index;
    showMapView(mapViewIndex);
  }
</script>

<svelte:head>
  {#each $gameStore as game}
    {#each game.files as file}
      {#if `${game.url}${file.url}` == url}
       <title>{file.title}</title>
      {/if}
    {/each}
  {/each}
</svelte:head>

<header class="fixed top-0 inset-x-0 bg-black z-10">
  <nav>
    <ul class="flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16">
      {#each $gameStore as game}
        {#if game.url == gameUrl}
          {#each game.files as file}
            <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex">
              {#if `${game.url}${file.url}` == url}
                <a class="text-c-yellow font-bold transition-colors underline whitespace-nowrap flex items-center h-full" href={`${game.url}${file.url}`}>
                  {file.title}
                </a>
                {:else}
                  <a class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" href={`${game.url}${file.url}`}>
                    {file.title}
                  </a>
              {/if}
            </li>
          {/each}
        {/if}
      {/each}
    </ul>
  </nav>
</header>

{#each $gameStore as game}
  {#each game.files as file}
    {#if `${game.url}${file.url}` == url}
      <Breadcrumb game={game} file={file} />
    {/if}
  {/each}
{/each}

{#each $gameStore as game}
  {#each game.files as file}
    {#if `${game.url}${file.url}` == url}
    <main class="max-w-c mx-auto">
      <article class="flex flex-col gap-4 px-4 pt-4">
        <div class="flex flex-col gap-4 file-image">
          <div class="border-2 border-c-gray-4">
            <img src={file.src} alt={`${file.title} file image`} class="text-white text-center w-c-2 mx-auto">
            <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
             Credit Goes to <a target="_blank" href={file.src_source_link} class="underline hover:font-bold text-orange-400">{ file.src_source }</a>
            </div>
          </div>
          <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
            File Image
          </div>
        </div>
        {#if file.location}
        <div class="flex flex-col gap-4 locations">
          {#each file.location as location}
          <div class="flex flex-col gap-4 location">
            {#if location.src}
            <div class="border-2 border-c-gray-4">
              <img src={location.src} alt={`${file.title} in-game location`} class="text-white text-center w-full">
              {#if location.src_source}
              <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
                Credit Goes to <a target="_blank" href={location.src_source_link} class="underline hover:font-bold text-orange-400"> { location.src_source } </a>
              </div>
              {/if}
            </div>
            {/if}
            {#if location.map}
            <div class="border-2 border-c-gray-4">
              {#if typeof location.map == 'object'}
              <div class="relative">
                <button class="absolute left-0 inset-y-0 w-10 transition-opacity hover:opacity-60" on:click={ () => changeMapView(- 1)}>
                  <svg class="w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="7 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <img src={location.map.far} alt={`${file.title} far-view location on the map`} class="text-white text-center w-full hidden map-view">
                <img src={location.map.default} alt={`${file.title} location on the map`} class="text-white text-center w-full map-view">
                <img src={location.map.near} alt={`${file.title} near-view location on the map`} class="text-white text-center w-full hidden map-view">
                <button class="absolute right-0 inset-y-0 w-10 transition-opacity hover:opacity-60" on:click={ () => changeMapView(+ 1)}>
                  <svg class="w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="8 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
              {:else}
              <img src={location.map} alt={`${file.title} location on the map`} class="text-white text-center w-full">
              {/if}
              {#if location.map_source}
              <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
                Credit Goes to <a target="_blank" href={location.map_source_link} class="underline hover:font-bold text-orange-400"> { location.map_source } </a>
              </div>
              {/if}
            </div>
            {/if}
            <p class="text-center bg-white sticky bottom-0 text-black -mx-4">
              { location.txt }
            </p>
          </div>
          {/each}
        </div>
        {/if}
        <div class="flex flex-col gap-4 content">
          <div class="flex flex-col gap-4 text-white og-content">
            {#each file.og_content as og_content}
            <p style={`text-align: ${og_content.dir}`}>
              { og_content.para }
            </p>
            {/each}
            <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
              English Script
            </div>
          </div>
          <div class="flex flex-col gap-4 tr-content">
            <div class="flex flex-col gap-4 text-white c font-c-2 leading-c-2 text-c-2 c-2 tracking-c-2 fa-content">
              {#each file.fa_content as fa_content}
              <p style={`text-align: ${fa_content.dir}`}>
                { fa_content.para }
              </p>
              {/each}
              <div class="text-center bg-white sticky bottom-0 text-black [text-shadow:0_0_black] -mx-4">
                ترجمۀ فارسی
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
    {/if}
  {/each}
{/each}
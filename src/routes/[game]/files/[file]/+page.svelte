<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
	import gameStore from '../../../../stores/gameStore.js';
  import Breadcrumb from '../../../components/Breadcrumb.svelte';

  $: url = $page.url.pathname;
  $: gameUrl = url.substring(url.indexOf('/'), url.lastIndexOf('/'));
  
  let mapViewIndex;
  let mapViewArray;

  const showMapView = (index) => {
    mapViewIndex = index;

    if (mapViewIndex == - 1) {
      mapViewIndex = mapViewArray.length - 1;
    }

    if (mapViewIndex == mapViewArray.length) {
      mapViewIndex = 0;
    }

    for (let i = 0; i < mapViewArray.length; i++) {
      mapViewArray[i].classList.add('hidden');
    }
    mapViewArray[mapViewIndex].classList.remove('hidden');
  };

  const changeMapView = (index) => {
    mapViewIndex += index;
    showMapView(mapViewIndex);
  };

  onMount(() => {
    mapViewIndex = 1;
    mapViewArray = document.getElementsByClassName('map-view');
    if (mapViewArray.length) {
      showMapView(mapViewIndex);
    }
  });

  const reset = () => {
    mapViewIndex = 1;
    showMapView(mapViewIndex);
  };
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
              <a class="{(`${game.url}${file.url}` == url) ? 'text-c-yellow font-bold' : 'text-c-blue hover:text-c-yellow'} transition-colors underline whitespace-nowrap flex items-center h-full" href={`${game.url}${file.url}`} on:click={() => reset()}>
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
              <img src={file.fileImageUrl} alt={`${file.title} file image`} class="text-white text-center w-c-2 mx-auto">
              <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
                Credit Goes to <a target="_blank" href={file.fileImageSourceUrl} class="underline hover:font-bold text-orange-400">{file.fileImageSource}</a>
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
                  {#if location.locationImageUrl}
                    <div class="border-2 border-c-gray-4">
                      <img src={location.locationImageUrl} alt={`${file.title} in-game location`} class="text-white text-center w-full">
                      {#if location.locationImageSource}
                        <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
                          Credit Goes to <a target="_blank" href={location.locationImageSourceUrl} class="underline hover:font-bold text-orange-400"> {location.locationImageSource} </a>
                        </div>
                      {/if}
                    </div>
                  {/if}
                  {#if location.mapImageUrl}
                    <div class="border-2 border-c-gray-4">
                    {#if typeof location.mapImageUrl == 'object'}
                      <div class="relative">
                        <button class="absolute left-0 inset-y-0 w-10 transition-opacity hover:opacity-60" on:click={() => changeMapView(- 1)}>
                          <svg class="w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="7 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <img src={location.mapImageUrl.far} alt={`${file.title} far-view location on the map`} class="text-white text-center w-full hidden map-view">
                        <img src={location.mapImageUrl.default} alt={`${file.title} location on the map`} class="text-white text-center w-full map-view">
                        <img src={location.mapImageUrl.near} alt={`${file.title} near-view location on the map`} class="text-white text-center w-full hidden map-view">
                        <button class="absolute right-0 inset-y-0 w-10 transition-opacity hover:opacity-60" on:click={() => changeMapView(+ 1)}>
                          <svg class="w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="8 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                      </div>
                      {:else}
                        <img src={location.mapImageUrl} alt={`${file.title} location on the map`} class="text-white text-center w-full">
                    {/if}
                    {#if location.mapImageSource}
                      <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
                        Credit Goes to <a target="_blank" href={location.mapImageSourceUrl} class="underline hover:font-bold text-orange-400">{location.mapImageSource}</a>
                      </div>
                    {/if}
                    </div>
                  {/if}
                  <p class="text-center bg-white sticky bottom-0 text-black -mx-4">
                    {location.text}
                  </p>
                </div>
              {/each}
            </div>
          {/if}
          <div class="flex flex-col gap-4 content">
            <div class="flex flex-col gap-4 text-white og-content">
              {#each file.originalContent as content}
                <p style={`text-align: ${content.paragraphDirection}`}>
                  {content.paragraph}
                </p>
              {/each}
              <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
                English Script
              </div>
            </div>
            <div class="flex flex-col gap-4 tr-content">
              <div class="flex flex-col gap-4 text-white c font-c-2 leading-c-2 text-c-2 c-2 tracking-c-2 fa-content">
                {#each file.farsiContent as content}
                  <p style={`text-align: ${content.paragraphDirection}`}>
                    {content.paragraph}
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
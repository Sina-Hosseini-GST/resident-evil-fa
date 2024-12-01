<script>
  let { items, searchedItems, type } = $props()
  import { page } from '$app/stores'
  let value = $state('')
  let options = { loop: true }
  let slides = []
  let searchedSlides = []

	$effect(() => {
		if (value) {
			searchedItems = items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
		}
	})
</script>

<div class="flex flex-col gap-3 xs:gap-2 md:hidden sm:gap-3">
  <input type="search" class="text-black bg-gray-200 placeholder:text-gray-700 sm:h-9 h-8 sm:pl-3 pl-2 sm:pr-[2.625rem] pr-8 focus:outline-none rounded-sm" placeholder="Search..." bind:value={value}>
  <div class="flex flex-col flex-wrap items-center w-full gap-3 xs:gap-2 xs:flex-row xs:justify-center sm:gap-3">
    {#if value}
      {#each searchedItems as item, index}
        <a class="flex flex-col w-full gap-2 xs:p-2 p-3 text-center border border-gray-800 rounded-sm aspect-square sm:gap-3 sm:p-3 bg-stone-700 hover:bg-stone-600 transition-colors sm:w-[calc(50%-.375rem)] xs:w-[calc(50%-.25rem)]" href={type === 'game' ? `${item.url}` : `/games/${$page.params.game}/files${item.url}`} bind:this={searchedSlides[index]}>
          <div class="flex-1 bg-center bg-cover border border-gray-500" style="background-image: url({type === 'game' ? item.gameImageUrl : item.fileImageUrl});"></div>
          <div>
            {item.title}
          </div>
          {#if type === 'game'}
            <div>
              ({item.releaseDate})
            </div>
          {/if}
        </a>
      {/each}
      {:else}
        {#each items as item, index}
          <a class="flex flex-col w-full gap-2 xs:p-2 p-3 text-center border border-gray-800 rounded-sm aspect-square sm:gap-3 sm:p-3 bg-stone-700 hover:bg-stone-600 transition-colors sm:w-[calc(50%-.375rem)] xs:w-[calc(50%-.25rem)]" href={type === 'game' ? `${item.url}` : `/games/${$page.params.game}/files${item.url}`} bind:this={slides[index]}>
            <div class="flex-1 bg-center bg-cover border border-gray-500" style="background-image: url({type === 'game' ? item.gameImageUrl : item.fileImageUrl});"></div>
            <div>
              {item.title}
            </div>
            {#if type === 'game'}
              <div>
                ({item.releaseDate})
              </div>
            {/if}
          </a>
        {/each}
    {/if}
  </div>
</div>

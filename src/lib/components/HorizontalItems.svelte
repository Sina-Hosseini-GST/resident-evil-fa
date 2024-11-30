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

<div class="flex flex-col md:hidden gap-3.5">
  <input type="search" class="text-black bg-gray-200 placeholder:text-gray-700 sm:h-10 h-8 px-2.5 focus:outline-none" placeholder="Search..." bind:value={value}>
  <div class="flex flex-col items-center w-full gap-3.5">
    {#if value}
      {#each searchedItems as item, index}
        <a class="flex flex-col w-full max-w-96 text-center aspect-square gap-3 p-3.5 bg-stone-900 transition-colors border border-gray-800" href={type === 'game' ? `${item.url}` : `/games/${$page.params.game}/files${item.url}`} bind:this={searchedSlides[index]}>
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
          <a class="flex flex-col w-full max-w-96 text-center aspect-square gap-3 p-3.5 bg-stone-900 transition-colors border border-gray-800" href={type === 'game' ? `${item.url}` : `/games/${$page.params.game}/files${item.url}`} bind:this={slides[index]}>
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

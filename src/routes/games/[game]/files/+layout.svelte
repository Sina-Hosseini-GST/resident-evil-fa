<script>
  import VerticalCarousel from '$lib/components/VerticalCarousel.svelte'
  import { fade } from 'svelte/transition'
	import gameStore from '../../../../stores/gameStore'
	let { children } = $props()
  import { page } from '$app/stores'

	let files = $derived(
    $gameStore.find(game => game.url === `/games/${$page.params.game}/files`).files
  )
  // svelte-ignore state_referenced_locally
  let searchedFiles = $state(files)
</script>

<svelte:head>
  {#each $gameStore as game}
    {#if game.url === `/games/${$page.params.game}/files`}
      <title>{game.shortTitle} Files</title>
    {/if}
  {/each}
</svelte:head>

{@render children()}
<VerticalCarousel items={files} searchedItems={searchedFiles} type='file' />

<script>
  import gameStore from '../../stores/gameStore'
  import HorizontalItems from '$lib/components/HorizontalItems.svelte'
  import { fade } from 'svelte/transition'
</script>

<div class="xl:w-64 lg:w-56 md:w-40 xl:h-[calc(100svh-calc(7rem+1px))] lg:h-[calc(100svh-calc(6rem+1px))] md:h-[calc(100svh-calc(5.5rem+1px))] md:flex hidden items-center justify-center border-4 border-white border-dashed text-center xl:text-base text-sm" in:fade={{ duration: 300, delay: 300 }}>
  <div class="flex flex-col items-center font-mono xl:leading-10 lg:leading-8 md:leading-7">
    <div>
      Select a game
    </div>
    <div>
      to display its files!
    </div>
  </div>
</div>

<HorizontalItems items={$gameStore} searchedItems={$gameStore} type='game' />

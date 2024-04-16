<script>
	import gameStore from '../stores/gameStore.js';
  import Breadcrumb from './components/Breadcrumb.svelte';
  import Log from './components/Log.svelte';

  let numberOfFilesTranslated = 0;

  for (let i = 0; i < $gameStore.length; i++) {
    const game = $gameStore[i];
    for (let j = 0; j < game.files.length; j++) {
      const file = game.files[j];
      numberOfFilesTranslated++;
    }
  }
</script>

<svelte:head>
  <title>REdocs</title>
</svelte:head>

<header class="fixed top-0 inset-x-0 bg-black z-10">
  <nav>
    <ul class="flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16">
      {#each $gameStore as game}
        <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex">
          <a class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" title={game.title} href={game.url}>
            {game.shortTitle}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<Breadcrumb />

<main class="max-w-c mx-auto">
  <section class="p-4">
    <p class="text-justify text-pink-100">
      Hi, I'm <a class="underline underline-offset-2 hover:font-bold text-white" href="mailto:sina.hosseini.gst@gmail.com">Sina</a>, and this is my independent project, to translate the whole in-game documents of each <span class="italic">Resident Evil</span> into Persian! Go select your desired title and explore the story!
    </p>
    <div class="my-8">
      <img class="w-2/5 min-w-c-2 mx-auto" src="./img/logo/logo.png" alt="Logo">
    </div>
    <p class="text-justify text-red-100 italic">
      This website is constantly being updated, and this means that every time you enter REdocs, you're likely to see more CONTENT! So, stay tuned!
    </p>
    <details class="my-2 py-2 text-white border-y-8 border-double border-c-gray-8">
      <summary class="text-c-blue-3 text-center font-bold cursor-pointer">
        UPDATE LOG
      </summary>
      <ul>
        <Log text='All Main Files' action='Translated' game='RE1' date='Jul 15, 2023' />
        <Log text='All Main Files' action='Translated' game='RE2' date='Jul 15, 2023' />
        <Log text='All Main Files' action='Translated' game='RE3N' date='Aug 27, 2023' />
        <Log text='Translation' action='Started' game='RE4' date='Dec 6, 2023' />
        <Log text='Info on Ashley' action='Translated' game='RE4' date='Dec 6, 2023' />
        <Log text='Info on Ashley' action='Proofread' game='RE4' date='Dec 7, 2023' />
        <Log text='Info on Ashley' action='Proofread' game='RE4' date='Dec 10, 2023' />
        <Log text='Alert Order' action='Translated' game='RE4' date='Dec 10, 2023' />
        <Log text='About the Blue Medallions' action='Translated' game='RE4' date='Jan 4, 2024' />
        <Log text="Chief's Note" action='Translated' game='RE4' date='Jan 4, 2024' />
        <Log text='Alert Order' action='Proofread' game='RE4' date='Jan 7, 2024' />
        <Log text="Chief's Note" action='Proofread' game='RE4' date='Jan 7, 2024' />
        <Log text='Closure of the Church' action='Translated' game='RE4' date='Jan 7, 2024' />
        <Log text='Closure of the Church' action='Proofread' game='RE4' date='Jan 29, 2024' />
        <Log text='Anonymous Letter' action='Translated' game='RE4' date='Jan 29, 2024' />
        <Log text='Closure of the Church' action='Proofread' game='RE4' date='Fed 25, 2024' />
        <Log text='Sera and the 3rd Party' action='Translated' game='RE4' date='Fed 25, 2024' />
        <Log text='Two Routes' action='Translated' game='RE4' date='Fed 25, 2024' />
        <Log text='Two Routes' action='Proofread' game='RE4' date='Mar 4, 2024' />
        <Log text='Security Manual' action='Proofread' game='RE3' date='Mar 4, 2024' />
        <Log text="Village's Last Defense" action='Translated' game='RE4' date='Mar 4, 2024' />
        <Log text="Capture Luis Sera" action='Translated' game='RE4' date='Mar 9, 2024' />
        <Log text="Capture Luis Sera" action='Proofread' game='RE4' date='Apr 8, 2024' />
        <Log text="Village's Last Defense" action='Proofread' game='RE4' date='Apr 8, 2024' />
        <Log text="Two Routes" action='Proofread' game='RE4' date='Apr 8, 2024' />
        <Log text='Sera and the 3rd Party' action='Proofread' game='RE4' date='Apr 8, 2024' />
        <Log text='About the Blue Medallions' action='Proofread' game='RE4' date='Apr 8, 2024' />
        <Log text='Alert Order' action='Proofread' game='RE4' date='Apr 8, 2024' />
        <Log text='Target Practice' action='Translated' game='RE4' date='Apr 9, 2024' />
        <Log text="Luis' Memo" action='Translated' game='RE4' date='Apr 16, 2024' />
        <Log text='"V-JOLT" Report' action='Proofread' game='RE1' date='Apr 16, 2024' />
        <li>
          Number of Files Translated => {numberOfFilesTranslated}
        </li>
      </ul>
    </details>
    <p class="text-justify text-orange-300 uppercase">
      Many thanks to <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://www.evilresource.com/">Evil Resource</a>, and <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://residentevil.fandom.com/wiki/Resident_Evil_Wiki">Resident Evil Wiki</a>, for helping me shape the project!
    </p>
  </section>
</main>
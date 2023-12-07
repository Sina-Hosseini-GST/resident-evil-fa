<template>
  <div class="z-10 flex gap-2 items-center flex-nowrap overflow-x-auto bg-black h-12 px-6 fixed top-16 inset-x-0 overflow-y-hidden border-y border-c-gray-6">
    <a href="/" class="text-c-red whitespace-nowrap hover:font-bold">REDOCS</a>
    <span class="min-w-c h-5 flex">
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
      </span>
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
      </span>
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
      </span>
    </span>
    <span>
      <span v-if="game.title" class="text-c-red">{{ game.title }}</span>
      <i v-else class="text-c-green whitespace-nowrap first-letter:font-bold underline underline-offset-4 decoration-dashed">SELECT A GAME</i>
    </span>
    <span v-if="game.title" class="min-w-c h-5 flex">
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
      </span>
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
      </span>
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
      </span>
    </span>
    <span v-if="game.title" class="text-c-red">FILES</span>
    <span v-if="game.title" class="min-w-c h-5 flex">
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
      </span>
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
      </span>
      <span class="w-1/3 flex flex-col">
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5 bg-c-red"></span>
        <span class="w-full h-1/5"></span>
        <span class="w-full h-1/5"></span>
      </span>
    </span>
    <span v-if="game.title" class="text-c-green whitespace-nowrap first-letter:font-bold underline underline-offset-4 decoration-dashed">
      <i v-if="file.title">{{ file.title }}</i>
      <i v-else>SELECT A FILE</i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['game', 'file']
}
</script>
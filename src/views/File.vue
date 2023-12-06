<template>
  <article class="flex flex-col gap-4 px-4 pt-4">
    <div class="flex flex-col gap-4 file-image">
      <div class="border-2 border-c-gray-4">
        <img :src="file.src" :alt="`${file.title} file image`" class="text-white text-center w-c-2 mx-auto">
        <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
          Credit Goes to <a target="_blank" :href="file.src_source_link" class="underline hover:font-bold text-orange-400"> {{ file.src_source }} </a>
        </div>
      </div>
      <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
        File Image
      </div>
    </div>
    <div class="flex flex-col gap-4 locations" v-if="file.location">
      <div class="flex flex-col gap-4 location" v-for="location in file.location" :key="location">
        <div v-if="location.src" class="border-2 border-c-gray-4">
          <img :src="location.src" :alt="`${file.title} in-game location`" class="text-white text-center w-full border-b border-c-gray-4">
          <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto">
            Credit Goes to <a target="_blank" :href="location.src_source_link" class="underline hover:font-bold text-orange-400"> {{ location.src_source }} </a>
          </div>
        </div>
        <div v-if="location.map" class="border-2 border-c-gray-4">
          <img :src="location.map" :alt="`${file.title} location on the map`" class="text-white text-center w-full border-b border-c-gray-4">
          <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto">
            Credit Goes to <a target="_blank" :href="location.map_source_link" class="underline hover:font-bold text-orange-400"> {{ location.map_source }} </a>
          </div>
        </div>
        <p class="text-center bg-white sticky bottom-0 text-black -mx-4">
          {{ location.txt }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-4 content">
      <div class="flex flex-col gap-4 text-white og-content">
        <p v-for="og_content in file.og_content" :key="og_content" :style="{ 'text-align': og_content.dir }">
          {{ og_content.para }}
        </p>
        <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
          English Localization
        </div>
      </div>
      <div class="flex flex-col gap-4 tr-content">
        <div class="flex flex-col gap-4 text-white c font-c-2 leading-c-2 text-c-2 c-2 tracking-c-2 fa-content">
          <p v-for="tr_content in file.fa_content" :key="tr_content" :style="{ 'text-align': tr_content.dir }">
            {{ tr_content.para }}
          </p>
          <div class="text-center bg-white sticky bottom-0 text-black [text-shadow:0_0_black] -mx-4">
            ترجمه‌ی فارسی
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['file'],
  methods: {
    setRoute(){
      for(let i=0; i<this.$store.state.games.length; i++){
        if(this.$store.state.games[i].url == this.$route.params.gameUrl){
          this.$store.state.isGameSelected = true
          this.$store.state.game = this.$store.state.games[i]
          document.title = `${this.$store.state.game.title} Files`
          this.$store.state.files = this.$store.state.games[i].files
        }
      }
      for(let i=0; i<this.$store.state.files.length; i++){
        if(this.$store.state.files[i].url == this.$route.params.fileUrl){
          this.$store.state.file = this.$store.state.files[i]
          document.title = this.$store.state.file.title
        }
      }
    }
  },
  mounted(){
    this.setRoute()
    window.addEventListener('popstate', () => {
      this.setRoute()
    })
  }
}
</script>
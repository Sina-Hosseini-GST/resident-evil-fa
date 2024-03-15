<template>
  <header class="fixed top-0 inset-x-0 bg-black z-10">
    <nav>
      <ul class="flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16">
        <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex" v-for="file in files" :key="file.id">
          <router-link class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" :to="{ name: 'file', params: { gameUrl: this.$store.state.game.url, fileUrl: file.url } }" @click="setFile(file)">
            {{ file.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <Breadcrumb :game="this.$store.state.game" :file="this.$store.state.file" />
  <main class="max-w-c mx-auto">
    <div class="text-c-gray-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" v-if="!this.$store.state.isFileSelected">
      <div class="whitespace-nowrap">
        Number of Files Translated => {{ this.$store.state.files.length }}
      </div>
    </div>
    <article class="flex flex-col gap-4 px-4 pt-4" v-if="this.$store.state.isFileSelected">
      <div class="flex flex-col gap-4 file-image">
        <div class="border-2 border-c-gray-4">
          <img :src="this.$store.state.file.src" :alt="`${this.$store.state.file.title} file image`" class="text-white text-center w-c-2 mx-auto">
          <div class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
           Credit Goes to <a target="_blank" :href="this.$store.state.file.src_source_link" class="underline hover:font-bold text-orange-400">{{ this.$store.state.file.src_source }}</a>
          </div>
        </div>
        <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
          File Image
        </div>
      </div>
      <div class="flex flex-col gap-4 locations" v-if="this.$store.state.file.location">
        <div class="flex flex-col gap-4 location" v-for="location in this.$store.state.file.location" :key="location">
          <div v-if="location.src" class="border-2 border-c-gray-4">
            <img :src="location.src" :alt="`${this.$store.state.file.title} in-game location`" class="text-white text-center w-full">
            <div v-if="location.src_source" class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
              Credit Goes to <a target="_blank" :href="location.src_source_link" class="underline hover:font-bold text-orange-400"> {{ location.src_source }} </a>
            </div>
          </div>
          <div v-if="location.map" class="border-2 border-c-gray-4">
            <div v-if="typeof location.map == 'object'" class="relative">
              <button class="absolute left-0 inset-y-0 w-10 transition-opacity hover:opacity-60" @click="changeMapView(- 1)">
                <svg class="w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="7 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <img :src="location.map.far" :alt="`${this.$store.state.file.title} far-view location on the map`" class="text-white text-center w-full hidden map-view">
              <img :src="location.map.default" :alt="`${this.$store.state.file.title} location on the map`" class="text-white text-center w-full map-view">
              <img :src="location.map.near" :alt="`${this.$store.state.file.title} near-view location on the map`" class="text-white text-center w-full hidden map-view">
              <button class="absolute right-0 inset-y-0 w-10 transition-opacity hover:opacity-60" @click="changeMapView(+ 1)">
                <svg class="w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="8 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
            <img v-else :src="location.map" :alt="`${this.$store.state.file.title} location on the map`" class="text-white text-center w-full">
            <div v-if="location.map_source" class="text-yellow-200 text-center whitespace-nowrap overflow-auto border-t border-c-gray-4">
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
          <p v-for="og_content in this.$store.state.file.og_content" :key="og_content" :style="{ 'text-align': og_content.dir }">
            {{ og_content.para }}
          </p>
          <div class="text-center bg-white sticky bottom-0 text-black -mx-4">
            English Script
          </div>
        </div>
        <div class="flex flex-col gap-4 tr-content">
          <div class="flex flex-col gap-4 text-white c font-c-2 leading-c-2 text-c-2 c-2 tracking-c-2 fa-content">
            <p v-for="tr_content in this.$store.state.file.fa_content" :key="tr_content" :style="{ 'text-align': tr_content.dir }">
              {{ tr_content.para }}
            </p>
            <div class="text-center bg-white sticky bottom-0 text-black [text-shadow:0_0_black] -mx-4">
              ترجمۀ فارسی
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
export default{
  data(){
    return{
      mapViewIndex: 1,
      mapViewArray: document.getElementsByClassName('map-view')
    }
  },
  components: {
    Breadcrumb
  },
  props: ['game', 'files'],
  methods: {
    setFile(file) {
      this.mapViewIndex = 1
      this.$store.state.file = file
      document.title = file.title
      this.$store.state.isFileSelected = true
    },
    setRoute() {
      for(let i=0; i<this.$store.state.games.length; i++){
        if(this.$store.state.games[i].url == this.$route.params.gameUrl){
          this.$store.state.isGameSelected = true
          this.$store.state.game = this.$store.state.games[i]
          document.title = `${this.$store.state.game.title} Files`
          this.$store.state.files = this.$store.state.games[i].files
          this.$store.state.isFileSelected = false
          this.$store.state.file = {}
        }
      }
      for(let i=0; i<this.$store.state.files.length; i++){
        if(this.$store.state.files[i].url == this.$route.params.fileUrl){
          this.$store.state.file = this.$store.state.files[i]
          document.title = this.$store.state.file.title
          this.$store.state.isFileSelected = true
        }
      }
    },
    changeMapView(n) {
      this.mapViewIndex += n
      this.showMapView(this.mapViewIndex)
    },
    showMapView(n) {
      this.mapViewIndex = n
      if (this.mapViewIndex == - 1) {
        this.mapViewIndex = 2
      }
      if (this.mapViewIndex == 3) {
        this.mapViewIndex = 0
      }
      for (let i = 0; i < this.mapViewArray.length; i++) {
        this.mapViewArray[i].classList.add('hidden')
      }
      this.mapViewArray[this.mapViewIndex].classList.remove('hidden')
    }
  },
  mounted() {
    this.setRoute()
    window.addEventListener('popstate', () => {
      this.setRoute()
    })
  }
}
</script>
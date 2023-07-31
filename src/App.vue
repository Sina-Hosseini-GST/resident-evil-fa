<template>
  <header class="fixed top-0 inset-x-0 bg-black z-10">
    <nav>
      <ul class="flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16">
        <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white" v-for="game in this.$store.state.games" :key="game.id" :class="{ 'flex': !this.$store.state.isGameSelected, 'hidden': this.$store.state.isGameSelected }">
          <router-link class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" :to="{ name: 'app', params: { gameUrl: game.url } }" @click="setGame(game)">
            {{ game.title }}
          </router-link>
        </li>
        <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white" v-for="file in this.$store.state.files" :key="file.id" :class="{ 'hidden': !this.$store.state.isGameSelected, 'flex': this.$store.state.isGameSelected }">
          <router-link class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" :to="{ name: 'file', params: { gameUrl: this.$store.state.game.url, fileUrl: file.url } }" @click="setFile(file)">
            {{ file.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <Breadcrumb :file="this.$store.state.file" :game="this.$store.state.game" />
  <main class="max-w-c mx-auto">
    <section v-if="!this.$store.state.isGameSelected" class="p-4">
      <p class="text-justify text-pink-100">
        Hi, I'm <a class="underline underline-offset-2 hover:font-bold text-white" href="mailto:sina.hosseini.gst@gmail.com">Sina</a>, and this is my independent project, to translate the whole in-game documents of each <span class="italic">Resident Evil</span> into Persian! Go select your desired title and explore the story!
      </p>
      <div class="text-c-red-2 font-bold leading-c-3 flex flex-col items-center mt-8 mb-12">
        <div class="flex gap-2">
          <span class="w-2"> </span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2"> </span>
        </div>
        <div class="flex gap-2">
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2"> </span>
          <span class="w-2">\</span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">|</span>
        </div>
        <div class="flex gap-2">
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2">|</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">)</span>
          <span class="w-2"> </span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2">|</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
        </div>
        <div class="flex gap-2">
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">_</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">/</span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
        </div>
        <div class="flex gap-2">
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2">\</span>
          <span class="w-2"> </span>
          <span class="w-2">\</span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2">|</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2"> </span>
        </div>
        <div class="flex gap-2">
          <span class="w-2">|</span>
          <span class="w-2">_</span>
          <span class="w-2">|</span>
          <span class="w-2"> </span>
          <span class="w-2"> </span>
          <span class="w-2">\</span>
          <span class="w-2">_</span>
          <span class="w-2">\</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">_</span>
          <span class="w-2">|</span>
        </div>
      </div>
      <p class="text-justify text-red-100 italic">
        This website is constantly being updated, and this means that every time you enter, you're likely to see more CONTENT! So, stay tuned!
      </p>
      <p class="my-2 py-2 text-white border-y-8 border-double border-c-gray-8">
        <span class="text-c-blue-3">UPDATE</span>: <span class="text-c-blue-2">Reporter's Memo</span> <span class="text-red-500">Added</span> - <span class="text-purple-600">RE3N</span>
        <br>
        <span class="text-c-blue-3">UPDATE</span>: <span class="text-c-blue-2">City Guide</span> <span class="text-red-500">Edited</span> - <span class="text-purple-600">RE3N</span>
      </p>
      <p class="text-justify text-orange-300 uppercase">
        Many thanks to <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://www.evilresource.com/">Evil Resource</a>, and <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://residentevil.fandom.com/wiki/Resident_Evil_Wiki">Resident Evil Wiki</a>, for helping me shape the project!
      </p>
    </section>
    <router-view :file="this.$store.state.file"></router-view>
  </main>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'
export default {
  components: {
    Breadcrumb,
  },
  methods: {
    setGame(game){
      this.$store.state.isGameSelected= true
      this.$store.state.game= game
      this.$store.state.files= game.files
    },
    setFile(file){
      this.$store.state.file= file
    },
    setRoute(){
      for(let i=0; i<this.$store.state.games.length; i++){
        if(this.$store.state.games[i].url == this.$route.params.gameUrl){
          this.$store.state.isGameSelected= true
          this.$store.state.game= this.$store.state.games[i]
          this.$store.state.files= this.$store.state.games[i].files
          this.$store.state.file= {}
        }
      }
      if(this.$route.fullPath == '/'){
        this.$store.state.isGameSelected= false
        this.$store.state.game= {}
        this.$store.state.files= []
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
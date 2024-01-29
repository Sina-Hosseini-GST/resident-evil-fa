<template>
  <template v-if="!this.$store.state.isGameSelected">
    <header class="fixed top-0 inset-x-0 bg-black z-10">
      <nav>
        <ul class="flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16">
          <li class="h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex" v-for="game in this.$store.state.games" :key="game.id">
            <router-link class="text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full" :to="{ name: 'game', params: { gameUrl: game.url } }" @click="setGame(game)" :title="game.name">
              {{ game.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <Breadcrumb :game="this.$store.state.game" :file="this.$store.state.file" />
    <main class="max-w-c mx-auto">
      <section class="p-4">
        <p class="text-justify text-pink-100">
          Hi, I'm <a class="underline underline-offset-2 hover:font-bold text-white" href="mailto:sina.hosseini.gst@gmail.com">Sina</a>, and this is my independent project, to translate the whole in-game documents of each <span class="italic">Resident Evil</span> into Persian! Go select your desired title and explore the story!
        </p>
        <div class="my-8">
          <img class="w-2/5 min-w-c-2 mx-auto" src="./assets/img/logo/logo.png" alt="Logo image">
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
            <li>
              Number of Files Translated => {{ numberOfFilesTranslated }}
            </li>
          </ul>
        </details>
        <p class="text-justify text-orange-300 uppercase">
          Many thanks to <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://www.evilresource.com/">Evil Resource</a>, and <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://residentevil.fandom.com/wiki/Resident_Evil_Wiki">Resident Evil Wiki</a>, for helping me shape the project!
        </p>
      </section>
    </main>
  </template>
  <router-view :game="this.$store.state.game" :files="this.$store.state.files"></router-view>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'
import Log from './components/Log.vue'
export default{
  data(){
    return{
      numberOfFilesTranslated: 0
    }
  },
  components:{
    Breadcrumb,
    Log
  },
  methods:{
    setGame(game){
      this.$store.state.isGameSelected= true
      this.$store.state.game = game
      this.$store.state.files = game.files
      document.title = `${game.title} Files`
      this.$store.state.isFileSelected= false
      this.$store.state.file = {}
    },
    setRoute(){
      for(let i=0; i<this.$store.state.games.length; i++){
        if(this.$store.state.games[i].url == this.$route.params.gameUrl){
          this.$store.state.isGameSelected = true
          this.$store.state.game = this.$store.state.games[i]
          document.title = `${this.$store.state.game.title} Files`
          this.$store.state.files = this.$store.state.games[i].files
          this.$store.state.isFileSelected= false
          this.$store.state.file = {}
        }
      }
      if(this.$route.fullPath == '/'){
        this.$store.state.isGameSelected = false
        this.$store.state.game = {}
        this.$store.state.files = []
        this.$store.state.isFileSelected= false
        document.title = 'REdocs'
      }
    }
  },
  mounted(){
    for(let i=0; i<this.$store.state.games.length; i++){
      const game = this.$store.state.games[i]
      this.numberOfFilesTranslated += game.files.length
    }
    this.setRoute()
    window.addEventListener('popstate', () => {
      this.setRoute()
    })
  }
}
</script>
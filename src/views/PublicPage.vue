<template>
  <div>
    <evento-quinceanero
      v-if="currentComponent"
      :is="currentComponent"
      :event="event"
      :modal="modal"
      :info="info"
      :photo="photo"
      @loaded="handleChildLoaded"
      :start-animations="!loader"
    ></evento-quinceanero>
  </div>
</template>

<script>
import CumpleanosMujer from '@/views/cumpleanos_mujer_2.vue'
import CumpleanosHombre from '@/views/cumpleanos_hombre_2.vue'
import EventoReligioso from '@/views/evento_religioso_1.vue'
import EventoNavideno from '@/views/evento_navideno_2.vue'
import EventoMatrimonio from '@/views/evento_matrimonio_2.vue'
import EventoQuinceanero from '@/views/evento_quinceanero_2.vue'
import _ from 'lodash'
import eventData from '@/utils/evento_quinceanero.json'
export default {
  components: {
    'cumpleanos-mujer': CumpleanosMujer,
    'cumpleanos-hombre': CumpleanosHombre,
    'evento-religioso': EventoReligioso,
    'evento-navideno': EventoNavideno,
    'evento-matrimonio': EventoMatrimonio,
    'evento-quinceanero': EventoQuinceanero
  },
  data() {
    return {
      event: null,
      loader: true,
      currentComponent: null,
      modalactive: false,
      fontsLoaded: false,
      photo: null,
      info: null,
      modal: {
        active: false,
        name: null,
        size: 'lg'
      }
    }
  },
  async mounted() {
    await this.getdata()
    this.$watch('$route.params', this.watchRouteParams)
    // this.waitForFonts();
  },
  methods: {
    watchRouteParams(toParams) {
      this.extractRouteParams()
    },
    async extractRouteParams() {
      if (this.event) {
        const { photoid, infoid } = this.$route.params
        if (infoid) {
          const selectedInfo = this.event.info.find((info) => info.id == infoid)
          if (selectedInfo) {
            this.info = selectedInfo
            this.info.detail = this.info.detail.replace(/\n/g, '<br>')
            this.modal.name = 'info'
            this.modal.size = 'md'
            this.activemodal()
            this.scrollToImage('info_' + infoid)
            // this.storeview(this.info.id)
          }
        } else if (photoid) {
          const selectedPhoto = this.event.files.find((file) => file.id == photoid)
          if (selectedPhoto) {
            this.photo = selectedPhoto
            this.modal.name = 'photo'
            this.modal.size = 'lg'
            this.activemodal()
            this.scrollToImage('photo_' + photoid)
            // this.storeview(this.photo.id)
          }
        } else {
          await this.closemodal()
          // this.photo = null
          // this.info = null
        }
      }
    },
    async getdata() {
      try {
        this.currentComponent = this.$route.params.name
        console.log(this.currentComponent)
        this.event = eventData.event
        if (this.event) {
          this.event.files = this.event.files.slice().sort((a, b) => a.order - b.order)
          this.event.info = this.event.info.slice().sort((a, b) => a.order - b.order)
          this.currentComponent = eventData.event.template.name
          this.storeview(this.event.id)
        } else {
          this.$router.push({
            name: 'Home'
          })
        }
      } catch (error) {
        console.error('Error searching event:', error)
      }
    },
    scrollToImage(section) {
      if (section) {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          })
        }
      }
    },
    handleChildLoaded() {
      // if (this.fontsLoaded) {
      this.loader = false
      setTimeout(() => {
        this.extractRouteParams()
      }, 300)
      // }
    },
    waitForFonts() {
      if (document.fonts) {
        document.fonts.ready
          .then(() => {
            this.fontsLoaded = true
            if (this.currentComponent) {
              this.loader = false
            }
          })
          .catch((error) => {
            console.error('Error loading fonts:', error)
          })
      } else {
        // Si `document.fonts` no es soportado, asumir que las fuentes están cargadas
        this.fontsLoaded = true
      }
    },
    getscreenwidth() {
      this.position = 'top-end'
      const screenWidth = window.screen.width
      if (screenWidth < 768) {
        this.position = 'top'
      }
    },
    activemodal() {
      this.modal.active = true
      setTimeout(() => {
        const modalop = document.getElementById('modal')
        modalop.classList.toggle('active')
      }, 20)
    },
    async closemodal() {
      const modalop = document.getElementById('modal')
      if (modalop) {
        modalop.classList.remove('active')
        setTimeout(() => {
          this.modal.active = false
        }, 300)
      }
    },
    actionmodal(status) {
      this.modal.active = status
    },
    storeview: _.throttle(function () {}, 3000)
  }
  // watch: {
  //   $route(to) {
  //     console.log(to.name)
  //     if (to.name === 'EventModal') {
  //       this.activemodal()
  //     } else {
  //       this.closemodal()
  //     }
  //   }
  // }
}
</script>
<style scoped></style>

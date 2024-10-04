<template>
    <div>
        <evento-matrimonio
            v-if="currentComponent"
            :is="currentComponent"
            :event="event"
            :modalactive="modalactive"
            @actionmodal="actionmodal"
            @loaded="handleChildLoaded"
        ></evento-matrimonio>
    </div>
</template>

<script>
import CumpleanosMujer from '@/views/cumpleanos_mujer_2.vue'
import CumpleanosHombre from '@/views/cumpleanos_hombre_2.vue'
import EventoReligioso from '@/views/evento_religioso_1.vue'
import EventoNavideno from '@/views/evento_navideno_2.vue'
import EventoMatrimonio from '@/views/evento_matrimonio_2.vue'
import _ from 'lodash'
import eventData from '@/utils/evento_matrimonio.json'
export default {
    components: {
        'cumpleanos-mujer': CumpleanosMujer,
        'cumpleanos-hombre': CumpleanosHombre,
        'evento-religioso': EventoReligioso,
        'evento-navideno': EventoNavideno,
        'evento-matrimonio': EventoMatrimonio
    },
    data() {
        return {
            event: null,
            loader: true,
            currentComponent: 'cumpleanos-hombre',
            modalactive: false,
            fontsLoaded: false
        }
    },
    mounted() {
        this.getdata()
        if (this.$route.name === 'EventModal') {
            this.$router.push({ name: 'EventPublic', params: { name: this.$route.params.name } })
        }
        this.waitForFonts()
    },
    methods: {
        async getdata() {
            try {
                this.currentComponent = this.$route.params.name
                console.log(this.currentComponent)
                this.event = eventData.event
                this.event.files = this.event.files.slice().sort((a, b) => a.order - b.order)
                this.event.info = this.event.info.slice().sort((a, b) => a.order - b.order)
                if (this.event) {
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
        handleChildLoaded() {
            if (this.fontsLoaded) {
                this.loader = false
            }
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
            this.modalactive = true
            const modalop = document.getElementById('modal')
            setTimeout(() => {
                modalop.classList.toggle('active')
            }, 20)
        },
        closemodal() {
            const modalop = document.getElementById('modal')
            if (modalop) {
                modalop.classList.remove('active')
                setTimeout(() => {
                    this.modalactive = false
                }, 300)
            }
        },
        actionmodal(status) {
            this.modalactive = status
        },
        storeview: _.throttle(function () {}, 3000)
    },
    watch: {
        $route(to) {
            console.log(to.name)
            if (to.name === 'EventModal') {
                this.activemodal()
            } else {
                this.closemodal()
            }
        }
    }
}
</script>
<style scoped></style>

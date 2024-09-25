<template>
    <div class="invite" v-if="event">
        <img class="invite__cross-img" src="/img/event/evento_religioso_1/cruz.svg" alt="Cruz" />

        <section class="invite__header">
            <div class="invite__text-wrap">
                <h1 class="invite__text-header">{{ event.name }}</h1>
            </div>
            <div class="invite__event-details">
                <div class="invite__delete"></div>
                <div class="invite__event-details-wrap">
                    <p class="invite__date">{{ event.subtitle }}</p>
                </div>
                <lottie
                    class="invite__image--main"
                    src="/img/event/evento_religioso_1/main.json"
                    alt="Celebración"
                ></lottie>
                <img
                    class="invite__branch-img invite__branch-img--left"
                    src="/img/event/evento_religioso_1/branch-left.svg"
                    alt="Rama Izquierda"
                />
                <img
                    class="invite__branch-img invite__branch-img--right"
                    src="/img/event/evento_religioso_1/branch-right.svg"
                    alt="Rama Derecha"
                />
            </div>
        </section>

        <section class="invite__profile">
            <h2 class="invite__subtitle">{{ event.customSectionsData.presentacion }}</h2>
            <div class="invite__profile-content">
                <img
                    class="invite__profile-img"
                    v-if="event.profile_photo"
                    :src="event.profileaws"
                    alt="Perfil"
                />
                <p class="invite__profile-text" v-html="event.description"></p>
            </div>
        </section>

        <section class="invite__countdown">
            <img
                class="invite__circle-img"
                src="/img/event/evento_religioso_1/circle.svg"
                alt="Círculo"
            />
            <div class="time-wrapper" v-if="!pastevent && !pastoday">
                <span
                    class="time-left"
                    v-if="!pastevent"
                    v-text="pastoday || today ? 'Es hoy!' : 'Faltan'"
                ></span>
                <div class="time-date">
                    <div class="time-wrap">
                        <span class="time-number">{{ days }}</span>
                        <span class="time-label">Días</span>
                    </div>
                    <div class="time-wrap">
                        <span class="time-number">{{ hours }}</span>
                        <span class="time-label">Hr</span>
                    </div>
                    <div class="time-wrap">
                        <span class="time-number">{{ minutes }}</span>
                        <span class="time-label">Min</span>
                    </div>
                    <div class="time-wrap">
                        <span class="time-number">{{ seconds }}</span>
                        <span class="time-label">Seg</span>
                    </div>
                </div>
            </div>
            <div class="time-wrapper-none" v-else-if="pastevent">
                <span class="time-left">Evento realizado</span>
            </div>
            <div class="time-wrapper-none" v-else-if="pastoday">
                <span class="time-left">Es hoy!</span>
            </div>
        </section>
        <section class="invite__celebration">
            <h2 class="invite__subtitle">Celebración</h2>
            <div class="invite__celebration-wrapper">
                <div class="invite__celebration-wrap">
                    <div class="invite__celebration-label">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            :fill="`var(--violet)`"
                        >
                            <path
                                d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
                            />
                        </svg>
                        Día
                    </div>
                    <span class="invite__celebration-info" v-text="event.dateforhumans3"></span>
                </div>
                <div class="invite__celebration-wrap">
                    <div class="invite__celebration-label">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            :fill="`var(--violet)`"
                        >
                            <path
                                d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"
                            />
                        </svg>
                        Hora
                    </div>
                    <span
                        class="invite__celebration-info"
                        v-text="event.timeforhumans.toLowerCase()"
                    ></span>
                </div>
                <div class="invite__celebration-wrap" v-if="event.address">
                    <div class="invite__celebration-label">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            :fill="`var(--violet)`"
                        >
                            <path
                                d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"
                            />
                        </svg>
                        Dirección
                    </div>
                    <span class="invite__celebration-info">{{ event.address }}</span>
                </div>
            </div>
        </section>

        <section class="invite__countdown">
            <img
                class="invite__branches-img"
                src="/img/event/evento_religioso_1/ramas.svg"
                alt="Ramas"
            />
        </section>

        <section class="invite__parents" v-if="event.godparents == true && event.type.godparents">
            <h2 class="invite__subtitle">Padrinos</h2>
            <div class="invite__parents-content">
                <img
                    class="invite__parents-image"
                    src="/img/event/evento_religioso_1/padrinos-svg.svg"
                />
                <div class="invite__parents-wrap">
                    <div
                        v-for="related in event.family"
                        v-show="related && related.type && related.type.name == 'Padrino'"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            :fill="`var(--blue)`"
                        >
                            <path
                                d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                            />
                        </svg>
                        <span class="invite__parents-name" v-text="related.name"></span>
                    </div>
                    <div
                        v-for="related in event.family"
                        v-show="related && related.type && related.type.name == 'Madrina'"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            :fill="`var(--pink)`"
                        >
                            <path
                                d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                            />
                        </svg>
                        <span class="invite__parents-name" v-text="related.name"></span>
                    </div>
                </div>
            </div>
        </section>

        <section class="invite__info" v-if="event.info.length > 0">
            <h2 class="invite__subtitle">{{ event.customSectionsData.informacion }}</h2>
            <div class="invite__info-content">
                <article
                    class="invite__info-card"
                    v-for="(info, index) in event.info"
                    :key="index"
                    @click.stop="viewinfo(info)"
                >
                    <div class="icon">
                        <SvgIcon
                            :class="{ 'shake-animation': info.shake }"
                            :src="'/img/othericons/' + info.icon.file"
                            :color="filterColor"
                        />
                    </div>
                    <p>{{ info.title }}</p>
                </article>
            </div>
        </section>

        <section class="invite__photos" v-if="event.files.length > 0">
            <h2 class="invite__subtitle">{{ event.customSectionsData.fotos }}</h2>
            <div class="invite__photos-content">
                <img
                    class="invite__photos-card"
                    v-for="(file, index) in event.files"
                    :key="index"
                    @click.stop="viewphoto(file)"
                    :src="file.url"
                    :alt="'Imagen ' + index"
                />
            </div>
        </section>
        <footer-for-template
            :logo_color="'#ffffff'"
            :background="'var(--violet)'"
            :text_color="'var(--white)'"
        ></footer-for-template>
        <div class="modal-shadow blur" v-show="modalactive">
            <div
                class="modal-container"
                :class="modal.name == 'photo' ? 'bg-zero padding-0' : modal.size"
                @click.stop=""
                id="modal"
            >
                <div class="modal-header" v-if="modal.name == 'info'">
                    <div class="modal-icon-float icon">
                        <SvgIcon
                            class="shake-animation"
                            :src="'/img/othericons/' + info.icon.file"
                            :color="'var(--white)'"
                        />
                    </div>
                </div>
                <button class="btn-close-modal" @click.stop="closemodal(true)">
                    <span class="material-symbols-outlined text-white">close</span>
                </button>
                <div class="modal-body info" v-if="modal.name == 'info' && info">
                    <div class="modal-title text-center">
                        <span class="modal-info__label" v-text="info.title"></span>
                    </div>
                    <div class="text-center">
                        <p v-html="info.detail"></p>
                    </div>
                </div>
                <div class="modal-body photo padding-0" v-if="modal.name == 'photo' && photo">
                    <div class="modal-img">
                        <img :src="photo.url" :alt="'Imagen evento'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import { ref, nextTick } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import footer from '@/components/footer.vue'
import lottie from '@/components/lottie.vue'
export default {
    components: {
        SvgIcon,
        lottie,
        'footer-for-template': footer
    },
    emits: {
        loaded: null
    },
    data() {
        return {
            isSticky: false,
            initialPosition: null,
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            interval: null,
            info: null,
            photo: null,
            pastevent: false,
            pastoday: false,
            today: null,
            observer: null,
            modal: {
                name: null,
                size: 'lg'
            },
            filterColor: 'var(--violet)'
        }
    },
    props: ['event', 'modalactive'],
    mounted() {
        const page = this.$refs.page
        if (this.event) {
            this.event.description = this.event.description.replace(/\n/g, '<br>')
        }

        this.calculateTimeLeft()
        this.$nextTick(() => {
            // Emite el evento 'loaded' cuando todo esté listo
            this.$emit('loaded')
        })
        // ACIVAR CUANDO LISTA DE REGALOS ESTE DISPONIBLE
        // this.initialPosition = this.$refs.quickAccess.getBoundingClientRect().top
        // page.addEventListener('scroll', this.handleScroll);
        document.addEventListener('click', this.handleDocumentClick)
        window.addEventListener('keydown', this.keyESC)
        this.createObserver()
        // Realiza las acciones de carga del componente hijo aquí

        // Simula una operación asíncrona o una comprobación de recursos
    },
    beforeUnmount() {
        const page = this.$refs.page
        window.removeEventListener('scroll', this.handleScroll)
        document.addEventListener('click', this.handleDocumentClick)
        window.removeEventListener('keydown', this.keyESC)
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    methods: {
        calculateTimeLeft() {
            this.interval = setInterval(() => {
                const now = new Date()
                const difference = new Date(this.event.date + ' ' + this.event.time) - now
                this.today = this.isSameDay(now, new Date(this.event.date + ' ' + this.event.time))
                if (difference < 0) {
                    if (this.today == false) {
                        this.pastevent = true
                    } else {
                        this.pastoday = true
                    }
                    clearInterval(this.interval)
                    this.days = '00'
                    this.hours = '00'
                    this.minutes = '00'
                    this.seconds = '00'
                    return
                }
                this.days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0')
                this.hours = String(
                    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                ).padStart(2, '0')
                this.minutes = String(
                    Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
                ).padStart(2, '0')
                this.seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(
                    2,
                    '0'
                )
                // console.log(this.today)
            }, 100)
        },
        isSameDay(date1, date2) {
            // console.log(date1.getDate(), date2.getDate())
            return (
                date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate()
            )
        },
        handleScroll() {
            nextTick(() => {
                const quickAccessBottom = this.initialPosition
                let container = document.getElementById('quick-container')
                this.isSticky = this.$refs.page.scrollTop > quickAccessBottom
                if (this.isSticky) {
                    this.$refs.quickAccess.style.top = '0px'
                } else {
                    this.$refs.quickAccess.style.top = '0px'
                }
            })
        },
        viewinfo(info) {
            this.info = info
            this.info.detail = info.detail.replace(/\n/g, '<br>')
            this.modal.name = 'info'
            this.modal.size = 'md'
            this.storeview(this.info.id)
            this.activemodal()
        },
        viewphoto(file) {
            this.photo = file
            this.modal.name = 'photo'
            this.modal.size = 'lg'
            this.activemodal()
        },
        activemodal() {
            this.$router.push({ name: 'EventModal', params: { name: this.$route.params.name } })
        },
        closedrop() {
            this.closemodal()
        },
        closemodal() {
            this.$router.push({ name: 'EventPublic', params: { name: this.$route.params.name } })
        },
        handleDocumentClick(event) {
            if (this.modalactive) {
                this.closemodal()
            }
        },
        keyESC() {
            if (event.keyCode === 27 && this.modalactive) {
                this.closemodal()
            }
        },
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-index')
                    const type = entry.target.getAttribute('data-type')

                    if (type === 'info') {
                        this.event.info[index].shake = true
                    } else if (type === 'photo') {
                        this.event.files[index].shake = true
                    }
                } else {
                    const index = entry.target.getAttribute('data-index')
                    const type = entry.target.getAttribute('data-type')

                    if (type === 'info') {
                        this.event.info[index].shake = false
                    } else if (type === 'photo') {
                        this.event.files[index].shake = false
                    }
                }
            })
        },
        createObserver() {
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }

            this.observer = new IntersectionObserver(this.handleIntersection, options)

            // Observe info cards
            const infoElements = document.querySelectorAll('.infocard')
            infoElements.forEach((element, index) => {
                element.setAttribute('data-index', index)
                element.setAttribute('data-type', 'info')
                this.observer.observe(element)
            })

            // Observe photos
            const photoElements = document.querySelectorAll('.tm-photo')
            photoElements.forEach((element, index) => {
                element.setAttribute('data-index', index)
                element.setAttribute('data-type', 'photo')
                this.observer.observe(element)
            })
        },
        formatDate(date) {
            const d = new Date(date)
            const year = d.getFullYear()
            const month = ('0' + (d.getMonth() + 1)).slice(-2)
            const day = ('0' + d.getDate()).slice(-2)
            return `${year}${month}${day}`
        },
        addToGoogleCalendar() {
            const start = this.formatDate(this.startDate)
            const end = this.formatDate(this.endDate)
            const title = encodeURIComponent(this.title)
            const details = encodeURIComponent(this.details)
            const location = encodeURIComponent(this.location)
            const url = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${start}/${end}&details=${details}&location=${location}`
            window.open(url, '_blank')
        },
        storeview: _.throttle(function (id) {
            // const params = {
            //     id: id,
            //     DevId: localStorage.getItem('deviceId'),
            //     OS: localStorage.getItem('OS'),
            //     type: localStorage.getItem('usertype')
            // }
            // axios.post('/report_ininfo', params).then((response) => {})
        }, 3000)
    },
    computed: {
        dayLabel() {
            const numericDays = parseInt(this.days, 10)
            return numericDays === 1 || numericDays === 0 ? 'Día' : 'Días'
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900');

* {
    margin: 0;
    box-sizing: border-box;
}

.invite {
    --black: #222222;
    --white: #ffffff;
    --background-color: #fffbf4;
    --violet: #971ea1;
    --blue: #3395cd;
    --pink: #cd4973;
    width: 100%;
    margin: 0 auto;
    color: var(--black);
    background-color: var(--background-color);
    position: relative;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
}

/* INVITE ABSOLUTE */
.invite__cross-img {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 70px;
    animation: fadeIn 0.6s ease-out;
}

/* INVITE HEADER */
.invite__header {
    text-align: center;
    padding: 100px 20px 0;
    min-height: 100svh;
    display: grid;
    transition: height 0.5s ease;
}

.invite__text-wrap {
    display: grid;
    align-content: center;
}

.invite__text-header {
    font-size: 1.75rem;
    font-weight: 700;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards 0.2s;
    color: var(--violet);
}

.invite__event-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
}

.invite__branch-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: none;
}

.invite__branch-img--left {
    left: 0;
}

.invite__branch-img--right {
    right: 0;
}

.invite__date {
    font-size: 1.25rem;
    padding: 2px 12px;
    border-radius: 100vmax;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards 0.6s;
}

.invite__image--main {
    width: auto;
    max-width: 100%;
    height: 360px;
    margin-top: 16px;
    opacity: 0;
    animation: scaleIn 0.6s ease-out forwards 0.4s;
}

/* INVITE PROFILE */
.invite__profile {
    display: grid;
    justify-items: center;
    gap: 50px;
    padding: 60px 20px;
}

.invite__subtitle {
    font-size: 2rem;
    font-weight: 700;
}

.invite__profile-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.invite__profile-img {
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--violet);
}

.invite__profile-text {
    text-align: center;
    width: 80%;
}

/* INVITE COUNTDOWN */
.invite__countdown {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    position: relative;
}

.invite__circle-img {
    height: 283px;
}

.time-wrapper {
    position: absolute;
    top: 28%;
    left: 50.3%;
    transform: translate(-50%, 0%);
    display: grid;
    gap: 10px;
}

.time-wrapper-none {
    text-wrap: nowrap;
    position: absolute;
    top: 46%;
    left: 51%;
    transform: translate(-50%, -50%);
}

.time-left {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--violet);
    text-align: center;
}

.time-date {
    display: flex;
    align-items: center;
}

.time-wrap {
    display: grid;
    gap: 4px;
    padding: 8px 10px;
}

.time-wrap:not(:last-child) {
    border-right: 1px solid var(--black);
}

.time-number {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--violet);
    text-align: center;
    line-height: 1;
}

.time-label {
    font-size: 1.25rem;
    color: var(--black);
    line-height: 1;
}

/* INVITE ADDRESS */
.invite__address {
    text-align: center;
    padding: 40px 20px;
    display: grid;
    justify-items: center;
}

.invite__address-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
}

.invite__address-text {
    display: flex;
    justify-content: center;
    gap: 4px;
    width: 87%;
    font-size: 1rem;
}

.invite__branches-img {
    height: 207px;
}

/* INVITE CELEBRATION */
.invite__celebration {
    display: grid;
    justify-items: center;
    gap: 50px;
    padding: 40px 20px;
}

.invite__celebration-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: center;
    align-items: start;
    gap: 40px;
    max-width: 900px;
}

.invite__celebration-wrap {
    display: grid;
    justify-items: center;
    gap: 6px;
}

.invite__celebration-label {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--violet);
    text-align: center;
    display: flex;
    align-items: center;
    gap: 8px;
}

.invite__celebration-info {
    font-size: 1.25rem;
    text-align: center;
}

/* INVITE INFO */
.invite__info {
    display: grid;
    justify-items: center;
    gap: 130px;
    padding: 40px 20px;
}

.invite__info-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 40px;
    row-gap: 120px;
}

.invite__info-card {
    padding: 36px 30px;
    text-align: center;
    width: 280px;
    background-color: var(--violet);
    border-bottom: 5px solid var(--white);
    box-shadow: var(--shadow);
    border-radius: 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 32px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease;
    position: relative;
}

.invite__info-card:hover {
    transform: translateY(-8px);
}

.invite__info-card p {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
}

.invite__info-card .icon {
    height: 100px;
    width: 100px;
    position: absolute;
    top: -30px;
    transform: translateY(-50%);
    background-color: var(--white);
    padding: 10px;
    border-radius: 12px;
    border: 2px solid var(--violet);
}

/* INVITE PHOTOS */
.invite__photos {
    display: grid;
    justify-items: center;
    gap: 20px;
    padding: 40px 20px;
}

.invite__photos-content {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 20px 20px 40px;
}

.invite__photos-card {
    width: 100%;
    object-fit: cover;
    border: 4px solid var(--violet);
    border-radius: 16px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.invite__photos-card:hover {
    transform: translateY(-8px);
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    0% {
        opacity: 0;
        transform: scale(0.94) translateY(20px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
.modal-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.modal-container {
    border-radius: 32px;
}
.btn-close-modal {
    background: var(--violet);
}
.btn-close-modal:hover {
    background: var(--violet);
}
.modal-shadow {
    background-color: rgba(0, 0, 0, 0.65);
}
.modal-icon-float {
    background: var(--violet);
    box-sizing: content-box;
}
@media (min-width: 412px) {
    /* INVITE HEADER */
    .invite__text-header {
        font-size: 2.1rem;
    }

    .invite__date {
        font-size: 1.35rem;
    }

    .invite__image--main {
        height: 380px;
        /* margin-top: 90px; */
    }
}

@media (min-width: 520px) {
    /* INVITE HEADER */
    .invite__text-header {
        font-size: 2.5rem;
    }

    .invite__image--main {
        margin-top: 32px;
        height: 100%;
    }
}

@media (min-width: 640px) {
    /* INVITE HEADER */
    .invite__header {
        padding-top: 140px;
    }

    /* INVITE ABSOLUTE */
    .invite__cross-img {
        height: 106px;
    }

    /* INVITE PROFILE */
    .invite__profile-content {
        max-width: 650px;
        flex-direction: row;
        gap: 28px;
    }

    .invite__profile-img {
        width: 250px;
    }

    /* INVITE INFO */
    .invite__info-content {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .invite__info-card {
        width: 230px;
        height: 140px;
    }

    /* INVITE PHOTOS */
    .invite__photos-content {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .invite__photos-card {
        width: 300px;
        aspect-ratio: 1/1;
    }
}

@media (min-width: 1200px) {
    .invite__branch-img {
        display: block;
    }
}

/* horizontal de la mayoría de teléfondos */
@media (min-width: 920px) {
    /* INVITE HEADER */
    .invite__header {
        padding: 140px 20px 0;
    }

    .invite__text-wrap {
        height: 100%;
    }

    .invite__text-header {
        font-size: 3.9rem;
    }

    .invite__event-details {
        height: auto;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }

    .invite__delete {
        display: none;
    }

    .invite__event-details-wrap {
        margin-bottom: 80px;
    }

    .invite__date {
        font-size: 1.5rem;
    }

    .invite__image--main {
        margin-top: 0;
        height: 400px;
    }
}

/* hace que la máxima altura que
se pueda aplicar 100dvh sea 800px */
@media (min-height: 850px) {
    .invite__header {
        height: auto;
        padding-top: 140px;
        min-height: 600px;
    }
}

/* INVITE PARENTS */
.invite__parents {
    display: grid;
    justify-items: center;
    gap: 50px;
    padding: 40px 20px;
}

.invite__parents-content {
    display: grid;
    justify-items: center;
    gap: 40px;
}

.invite__parents-image {
    width: 168px;
}

.invite__parents-wrap {
    font-weight: 600;
    border-radius: 12px;
    display: grid;
    gap: 8px;
}

.invite__parents-wrap div {
    display: flex;
    align-items: center;
    gap: 8px;
}

.invite__parents-name {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--dark-gray);
}
</style>

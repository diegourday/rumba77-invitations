<template>
    <div class="invite" v-if="event">
        <img
            class="invite__disco-img"
            src="/img/event/evento_matrimonio_2/roses-top.svg"
            alt="Bola de Discoteca"
        />

        <section class="invite__header">
            <div class="invite__text-wrap">
                <p class="invite__text-header">{{ event.title }}</p>
                <h1 class="invite__name">{{ event.name }}</h1>
            </div>
            <div class="invite__event-details">
                <div class="invite__delete"></div>
                <div class="invite__event-details-wrap">
                    <p class="invite__text-celebrar">{{ event.subtitle }}</p>
                    <p
                        class="invite__date"
                        v-text="
                            pastevent == true && today == false
                                ? event.dateforhumans
                                : event.dateforhumans2
                        "
                    ></p>
                </div>
                <img
                    class="invite__image--main"
                    src="/img/event/evento_matrimonio_2/main-img.svg"
                    alt="Celebración"
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
                class="invite__countdown-img"
                src="/img/event/evento_matrimonio_2/rose-crown.svg"
                alt="Chat"
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
                        <span class="time-label">{{ dayLabel }}</span>
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
                <span class="celebration__info time-left">Evento realizado</span>
            </div>
            <div class="time-wrapper-none" v-else-if="pastoday">
                <span class="celebration__info time-left">Es hoy!</span>
            </div>
        </section>

        <section class="invite__address" v-if="event.address">
            <p class="invite__address-title">Dirección</p>
            <div class="invite__address-text">
                <span>
                    <span class="material-symbols-outlined locations invite__address-icon"
                        >location_on</span
                    >
                    <span>{{ event.address }}</span>
                </span>
            </div>
        </section>

        <section class="invite__countdown">
            <img
                class="invite__gifts-img"
                src="/img/event/evento_matrimonio_2/roses.svg"
                alt="Regalos"
            />
        </section>

        <section class="invite__parents" v-if="event.godparents == true && event.type.godparents">
            <h2 class="invite__subtitle">Padrinos</h2>
            <div class="invite__parents-content">
                <img
                    class="invite__parents-image"
                    src="/img/event/evento_matrimonio_2/godparents.svg"
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
                            :fill="`var(--point1)`"
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
                            :fill="`var(--point2)`"
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
                    @mouseover="info.shake = true"
                    @mouseleave="info.shake = false"
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
            :background="'var(--primary)'"
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
                            :color="'#ffffff'"
                        />
                    </div>
                </div>
                <button class="btn-close-modal" @click.stop="closemodal(true)">
                    <span class="material-symbols-outlined text-white">close</span>
                </button>
                <div class="modal-body info" v-if="modal.name == 'info' && info">
                    <div class="modal-title text-center">
                        <span class="invite__address-title" v-text="info.title"></span>
                    </div>
                    <div class="text-center">
                        <span class="invite__profile-text" v-html="info.detail"></span>
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
export default {
    components: {
        SvgIcon,
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
            filterColor: '#FF9393'
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
@import url('https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Tangerine:wght@400;700&display=swap');

* {
    margin: 0;
    box-sizing: border-box;
}

.invite {
    --black: #444444;
    --white: #ffffff;
    --background-color: #ffefef;
    --primary: #fd8383;
    --primary-dark: #ff6a6a;
    --point1: #3395cd;
    --point2: #cd4973;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    color: var(--black);
    background-color: var(--background-color);
    position: relative;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
}

/* INVITE ABSOLUTE */
.invite__disco-img {
    position: absolute;
    /* height: 80px; */
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeIn 0.6s ease-out;
}

/* INVITE HEADER */
.invite__header {
    text-align: center;
    padding: 80px 20px 0;
    height: 100svh;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: height 0.5s ease;
    color: var(--black);
}

.invite__text-wrap {
    display: grid;
    align-content: center;
    height: 100%;
}

.invite__text-header {
    font-size: 2.5rem;
    font-family: 'Tangerine', sans-serif;
    animation: fadeInUp 0.6s ease-out forwards;
}

.invite__name {
    font-size: 3rem;
    font-family: 'Tangerine', sans-serif;
    font-weight: 600;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards 0.2s;
}

.invite__event-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.invite__text-celebrar {
    font-size: 1.5rem;
    font-family: 'Playfair', sans-serif;
    margin-bottom: 8px;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards 0.4s;
}

.invite__date {
    font-size: 1.3rem;
    font-family: 'Playfair', sans-serif;
    background-color: var(--primary);
    color: var(--white);
    padding: 2px 12px;
    border-radius: 100vmax;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards 0.6s;
}

.invite__image--main {
    /*  height: 360px;*/
    margin-top: 100px;
    /* margin-top: 64px; */
    opacity: 0;
    animation: scaleIn 0.6s ease-out forwards 0.4s;
    margin-bottom: -2px;
}

/* INVITE PROFILE */
.invite__profile {
    display: grid;
    justify-items: center;
    gap: 50px;
    padding: 60px 20px;
}

.invite__subtitle {
    font-size: 2.25rem;
    font-weight: 700;
    font-family: 'Playfair', sans-serif;
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
    border: 6px solid var(--primary);
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

.time-wrapper {
    position: absolute;
    top: 32%;
    left: 50.3%;
    transform: translate(-50%, 0%);
    display: grid;
    gap: 10px;
}
.time-wrapper-none {
    text-wrap: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.time-left {
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
    font-family: 'Playfair', sans-serif;
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
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 8px;
    font-family: 'Playfair', sans-serif;
}

.invite__address-text {
    display: flex;
    justify-content: center;
    gap: 4px;
    width: 87%;
    font-size: 1rem;
}

.invite__address-icon {
    color: var(--black);
    margin-right: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
}

.invite__gifts-img {
    height: 160px;
}

/* INVITE GODPARENTS */
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
    height: 320px;
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
    background-color: var(--primary);
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
    border: 6px solid var(--primary);
    border-radius: 16px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.invite__photos-card:hover {
    transform: translateY(-8px);
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
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
    background: var(--primary);
    transition: background-color 0.2s ease;
}
.btn-close-modal:hover {
    background: var(--primary-dark);
}
.modal-shadow {
    background-color: rgba(0, 0, 0, 0.65);
}
.modal-icon-float {
    background: var(--primary);
    box-sizing: content-box;
}

@media (max-height: 420px) {
    .invite__header {
        height: auto;
    }
}

@media (min-width: 412px) {
    /* INVITE HEADER */

    .invite__text-celebrar {
        font-size: 1.15rem;
    }

    .invite__date {
        font-size: 1.15rem;
    }

    .invite__image--main {
        height: 380px;
        margin-top: 90px;
    }
}

@media (min-width: 520px) {
    /* INVITE HEADER */
    .invite__text-celebrar {
        font-size: 1.15rem;
    }

    .invite__date {
        font-size: 1.15rem;
    }

    .invite__image--main {
        margin-right: 0;
        margin-top: 32px;
    }
}

@media (min-width: 640px) {
    /* INVITE HEADER */
    .invite__header {
        min-height: 630px;
        padding-top: 120px;
    }

    /* INVITE ABSOLUTE */
    .invite__disco-img {
        height: 120px;
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

/* horizontal de la mayoría de teléfondos */
@media (min-width: 920px) {
    /* INVITE HEADER */
    .invite__header {
        padding: 110px 20px 0;
    }

    .invite__text-header {
        font-size: 3.5rem;
    }

    .invite__name {
        font-size: 4rem;
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

    .invite__text-celebrar {
        font-size: 2rem;
    }

    .invite__date {
        font-size: 1.5rem;
    }

    .invite__image--main {
        height: 360px;
    }
}

/* hace que la máxima altura que
se pueda aplicar 100dvh sea 800px */
@media (min-height: 1024px) {
    .invite__header {
        height: auto;
    }
}
</style>

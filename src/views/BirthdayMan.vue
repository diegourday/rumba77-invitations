<template>
  <div class="invite">
    <img
      class="invite__lights-img invite__lights-img--left"
      src="../assets/img/event/birthday_man/lights-left.svg"
      alt="Luces Izquierda"
    />
    <img
      class="invite__lights-img invite__lights-img--right"
      src="../assets/img/event/birthday_man/lights-right.svg"
      alt="Luces Derecha"
    />

    <section class="invite__header">
      <div class="invite__text-wrap">
        <p class="invite__text-header">Te invito a mi cumpleaños</p>
        <h1 class="invite__name">Jhonatan Echaccaya</h1>
      </div>
      <div class="invite__event-details">
        <div class="invite__delete"></div>
        <div class="invite__event-details-wrap">
          <p class="invite__text-celebrar">Se celebrará</p>
          <p class="invite__date">Martes 04 de Marzo | 5:30 pm</p>
        </div>
        <img
          class="invite__image--main"
          src="../assets/img/event/birthday_man/main-img.svg"
          alt="Celebración"
        />
      </div>
    </section>

    <section class="invite__profile">
      <h2 class="invite__subtitle">¡Te invito!</h2>
      <div class="invite__profile-content">
        <img
          class="invite__profile-img"
          src="../assets/img/event/birthday_man/profile-img.jpg"
          alt="Perfil"
        />
        <p class="invite__profile-text">
          Hola, ya llega el gran día y esperamos que nos puedan acompañar en este día tan lindo.
          Aquí podrán encontrar toda la información del evento.
        </p>
      </div>
    </section>

    <section class="invite__countdown">
      <img
        class="invite__stopwatch-img"
        src="../assets/img/event/birthday_man/stopwatch.svg"
        alt="Cronómetro"
      />
      <div class="time-wrapper">
        <span class="time-left">Faltan</span>
        <div class="time-date">
          <div class="time-wrap">
            <span class="time-number">40</span>
            <span class="time-label">Días</span>
          </div>
          <div class="time-wrap">
            <span class="time-number">1</span>
            <span class="time-label">Hr</span>
          </div>
          <div class="time-wrap">
            <span class="time-number">59</span>
            <span class="time-label">Min</span>
          </div>
          <div class="time-wrap">
            <span class="time-number">35</span>
            <span class="time-label">Seg</span>
          </div>
        </div>
      </div>
    </section>

    <section class="invite__address">
      <p class="invite__address-title">Dirección</p>
      <div class="invite__address-text">
        <svg
          class="address-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffffff"
        >
          <path
            d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
          />
        </svg>
        <p>Av. Juan Pardo de Zela N° 4800 Lima - Lince - Perú</p>
      </div>
    </section>

    <section class="invite__countdown">
      <img class="invite__cup-img" src="../assets/img/event/birthday_man/cup.svg" alt="Copa" />
    </section>

    <section class="invite__info">
      <h2 class="invite__subtitle">Más información</h2>
      <div class="invite__info-content">
        <article class="invite__info-card">
          <img src="../assets/img/othericons/men-suit-accesories.svg" />
          <p>Vestimenta</p>
        </article>
        <article class="invite__info-card">
          <img src="../assets/img/othericons/meal.svg" />
          <p>Cena</p>
        </article>
        <article class="invite__info-card">
          <img src="../assets/img/othericons/perro.svg" />
          <p>Mascota</p>
        </article>
      </div>
    </section>

    <section class="invite__photos">
      <h2 class="invite__subtitle">Mis fotos</h2>
      <div class="invite__photos-content">
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/vertical-photo.jpg"
          alt="Foto 1"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/regular-photo.jpg"
          alt="Foto 2"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/vertical-photo.jpg"
          alt="Foto 3"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/regular-photo.jpg"
          alt="Foto 4"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/vertical-photo.jpg"
          alt="Foto 5"
        />
      </div>
    </section>

    <footer-view
      :logo_color="'#ffffff'"
      :background="'var(--dark-blue)'"
      :text_color="'var(--white)'"
    ></footer-view>
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue'

export default {
  name: 'App',
  components: {
    FooterView
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.invite {
  --black: #222222;
  --white: #ffffff;
  --background-color: #06273c;
  --dark-blue: #031927;
  --light-blue: #1b5fea;
  --blue: #0d3072;
  width: 100%;
  margin: 0 auto;
  color: var(--white);
  background-color: var(--background-color);
  position: relative;
  overflow-x: hidden;
}

/* INVITE ABSOLUTE */
.invite__lights-img {
  height: 70px;
  animation: fadeInDown 0.6s ease-out;
}

.invite__lights-img--left {
  position: absolute;
  left: 0;
}

.invite__lights-img--right {
  position: absolute;
  right: 0;
}

/* INVITE HEADER */
.invite__header {
  text-align: center;
  padding: 70px 20px 0;
  height: 100svh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height 0.5s ease;
}

.invite__text-wrap {
  display: grid;
  align-content: center;
  height: 100%;
}

.invite__text-header {
  font-size: 1.25rem;
  animation: fadeInUp 0.6s ease-out forwards;
}

.invite__name {
  font-size: 1.75rem;
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
  font-size: 1.25rem;
  margin-bottom: 8px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards 0.4s;
}

.invite__date {
  font-size: 1.25rem;
  background-color: var(--white);
  color: var(--black);
  padding: 2px 12px;
  border-radius: 100vmax;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards 0.6s;
}

.invite__image--main {
  max-width: 100%;
  height: 360px;
  margin-top: 64px;
  opacity: 0;
  animation: scaleIn 0.6s ease-out forwards 0.4s;
}

/* INVITE PROFILE */
.invite__profile {
  display: grid;
  justify-items: center;
  gap: 50px;
  padding: 40px 20px;
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
  border: 6px solid rgba(255, 255, 255, 0.5);
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

.invite__stopwatch-img {
  height: 430px;
}

.time-wrapper {
  position: absolute;
  top: 47%;
  left: 50.3%;
  transform: translate(-50%, 0%);
  display: grid;
  gap: 10px;
}

.time-left {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--blue);
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
  color: var(--blue);
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

.address-icon {
  flex-shrink: 0;
}

.invite__cup-img {
  height: 122px;
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
  background-color: var(--light-blue);
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

.invite__info-card img {
  height: 100px;
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
  border: 6px solid var(--white);
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

@media (min-width: 412px) {
  /* INVITE HEADER */
  .invite__text-header {
    font-size: 1.5rem;
  }

  .invite__name {
    font-size: 2.1rem;
  }

  .invite__text-celebrar {
    font-size: 1.5rem;
  }

  .invite__date {
    font-size: 1.35rem;
  }

  .invite__image--main {
    height: 380px;
    margin-top: 90px;
  }
}

@media (min-width: 520px) {
  /* INVITE HEADER */
  .invite__name {
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
    min-height: 640px;
  }

  /* INVITE ABSOLUTE */
  .invite__lights-img {
    height: 80px;
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
    padding: 20px 20px 0;
  }

  .invite__text-header {
    font-size: 2rem;
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
    height: 400px;
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

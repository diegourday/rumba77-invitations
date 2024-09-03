<template>
  <div class="invite">
    <div class="invite__lights">
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
    </div>

    <section class="invite__header">
      <div>
        <p class="invite__text invite__text--header">Te invito a mi cumpleaños</p>
        <h1 class="invite__name">Jhonatan Echaccaya</h1>
      </div>
      <div class="invite__event-details">
        <div></div>
        <div>
          <p class="invite__text invite__text--celebrar">Se celebrará</p>
          <p class="invite__date">Martes 04 de Marzo | 5:30 pm</p>
        </div>
        <img
          class="invite__image invite__image--main"
          src="../assets/img/event/birthday_man/main-img.svg"
          alt="Celebración"
        />
      </div>
    </section>

    <!-- <button class="invite__button invite__button--gift">
      <img src="../assets/img/event/birthday_man/gift-icon.svg" alt="Regalos" />
      <p>Lista de Regalos</p>
    </button> -->

    <section class="invite__profile">
      <h2 class="invite__subtitle">¡Te invito!</h2>
      <div class="invite__profile-content">
        <img
          class="invite__profile-img"
          src="../assets/img/event/birthday_man/man-img.jpg"
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
        class="invite__countdown-img"
        src="../assets/img/event/birthday_man/stopwatch.svg"
        alt="Cronómetro"
      />
    </section>

    <!-- <div class="invite__countdown">
      <p class="invite__countdown-text">Faltan</p>
      <div class="invite__countdown-timer">
        <p class="invite__countdown-item">40 Días</p>
        <p class="invite__countdown-item">1 Hr</p>
        <p class="invite__countdown-item">59 Min</p>
        <p class="invite__countdown-item">35 Seg</p>
      </div>
    </div> -->

    <section class="invite__address">
      <p class="invite__address-title">Dirección</p>
      <div class="invite__address-text">
        <svg
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
      <img
        class="invite__countdown-img invite__countdown-img--cup"
        src="../assets/img/event/birthday_man/cup.svg"
        alt="Copa"
      />
    </section>

    <section class="invite__info">
      <h2 class="invite__subtitle">Más información</h2>
      <div class="invite__info-content">
        <article class="invite__info-card">
          <img src="../assets/img/othericons/men-suit-accesories.svg" />
          <span>Vestimenta</span>
        </article>
        <article class="invite__info-card">
          <img src="../assets/img/othericons/meal.svg" />
          <span>Cena</span>
        </article>
        <article class="invite__info-card">
          <img src="../assets/img/othericons/perro.svg" />
          <span>Mascota</span>
        </article>
      </div>
    </section>

    <section class="invite__photos">
      <h2 class="invite__subtitle">Mis fotos</h2>
      <div class="invite__photos-content">
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/man-photo.jpeg"
          alt="Foto 1"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/man-photo.jpeg"
          alt="Foto 2"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/man-photo.jpeg"
          alt="Foto 3"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/man-photo.jpeg"
          alt="Foto 4"
        />
        <img
          class="invite__photos-card"
          src="../assets/img/event/birthday_man/man-photo.jpeg"
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

<style>
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
  width: 100%;
  margin: 0 auto;
  color: var(--white);
  background-color: var(--background-color);
}

.invite__header {
  text-align: center;
  padding: 20px 20px 0;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
}

.invite__lights {
  display: flex;
  height: 70px;
  position: relative;
}

.invite__lights-img {
  position: absolute;
  height: 65px;
}

.invite__lights-img--right {
  right: 0;
}

.invite__text--header {
  font-size: 1.25rem;
}

.invite__text--celebrar {
  margin-bottom: 8px;
}

.invite__name {
  font-size: 1.75rem;
  font-weight: 600;
  /* margin-bottom: 52px; */
}

.invite__event-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.invite__date {
  font-size: 1.25rem;
  background-color: var(--white);
  color: var(--black);
  padding: 2px 12px;
  border-radius: 100vmax;
}

.invite__image--main {
  max-width: 100%;
  height: 320px;
}

.invite__profile {
  display: grid;
  justify-items: center;
  padding: 20px;
}

.invite__subtitle {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.invite__profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.invite__profile-img {
  width: 200px;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
}

.invite__profile-text {
  text-align: center;
  width: 80%;
}

.invite__countdown {
  display: flex;
  justify-content: center;
  margin: 60px 0;
}

.invite__address {
  text-align: center;
  margin: 60px 0;
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
  width: 70%;
  font-size: 1rem;
}

/* INFORMATION SECTION */
.invite__info {
  display: grid;
  justify-items: center;
  padding: 40px 0;
}

.invite__info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 40px;
  row-gap: 112px;
  margin-top: 100px;
}

.invite__info-card {
  padding: 36px 30px;
  text-align: center;
  width: 100%;
  max-width: 250px;
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

.invite__info-card span {
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
  padding: 16px;
  border-radius: 12px;
}

.invite__photos {
  display: grid;
  justify-items: center;
  padding: 40px;
}

.invite__photos-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 16px;
  padding-bottom: 32px;
}

.invite__photos-card {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 6px solid var(--white);
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.invite__photos-card:hover {
  transform: translateY(-8px);
}

/* @media (min-width: 768px) {
} */

/* @media (min-width: 1024px) {
} */

@media (min-height: 600px) {
  .invite__header {
    /* height: auto; */
  }
}

@media (min-width: 640px) {
  .invite__text--header {
    font-size: 2rem;
  }

  .invite__name {
    font-size: 4rem;
  }

  .invite__event-details {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }

  .invite__profile-content {
    max-width: 650px;
    flex-direction: row;
    gap: 28px;
  }

  .invite__profile-img {
    width: 250px;
  }

  .invite__info-content {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .invite__info-card {
    width: 230px;
  }

  .invite__photos-content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .invite__photos-card {
    width: 300px;
  }
}
</style>

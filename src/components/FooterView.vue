<template>
  <div class="tm-footer" :style="'background:' + background">
    <rou class="tm-footer-logo">
      <img class="pointer" src="../assets/img/logo-white.svg" @click.stop="gohome()" />
    </rou>
    <div class="tm-footer-text">
      <span class="body-large" :style="'color:' + text_color"
        >Somos una plataforma que te ayuda a organizar, realizar y disfrutar de tus eventos y
        fiestas, ofreciendo una variedad de herramientas.</span
      >
      <div class="policy-details">
        <li class="terms">
          <a class="icon-text" :style="'color:' + text_color">Términos y Condiciones </a>
        </li>
        <li class="terms">
          <a class="icon-text" :style="'color:' + text_color">Políticas de Privacidad </a>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['logo_color', 'background', 'text_color'],
  created() {},
  mounted() {},
  beforeUnmount() {},
  methods: {
    gohome() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.policy-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.icon-text {
  text-decoration: underline;
}

.tm-footer {
  display: flex;
  padding: 40px 32px;
  justify-content: space-between;
  align-self: stretch;
}
.tm-footer-logo img {
  /* filter: invert(100%) brightness(0); */
  height: 72px;
  max-width: 100%;
}
.tm-footer-text {
  max-width: 40%;
  align-self: stretch;
  align-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (max-width: 720px) {
  .tm-footer {
    flex-direction: column;
    gap: 30px;
    padding: 40px 32px 80px 32px;
  }
  .tm-footer-text {
    max-width: 100%;
    text-align: justify;
  }
}
</style>

<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import lottie from 'lottie-web';

export default defineComponent({
  name: 'LottieAnimation',
  props: {
    src: {
      type: String,
      required: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const lottieContainer = ref(null);

    onMounted(() => {
      lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: props.loop,
        autoplay: props.autoplay,
        path: props.src,
      });
    });

    return {
      lottieContainer,
    };
  },
});
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>

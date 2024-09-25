<template>
  <div v-html="svgContent" :style="svgStyle" :class="svgClass"></div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#FFFFFF' // Color blanco por defecto
    }
  },
  data() {
    return {
      svgContent: '',
      svgClass: 'custom-svg'
    };
  },
  async mounted() {
    await this.loadAndProcessSVG();
  },
  watch: {
    src: 'loadAndProcessSVG',
    color: 'loadAndProcessSVG',
  },
  methods: {
    async loadAndProcessSVG() {
      try {
        const response = await fetch(this.src);
        const text = await response.text();
        this.svgContent = this.replaceSizeAttributes(this.addColor(text, this.color));
      } catch (error) {
        // console.error('Error loading SVG:', error);
      }
    },
    addColor(svgText, color) {
      const uniqueClass = `svg-icon-${Math.random().toString(36).substring(2)}`;

      // Añade una clase única al estilo si no hay fill
      if (!/fill="/.test(svgText)) {
        svgText = svgText.replace(
          /<svg[^>]*>/,
          `$&<style>.${uniqueClass} path, .${uniqueClass} polygon { fill: ${color}; }</style>`
        );
        // Asegúrate de que el SVG tenga la clase única para aplicar el estilo
        svgText = svgText.replace(
          /<svg([^>]*)>/,
          `<svg$1 class="${uniqueClass}">`
        );
      } else {
        // Primero, si el fill es "none" y existe un stroke, cambia el stroke
        if (/fill="none"/.test(svgText) && /stroke="[^"]*"/.test(svgText)) {
          svgText = svgText.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
        }

        // Luego, reemplaza todos los fill con el color, excepto si el fill es "none"
        svgText = svgText.replace(/fill="[^"]*"/g, (match) => {
          if (match === `fill="none"`) {
            return match; // Mantener el fill como "none"
          }
          return `fill="${color}"`;
        });
      }
      return svgText;
    },
    replaceSizeAttributes(svgText) {
        // Reemplaza los atributos width y height con 100% y auto
        svgText = svgText.replace(/(<svg[^>]*?)\bwidth="[^"]*"/g, `$1width="100%"`);
        svgText = svgText.replace(/(<svg[^>]*?)\bheight="[^"]*"/g, `$1height="auto"`);
        return svgText;
    }
  },
  computed: {
    svgStyle() {
      return {
        width: '100%',
        height: 'auto',
        display: 'block'
      };
    }
  }
});
</script>

<style scoped>
.custom-svg svg{
  display: inline-block;
  width: 100%;
  height: auto;
}
</style>
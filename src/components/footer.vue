<template>
    <div class="tm-footer" :class="{ 'c-fixed': pb }" :style="'background:' + background">
        <div class="tm-footer-logo">
            <SvgIcon
                class="pointer"
                src="/img/logo-white.svg"
                :color="logo_color"
                @click.stop="gohome()"
            />
        </div>
        <div class="tm-footer-text">
            <span class="body-large" :style="'color:' + text_color"
                >Somos una plataforma que te ayuda a organizar, realizar y disfrutar de tus eventos
                y fiestas, ofreciendo una variedad de herramientas.</span
            >
            <div class="policy-details">
                <li class="terms">
                    <a class="icon-text" href="/condiciones" :style="'color:' + text_color">
                        <span class="material-symbols-outlined star-active bullet-point"
                            >circle</span
                        >
                        <div
                            class="body-large subra"
                            :style="'text-decoration-color:' + text_color"
                        >
                            Términos y Condiciones
                        </div>
                    </a>
                </li>
                <li class="terms">
                    <a class="icon-text" href="/privacidad" :style="'color:' + text_color">
                        <span class="material-symbols-outlined star-active bullet-point"
                            >circle</span
                        >
                        <div
                            class="body-large subra"
                            :style="'text-decoration-color:' + text_color"
                        >
                            Políticas de Privacidad
                        </div>
                    </a>
                </li>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIcon from '@/components/SvgIcon.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: { SvgIcon },
    data() {
        return {}
    },
    props: ['logo_color', 'background', 'text_color', 'pb'],
    created() {},
    mounted() {},
    beforeUnmount() {},
    methods: {
        gohome() {
            this.$router.push('/')
        }
    }
})
</script>
<style scoped>
.tm-footer {
    display: flex;
    padding: 40px 32px;
    justify-content: space-between;
    align-self: stretch;
}
.tm-footer-logo {
    height: 72px;
    width: 223px;
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
    }
    .c-fixed {
        padding-bottom: 80px;
    }
    .tm-footer-text {
        max-width: 100%;
        text-align: justify;
    }
    .tm-footer-logo {
        margin: auto;
    }
}
</style>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TheModal from '@/components/TheModal.vue';
import TheForm from '@/components/TheForm.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import banner from '@/assets/images/banner.png';

const sectionBg: string = `url(${banner})`;

const isShowModal: Ref<boolean> = ref(false);
</script>

<template>
<section class="banner">
    <h1 class="banner__title">Полет Илона Маска и DOGIE COIN</h1>
    <p class="banner__description">В прошлый четверг все офигели от полета DOGIE COIN на марс.</p>
    <BaseBtn class="banner__btn" @click="isShowModal = true" type="button">ОСТАВИТЬ ЗАЯВКУ</BaseBtn>
</section>
<TheModal v-model:isShowModal="isShowModal">
    <TheForm />
</TheModal>
</template>

<style scoped lang="scss">
.banner {
    height: 959.072px;
    padding: 96px 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-image: v-bind(sectionBg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: lightgray;
    border-radius: 60px 60px 0 0;

    @media (max-width: 1919px) {
        & {
            height: 907px;
            padding: 76px 49px;
        }
    }

    @media (max-width: 767px) {
        & {
            height: 495px;
            padding: 52px 14px;
            border-radius: 30px 30px 0px 0px;
        }
    }
}

.banner__title {
    width: 686px;
    margin-bottom: 40px;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: 1919px) {
        & {
            width: 500px;
            font-size: 38px;
        }
    }

    @media (max-width: 767px) {
        & {
            width: 260px;
            margin-bottom: 20px;
            font-size: 20px;
        }
    }
}

.banner__description {
    margin-bottom: 40px;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    opacity: 0.79;

    @media (max-width: 767px) {
        & {
            margin-bottom: 20px;
            font-size: 14px;
        }
    }
}

.banner__btn {
    padding: 21px 78px;

    @media (max-width: 767px) {
        & {
            padding: 14px 46px;
        }
    }
}
</style>

<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import banner from '@/assets/images/banner.png';

const sectionBg: string = `url(${banner})`;
</script>

<template>
<section class="banner">
    <h1 class="banner__title">Полет Илона Маска и DOGIE COIN</h1>
    <p class="banner__description">В прошлый четверг все офигели от полета DOGIE COIN на марс.</p>
    <BaseBtn class="banner__btn">ОСТАВИТЬ ЗАЯВКУ</BaseBtn>
</section>
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

    @media (max-width: 1919px) {
        height: 907px;
        padding: 76px 49px;
    }

    @media (max-width: 1919px) {
        height: 495px;
        padding: 52px 14px;
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
        font-size: 38px;
    }

    @media (max-width: 764px) {
        width: 100%;
        margin-bottom: 20px;
        font-size: 20px;
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

    @media (max-width: 764px) {
        margin-bottom: 20px;
        font-size: 14px;
    }
}

.banner__btn {
    padding: 21px 78px;

    @media (max-width: 764px) {
        padding: 14px 46px;
    }
}
</style>

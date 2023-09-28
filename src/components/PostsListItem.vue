<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import type { Card } from '@/types/response';

interface Props {
    post: Card,
};

const props = defineProps<Props>();

const cardImage: ComputedRef<string> = computed(() => `url(${props.post.image})`);
</script>

<template>
<li class="card">
    <div class="card__img"></div>
    <div class="card__general">
        <p class="card__category">bridge</p>
        <h3 class="card__title">{{ post.title }}</h3>
        <p class="card__description">{{ post.body }}</p>
        <p class="card__info">
            <span class="card__primary">Posted by </span>
            <span class="card__author">{{ post.authorName }}, </span>
            <time class="card__date" datetime="2019-07-24">on July 24, 2019</time>
        </p>
        <RouterLink class="card__btn" to="/#">Continue reading</RouterLink>
    </div>
</li>
</template>

<style scoped lang="scss">
.card {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.card__img {
    width: 100%;
    height: 185px;
    background-image: v-bind(cardImage);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: lightgray;
}

.card__general {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 25px 24px 30px;
    background-color: #ffffff;
}

.card__category {
    margin-bottom: 20px;
    color: #171717;
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.card__title {
    margin-bottom: 20px;
    color: #171717;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}

.card__description {
    margin-bottom: 20px;
    color: #666666;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}

.card__info {
    margin-top: auto;
    margin-bottom: 25px;
    color: #666666;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

.card__author {
    font-weight: 700;
}

.card__btn {
    width: 100%;
    padding: 16px;
    display: inline-block;
    background-color: #171717;
    color: #FFF;
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;

    &:hover {
        background-color: #333333;
    }
}
</style>

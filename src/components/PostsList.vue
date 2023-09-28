<script setup lang="ts">
import { ref, type Ref } from 'vue';
import PostsListItem from '@/components/PostsListItem.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useFetch } from '@/composables/fetch';
import { placeholderUrl } from '@/consts';
import { type Post, type Card, type Photo, type Author } from '@/types/response';
import BaseLoader from './base/BaseLoader.vue';

const imagesUrlObj: {[key: number]: string} = {};
const authorsNameObj: {[key: number]: string} = {};
const limit: number = 5;
const startValue: Ref<number> = ref(0);
const postsList: Ref<Card[]> = ref([]);
const isLoading: Ref<boolean> = ref(false);

const addPosts = async (): Promise<void> => {
    isLoading.value = true;
    const {fetchData} = await useFetch(`${placeholderUrl}/posts?_start=${startValue.value}&_limit=${limit}`) as {fetchData: Ref<Post[] | null>};

    if (fetchData.value) {
        const imageIds: Set<number> = new Set();
        const authorIds: Set<number> = new Set();
            fetchData.value.forEach((post: Post) => {
            imageIds.add(post.id);
            authorIds.add(post.userId);
        });

        let paramsStrForImages: string = '/photos?';
        imageIds.forEach((id: number) => {
            if (!imagesUrlObj[id]) paramsStrForImages += `id=${id}&`
        });

        if (paramsStrForImages !== '/photos?') {
            const {fetchData} = await useFetch(`${placeholderUrl}${paramsStrForImages}`) as {fetchData: Ref<Photo[] | null>};

            if (fetchData.value) {
                fetchData.value.forEach((photo: Photo) => {
                    imagesUrlObj[photo.id] = photo.url;
                });
            }
        }

        let paramsStrForAuthorsName: string = '/users?';
        authorIds.forEach((userId: number) => {
            if (!authorsNameObj[userId]) paramsStrForAuthorsName += `id=${userId}&`
        });

        if (paramsStrForAuthorsName !== '/users?') {
            const {fetchData} = await useFetch(`${placeholderUrl}${paramsStrForAuthorsName}`) as {fetchData: Ref<Author[] | null>};

            if (fetchData.value) {
                fetchData.value.forEach((author: Author) => {
                    authorsNameObj[author.id] = author.name;
                });
            }
        }

        postsList.value.push(...fetchData.value.map((post: Post) => {
            const card: Card = {...post, image: imagesUrlObj[post.id], authorName: authorsNameObj[post.userId]};
            return card
        }));

        startValue.value += limit;
    }

    isLoading.value = false;
};

addPosts();
</script>

<template>
<section class="postsList">
    <h2 class="postsList__title">Карточки</h2>
    <ul class="postsList__list" v-if="postsList">
        <PostsListItem v-for="post of postsList" :key="post.id" :post="post" />
    </ul>
    <BaseLoader class="loader" v-if="isLoading" />
    <BaseBtn class="postsList__btn" v-else-if="postsList.length < 30" @click="addPosts" type="button">ЗАГРУЗИТЬ ЕЩЕ</BaseBtn>
</section>
</template>

<style scoped lang="scss">
.postsList {
    padding: 134px 100px 256px;

    @media (max-width: 1919px) {
        padding: 44px 40px 156px;
    }

    @media (max-width: 764px) {
        padding: 48px 16px 43px;
    }
}

.postsList__title {
    margin-bottom: 53px;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: 1919px) {
        margin-bottom: 40px;
        padding-left: 9px;
    }

    @media (max-width: 764px) {
        margin-bottom: 30px;
        padding-left: 0;
        font-size: 20px;
    }
}

.postsList__list {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;

    @media (max-width: 1919px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 24px;
        column-gap: 20px;
    }

    @media (max-width: 764px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
        margin-bottom: 38px;
    }
}

.loader {
    height: 60px;
    color: #c2ab81;
}

.postsList__btn {
    display: block;
    margin: 0 auto;
    padding: 21px 87px;
}
</style>

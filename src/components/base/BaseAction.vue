<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TheModal from '@/components/TheModal.vue';
import TheForm from '@/components/TheForm.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import IconPhone from '@/components/icons/IconPhone.vue';

const isShowModal: Ref<boolean> = ref(false);
</script>

<template>
<div class="action">
    <a class="action__phone" href="tel:+75555555555">
        <IconPhone />
    </a>
    <BaseBtn class="action__btn" @click="isShowModal = true">ОСТАВИТЬ ЗАЯВКУ</BaseBtn>
    <TheModal v-model:isShowModal="isShowModal">
        <TheForm />
    </TheModal>
</div>
</template>

<style scoped lang="scss">
.action__phone {
    position: relative;
    margin-right: 12px;
    padding: 14px 30px;
    display: inline-block;
    color: #cccccc;
    line-height: 0;
    text-align: center;
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 9px;;
        bottom: 0;
        left: 9px;
        transform: skewX(-17deg);
        background-color: transparent;
        border: 1px solid #cccccc;
        z-index: -1;
        transition: inherit;
    }

    &:hover {
        color: #131313;

        &::before {
            background-color: #cccccc;
        }
    }

    @media (max-width: 1919px) {
        & {
            margin-right: -12px;
        }
    }

    @media (max-width: 767px) {
        & {
            width: 100%;
            margin-right: 0;
            margin-bottom: 6px;
        }
    }
}

.action__btn {
    margin-right: 9px;
    padding: 21px 78px;

    @media (max-width: 1919px) {
        & {
            padding: 21px 38px;
        }
    }

    @media (max-width: 767px) {
        & {
            width: 100%;
        }
    }
}
</style>

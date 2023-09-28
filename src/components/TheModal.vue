<script setup lang="ts">
import IconCrossToClose from '@/components/icons/IconCrossToClose.vue';

interface Props {
    isShowModal: boolean,
};

defineProps<Props>();

defineEmits(['update:isShowModal']);
</script>

<template>
<Teleport to="body">
    <Transition name="modal">
        <div v-if="isShowModal" class="modal__back" id="modal">
            <div class="modal__container">
                <button class="modal__closeBtn" @click="$emit('update:isShowModal', false)">
                    <IconCrossToClose />
                </button>
                <div class="modal__slot">
                    <slot />
                </div>
            </div>
        </div>
    </Transition>
</Teleport>
</template>

<style scoped lang="scss">
.modal-enter-from, 
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal__container,
.modal-leave-to .modal__container {
    transform: scale(1.1);
}

.modal__back {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(80, 80, 80, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    transition: all 0.4s linear;
}

.modal__container {
    position: relative;
    width: 1080px;
    height: 70vh;
    padding: 56px 80px;
    border-radius: 16px;
    background-color: #131313;
    transition: all 0.4s linear;

    @media (max-width: 1919px) {
        width: 720px;
        padding: 48px 40px;
    }

    @media (max-width: 764px) {
        width: 100%;
        height: 100%;
        padding: 0 16px;
    }
}

.modal__closeBtn {
    position: absolute;
    top: 16px;
    right: 16px;
    line-height: 0;
    color: #ffffff;

    & > * {
        transform: rotateY(0);
        transition: all 0.2s linear;
    }

    &:hover > * {
        transform: rotateY(180deg);
    }
}

.modal__slot {
    width: 100%;
    height: 100%;
    overflow: auto;

    @media (max-width: 764px) {
        padding: 24px 0;
    }
}
</style>

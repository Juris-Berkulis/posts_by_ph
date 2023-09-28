<script setup lang="ts">
</script>

<template>
<button class="btn">
    <span class="btn__text">
        <slot>ОСТАВИТЬ ЗАЯВКУ</slot>
    </span>
</button>
</template>

<style scoped lang="scss">
.btn {
    position: relative;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    z-index: 0;

    &:hover {
        color: #cccccc;
    }

    &::before, 
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        transform: skewX(-17deg);
        transition: inherit;
    }

    &::before {
        right: 9px;;
        left: 9px;
        background-color: #c2ab81;
        z-index: -1;
    }

    &::after {
        left: calc(100% - 2px);
        width: 5px;
        background-color: #ffffff;
        cursor: default;
    }

    &:hover::before {
        background-color: #9e8c6b;
    }

    &:hover::after {
        background-color: #cccccc;
    }

    &__text {
        color: #ffffff;
        text-align: right;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }
}
</style>

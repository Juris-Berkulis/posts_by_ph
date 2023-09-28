<script setup lang="ts">
interface Props {
    error: string,
};

defineProps<Props>();
</script>

<template>
<div class="errorText" v-if="error">{{ error }}</div>
</template>

<style scoped lang="scss">
.errorText {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    color: #ff5858;
    font-family: inherit;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}
</style>

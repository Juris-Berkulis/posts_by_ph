<script setup lang="ts">
import { ref, type ComputedRef, type Ref, computed, watch, onBeforeUnmount } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';
import { useValidation } from '@/composables/validation';

const { 
    requiredField, 
    regExpMatching, 
    minLength, 
} = useValidation();

const regExpForEmail = /^[a-z0-9\.\-_]{1,}@[a-z]{2,6}\.[a-z]{2,4}$/;
const minLengthForRemark: number = 5;
const textForRequiredFieldError = 'Поле не заполненно';
const textForRegExpError = 'Неверный формат';
const textForMinLengthError = (minLength: number): string => `Минимальная длина ${minLength} символов`;

const isRequestSent: Ref<boolean> = ref(false);
const timerId: Ref<ReturnType<typeof setTimeout> | undefined> = ref();
const isLoading: Ref<boolean> = ref(false);

const inputedName: Ref<string> = ref('');
const inputedEmail: Ref<string> = ref('');

const errorForInputedName: Ref<string> = ref('');
const errorForInputedEmail: Ref<string> = ref('');

const errorForForm: ComputedRef<boolean> = computed(() => {
    return !!errorForInputedName.value
        || !!errorForInputedEmail.value
});

type Field = 'name' | 'email';

type FieldOptions = { isValid: () => boolean, error: Ref<string>, errorText: string };

type ValidatedObj = {
    [key in Field]: FieldOptions[];
};

const validatedObj: ValidatedObj = {
    name: [
        { isValid: () => requiredField(inputedName.value), error: errorForInputedName, errorText: textForRequiredFieldError },
        { isValid: () => minLength(inputedName.value, minLengthForRemark), error: errorForInputedName, errorText: textForMinLengthError(minLengthForRemark) },
    ],
    email: [
        { isValid: () => requiredField(inputedEmail.value), error: errorForInputedEmail, errorText: textForRequiredFieldError },
        { isValid: () => regExpMatching(inputedEmail.value, regExpForEmail), error: errorForInputedEmail, errorText: textForRegExpError },
    ],
};

const checkField = (field: Field) => {
    for (let i = 0; i < validatedObj[field].length; i++) {
        const fieldOptions: FieldOptions = validatedObj[field][i];

        if (!fieldOptions.isValid()) {
            fieldOptions.error.value = fieldOptions.errorText; return
        }
    }

    validatedObj[field][0].error.value = '';
};

const checkAllFields = (): void => {
    checkField('name');
    checkField('email');
};

watch(inputedName, () => checkField('name'));
watch(inputedEmail, () => checkField('email'));

const resetForm = (): void => {
    inputedName.value = '';
    inputedEmail.value = '';
};

const submit = (): void => {
    checkAllFields();

    if (!errorForForm.value) {
        isLoading.value = true;

        const data = {
            name: inputedName.value,
            email: inputedEmail.value,
        };

        const promise: Promise<unknown> = new Promise((resolve) => {
            timerId.value = setTimeout(() => {
                resolve(data);
                clearTimeout(Number(timerId.value));
            }, 4000);
        });

        promise.then(() => {
            console.log(data);
            resetForm();
            isRequestSent.value = true;
            isLoading.value = false;
        });
    }
};

onBeforeUnmount(() => {
    clearTimeout(Number(timerId.value));
});
</script>

<template>
<h2 class="title">{{isRequestSent ? 'Заявка отправлена' : 'Оставить заявку' }}</h2>
<form class="form" v-if="!isRequestSent" @submit.prevent="submit" method="post">
    <BaseInput class="form__input" v-model:inputedValue="inputedName" :error="errorForInputedName" type="text" placeholder="Имя" />
    <BaseInput class="form__input" v-model:inputedValue="inputedEmail" :error="errorForInputedEmail" type="email" placeholder="Email" />
    <BaseLoader class="loader" v-if="isLoading" />
    <BaseBtn class="form__btn" v-else type="submit">Отправить</BaseBtn>
</form>
</template>

<style scoped lang="scss">
.title {
    margin-bottom: 40px;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
}

.form__input {
    width: 100%;
    margin-bottom: 40px;
}

.loader {
    height: 60px;
    color: #c2ab81;
}

.form__btn {
    display: block;
    margin: 0 auto;
    padding: 21px 78px;
}
</style>

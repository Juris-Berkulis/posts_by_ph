<script setup lang="ts">
import { ref, type Ref } from 'vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import BaseAction from '@/components/base/BaseAction.vue';

const isOpenMobileMenu: Ref<boolean> = ref(false);
</script>

<template>
<header class="header" :class="{open: isOpenMobileMenu}">
    <button class="header__menu" @click="isOpenMobileMenu = !isOpenMobileMenu" type="button">
        <IconMenu />
    </button>
    <RouterLink to="/">
        <IconLogo class="logo" />
    </RouterLink>
    <nav class="nav" :class="{open: isOpenMobileMenu}">
        <ul class="nav__list">
            <li class="nav__route">УСЛУГИ</li>
            <li class="nav__route">АБОНЕМЕНТЫ</li>
            <li class="nav__route">ПОЧЕМУ МЫ</li>
            <li class="nav__route">ОБОРУДОВАНИЕ</li>
            <li class="nav__route">АКЦИИ</li>
            <li class="nav__route">FAQ</li>
            <li class="nav__route">КОНТАКТЫ</li>
        </ul>
        <BaseAction class="header__action__1" />
    </nav>
    <BaseAction class="header__action__2" />
</header>
<div class="header__placeholder"></div>
</template>

<style scoped lang="scss">
.header {
    height: 116px;
    padding: 0 calc((100% - 1720px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #131313;
    z-index: 9;

    @media (max-width: 1919px) {
        & {
            height: 110px;
            padding: 0 calc((100% - 668px) / 2);
        }

        &.open {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
        }
    }

    @media (max-width: 767px) {
        & {
            height: 71px;
            padding: 0 calc((100% - 330px) / 2);
        }
    }
}

.header__menu {
    display: none;

    @media (max-width: 1919px) {
        & {
            display: block;
            color: #ffffff;
        }
    }
}

.logo {
    width: 157px;
    height: 60px;

    @media (max-width: 767px) {
        width: 112px;
        height: 38px;
    }
}

.nav {
    margin-right: auto;
    margin-left: 76px;

    @media (max-width: 1919px) {
        & {
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            height: calc(100vh - 110px);
            transform: translateX(-100%);
            margin-right: 0;
            margin-left: 0;
            padding: 59px calc((100% - 668px) / 2);
            display: flex;
            flex-direction: column;
            background-color: #131313;
            transition: transform 0.4s linear;
            z-index: 1;

            &.open {
                transform: translateX(0);
            }
        }
    }

    @media (max-width: 767px) {
        & {
            height: calc(100vh - 71px);
            padding: 0 calc((100% - 330px) / 2) 21px;
        }
    }
}

.nav__list {
    display: flex;
    gap: 42px;

    @media (max-width: 1919px) {
        & {
            flex-direction: column;
            gap: 15px;
            overflow: auto;
        }
    }

    @media (max-width: 1919px) {
        & {
            margin-bottom: 51px;
        }
    }
}

.nav__route {
    color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    @media (max-width: 1919px) {
        & {
            font-size: 36px;
        }
    }

    @media (max-width: 767px) {
        & {
            font-size: 20px;
        }
    }
}

.header__action__1 {
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
}

.header__action__2 {
    display: flex;

    @media (max-width: 767px) {
        & {
            display: none;
        }
    }
}

.header__placeholder {
    height: 0;
}

.header.open + .header__placeholder {
    @media (max-width: 1919px) {
        & {
            height: 110px;
        }
    }

    @media (max-width: 767px) {
        & {
            height: 71px;
        }
    }
}

.header :global(button::after) {
    @media (max-width: 767px) {
        & {
            display: none;
        }
    }
}
</style>

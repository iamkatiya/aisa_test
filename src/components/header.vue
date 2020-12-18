<template>
    <header class="header">
        <div class="container">
            <div class="header__logo logotype">
                <img src="../assets/logo.svg">
                <h1>Wonder site</h1>
            </div>
            <div class="header__nav">
                <a href="#">Главная</a>
                <a href="/about">О компании</a>
                <a href="/services">Услуги</a>
                <a href="#">Цены</a>
                <a href="/reviews">Отзывы</a>
            </div>
            <div
                class="header__burger"
                @click="showBurgerMenu"
            >
                <img src="../assets/burger.svg">
            </div>
        </div>
        <transition name="modal-fade">
            <div
                v-if="burgerMenu"
                class="header-nav__mobile"
            >
                <div class="container">
                    <a href="#">Главная</a>
                    <a href="#">О компании</a>
                    <a href="#">Услуги</a>
                    <a href="#">Цены</a>
                    <a href="#">Отзывы</a>
                </div>
            </div>
        </transition>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        burgerMenu: false
      }
    },
    methods: {
      showBurgerMenu () {
        this.burgerMenu =! this.burgerMenu
      }
    }
  }
</script>

<style>
    .header {
        background-color: #5b7a97;
        padding: 20px 0;
        position: relative;
    }
    .header__nav {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 300px;
        justify-content: space-between;
    }
    .header__nav a {
        font-family: 'montserratligth', sans-serif;
        color: white;
        text-decoration: none;
        font-size: 18px;
        overflow: hidden;
        position: relative;
    }
    .header__nav a::before {
        content: '';
        position: absolute;
        transition: 0.3s;
        left: -100%;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(249, 249, 249, 0.76);
    }
    .header__nav a:hover::before {
        left: 0;
    }
    .header__burger {
        width: 40px;
    }
    .header__burger img {
        width: 100%;
        filter: invert(1);
    }
    @media (max-width: 1500px) {
        .header__nav {
            margin-left: 100px;
        }
    }
    @media (min-width: 951px) {
        .header__burger {
            display: none;
        }
        .header-nav__mobile {
            display: none;
        }
    }
    @media (max-width: 950px) {
        .header__nav {
            display: none;
        }
        .header .container {
            justify-content: space-between;
            align-items: center;
        }
        .header-nav__mobile {
            position: absolute;
            background-color: white;
            padding: 20px 0 0;
            width: 100%;
            top: 100%;
            left: 0;
            z-index: 2;
            text-align: center;
        }
        .header-nav__mobile .container {
            flex-wrap: wrap;
        }
        .header-nav__mobile a {
            font-family: 'montserratligth', sans-serif;
            color: #2c3e50;
            text-decoration: none;
            font-size: 18px;
            overflow: hidden;
            position: relative;
            flex: 100%;
            width: 100%;
            margin-bottom: 20px;
        }
    }
</style>

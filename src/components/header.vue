<template>
    <header class="header">
        <div class="container">
            <div class="header__logo logotype">
                <img src="@/assets/logo.svg">
                <h1>Wonder site</h1>
            </div>
            <div class="header__nav">
                <router-link :to="'#'">Главная</router-link>
                <router-link :to="'/about'">О компании</router-link>
                <router-link :to="'/services'">Услуги</router-link>
                <router-link :to="'#'">Цены</router-link>
                <router-link :to="'/reviews'">Отзывы</router-link>
            </div>
            <div
                class="header__burger"
                @click="burgerMenu =! burgerMenu"
            >
                <img src="@/assets/burger.svg">
            </div>
        </div>
        <transition name="modal-fade">
            <div
                v-if="burgerMenu"
                class="header-nav__mobile"
            >
                <div class="container">
                    <router-link :to="'#'">Главная</router-link>
                    <router-link :to="'/about'">О компании</router-link>
                    <router-link :to="'/services'">Услуги</router-link>
                    <router-link :to="'#'">Цены</router-link>
                    <router-link :to="'/reviews'">Отзывы</router-link>
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
    }
  }
</script>

<style lang="scss">
    .header {
        background-color: #5b7a97;
        padding: 20px 0;
        position: relative;
        &__nav {
             display: flex;
             align-items: center;
             width: 100%;
             margin-left: 300px;
             justify-content: space-between;
            a {
                font-family: 'montserratligth', sans-serif;
                color: white;
                text-decoration: none;
                font-size: 1.3em;
                overflow: hidden;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    transition: 0.3s;
                    left: -100%;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background-color: rgba(249, 249, 249, 0.76);
                }
                &:hover::before {
                    left: 0;
                }
            }
         }
        &__burger {
            width: 40px;
            img {
                width: 100%;
                filter: invert(1);
            }
        }
    }
    @media (max-width: 1500px) {
        .header__nav {
            margin-left: 100px;
        }
    }
    @media (min-width: 992px) {
        .header__burger {
            display: none;
        }
        .header-nav__mobile {
            display: none;
        }
    }
    @media (max-width: 991px) {
        .header {
            .container {
                justify-content: space-between;
                align-items: center;
            }
            &__nav {
                display: none;
            }
        }
        .header-nav {
            &__mobile {
                position: absolute;
                background-color: white;
                padding: 20px 0 0;
                width: 100%;
                top: 100%;
                left: 0;
                z-index: 2;
                text-align: center;
                .container {
                    flex-wrap: wrap;
                }
                a {
                    font-family: 'montserratligth', sans-serif;
                    color: #2c3e50;
                    text-decoration: none;
                    font-size: 1.2em;
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>

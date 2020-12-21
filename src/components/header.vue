<template>
  <header class="header">
    <div class="container">
      <div class="header__logo logotype">
        <img src="@/assets/logo.svg">
        <h1>Wonder site</h1>
      </div>
      <div class="header__nav">
        <router-link :to="'#'">
          Главная
        </router-link>
        <router-link :to="'/about'">
          О компании
        </router-link>
        <router-link :to="'/services'">
          Услуги
        </router-link>
        <router-link :to="'#'">
          Цены
        </router-link>
        <router-link :to="'/reviews'">
          Отзывы
        </router-link>
      </div>
      <div
        class="header__burger"
        @click="burgerMenu =! burgerMenu"
      >
        <img src="@/assets/burger.svg">
      </div>
      <div
        class="header__button"
        @click="feedback = true"
      >
        Связаться
      </div>
    </div>
    <transition name="modal-fade">
      <div
        v-if="burgerMenu"
        class="header-nav__mobile"
      >
        <div class="container">
          <router-link :to="'#'">
            Главная
          </router-link>
          <router-link :to="'/about'">
            О компании
          </router-link>
          <router-link :to="'/services'">
            Услуги
          </router-link>
          <router-link :to="'#'">
            Цены
          </router-link>
          <router-link :to="'/reviews'">
            Отзывы
          </router-link>
          <router-link
            class="feedback-form__appeals"
            :to="'/appeals'"
          >
            Посмотреть все обращения!
          </router-link>
        </div>
      </div>
    </transition>
    <transition name="modal-fade">
      <div
        v-if="feedback"
        class="feedback-form"
      >
        <form
          class="feedback-form__window"
          @submit.prevent="sendHandling"
        >
          <div class="feedback-form__title">
            Обратная связь
          </div>
          <div class="feedback-form__item">
            <input
              v-model="handling.name"
              v-model.trim="$v.handling.name.$model"
              type="text"
              placeholder="Ваше имя"
            >
          </div>
          <div class="feedback-form__item">
            <input
              v-model="handling.text"
              v-model.trim="$v.handling.text.$model"
              type="text"
              placeholder="Тема обращения"
            >
          </div>
          <div class="feedback-form__item">
            <input
              v-model="handling.email"
              type="email"
              placeholder="Электронная почта"
            >
          </div>
          <div class="feedback-form__item">
            <input
              v-model="handling.phone"
              v-model.trim="$v.handling.phone.$model"
              type="tel"
              placeholder="Мобильный телефон"
            >
          </div>
          <div
            v-if="errorMsg"
            class="feedback-form__error"
          >
            Поля "Ваше имя", "Тема обращения" и "Телефон" обязательны для заполнения
          </div>
          <div class="feedback-form__item feedback-form__file">
            <input
              ref="file"
              type="file"
              @change="signalChange"
            >
          </div>
          <div class="feedback-form__radiobuttons checkboxes">
            <div class="checkboxes__head">
              Способ получения ответа
            </div>
            <div class="checkboxes__item">
              <input
                id="checkbox--1"
                v-model="handling.communication"
                class="custom-checkbox"
                type="checkbox"
                name="checkbox"
                value="Телефон"
              >
              <label for="checkbox--1">Телефон</label>
            </div>
            <div class="checkboxes__item">
              <input
                id="checkbox--2"
                v-model="handling.communication"
                class="custom-checkbox"
                type="checkbox"
                name="checkbox"
                value="Почта"
              >
              <label for="checkbox--2">Почта</label>
            </div>
            <div class="checkboxes__item">
              <input
                id="checkbox--3"
                v-model="handling.communication"
                class="custom-checkbox"
                type="checkbox"
                name="checkbox"
                value="Ответ не требуется"
              >
              <label for="checkbox--3">Ответ не требуется</label>
            </div>
          </div>
          <button
            type="submit"
            class="feedback-form__btn about-content__btn"
          >
            Отправить обращение
          </button>
          <router-link
            class="feedback-form__appeals"
            :to="'/appeals'"
          >
            Посмотреть все обращения!
          </router-link>
          <div
            class="modal-content__close"
            @click="feedback = false"
          >
            <img
              class="modal-content__close"
              src="@/assets/close.svg"
            >
          </div>
        </form>
      </div>
    </transition>
  </header>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        feedback: false,
        burgerMenu: false,
        errorMsg: false,
        handling: {
          name: '',
          text: '',
          email: '',
          phone: '',
          file: '',
          communication: []
        },
      }
    },
    validations: {
      handling: {
        name: {
          required
        },
        text: {
          required
        },
        phone: {
          required
        }
      }
    },
    methods: {
      sendHandling () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.errorMsg = true
          setTimeout(()=>{
            this.errorMsg = false
          }, 1000)
        } else {
          this.feedback = false
          this.$store.commit('newFormResult', this.handling)
          this.handling = {}
        }
      },
      signalChange (evt) {
        this.handling.file = this.$refs.file.files[0]
      },
    }
  }
</script>

<style lang="scss">
    .header {
        background-color: #5b7a97;
        padding: 20px 0;
        position: relative;
        .container {
            align-items: center;
        }
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
        &__button {
            display: inline-table;
            padding: 15px 25px;
            margin-left: 105px;
            border-radius: 8px;
            font-size: 1.3em;
            background-color: rgba(255, 255, 255, 0.42);
            cursor: pointer;
            transition: 0.3s;
            &:hover {
                background-color: rgba(255, 255, 255, 0.72);
            }
        }
    }
    .feedback-form {
        display: flex;
        z-index: 2;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        &__window {
            display: block;
            position: relative;
            flex-wrap: wrap;
            z-index: 1;
            padding: 60px;
            width: 45%;
            height: auto;
            background: #fff;
            margin: 1rem auto;
            border-radius: .3rem;
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .2);
            box-sizing: border-box;
        }
        &__title {
            font-size: 3em;
            text-align: center;
        }
        &__item {
            margin-top: 40px;
            input {
                box-sizing: border-box;
                width: 100%;
                padding: 15px 20px;
                font-size: 1.2em;
                border: 1px solid rgba(159, 159, 159, 0.6);
                border-radius: 6px;
                outline: none;
            }
        }
        &__file {
            input {
                padding: 0;
                border: none;
            }
        }
        &__radiobuttons {
            margin-top: 40px;
        }
        &-content__close {
            position: absolute;
            cursor: pointer;
            width: 35px;
            right: 10px;
            top: 10px
        }
        &__error {
          margin-top: 15px;
          color: #b20000;
        }
        &__appeals {
          display: block;
          margin: 30px auto 0;
          text-align: center;
          font-size: 1.6em;
          text-decoration: none;
        }
    }
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
        transition: 0.3s;
        &+label {
            display: inline-flex;
            align-items: center;
            user-select: none;
            &::before {
                content: '';
                display: inline-block;
                width: 21px;
                height: 21px;
                background: #FFFFFF;
                opacity: 0.8;
                border: 1px solid #D3D3D3;
                box-sizing: border-box;
                border-radius: 5px;
                padding: 4px;
                cursor: pointer;
                margin-right: 15px;
            }
        }
        &:checked+label::before {
            background-color: #6d8fb0;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    .checkboxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &__head {
            width: 100%;
            margin-bottom: 20px;
        }
    }
    @media (max-width: 1500px) {
        .header__nav {
            margin-left: 40px;
        }
        .header {
          &__button {
            padding: 10px;
            margin-left: 40px;
            border-radius: 5px;
            font-size: 1em;
          }
        }
        .feedback-form {
          &__window {
            width: 70%;
          }
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
            &__button {
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
        .feedback-form {
          &__window {
            width: 90%;
            padding: 20px;
          }
          &__title {
            font-size: 2em;
          }
        }
        .checkboxes {
          &__item {
            width: 100%;
            margin-bottom: 15px;
          }
        }
    }
</style>

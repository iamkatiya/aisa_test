<template>
  <transition name="modal-fade">
    <div
      class="feedback-form"
    >
      <form
        v-if="loginForm"
        class="feedback-form__window"
      >
        <div class="feedback-form__title">
          Вход в систему
        </div>
        <div class="feedback-form__item">
          <input
            type="text"
            placeholder="Логин"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <input
            type="password"
            placeholder="Пароль"
            trim
          >
        </div>
        <button
          type="submit"
          class="feedback-form__btn about-content__btn"
        >
          Войти
        </button>
        <div class="feedback-form__need-acc">
          Нужен аккаунт?
          <span
            @click="loginForm = false, registrationForm = true"
          >
            Создайте его здесь
          </span>
        </div>
        <div
          class="modal-content__close"
          @click="closeSignModal"
        >
          <img
            class="modal-content__close"
            src="@/assets/close.svg"
          >
        </div>
      </form>
      <form
        v-else
        class="feedback-form__window"
      >
        <div class="feedback-form__title">
          Регистрация
        </div>
        <div class="feedback-form__item">
          <input
            type="text"
            placeholder="Ваше имя"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <input
            type="text"
            placeholder="Ваша фамилия"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <input
            type="email"
            placeholder="Ваша почта"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <input
            type="password"
            placeholder="Придумайте пароль"
            trim
          >
        </div>
        <button
          type="submit"
          class="feedback-form__btn about-content__btn"
        >
          Зарегистрироваться
        </button>
        <div class="feedback-form__need-acc">
          Уже есть аккаунт?
          <span
            @click="loginForm = true, registrationForm = false"
          >
            Войдите здесь
          </span>
        </div>
        <div
          class="modal-content__close"
          @click="closeSignModal"
        >
          <img
            class="modal-content__close"
            src="@/assets/close.svg"
          >
        </div>
      </form>
    </div>
  </transition>
</template>
<script>
  import {required} from 'vuelidate/lib/validators'

  export default {
    name: 'ModalFeedback',
    data() {
      return {
        loginForm: true,
        registrationForm: false
      }
    },
    validations: {
      handling: {
        login: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      closeSignModal () {
        this.$emit('closeModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
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
            @media (max-height: 1000px) {
                height: 85vh;
                overflow-y: scroll;
            }
        }
        &__need-acc {
            text-align: center;
            margin-top: 30px;
            span {
                color: rgba(0, 0, 217, 0.83);
            }
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
</style>

<template>
  <transition name="modal-fade">
    <div
      v-changeScroll
      class="feedback-form"
    >
      <form
        v-if="loginForm"
        class="feedback-form__window feedback-form__sign"
        method="post"
        action="/login"
      >
        <div class="feedback-form__title sign-form__title">
          Вход в систему
        </div>
        <div class="feedback-form__item">
          <label for="loginInput">
            Логин или email
          </label>
          <input
            id="loginInput"
            v-model="loginData.userLogin"
            type="text"
            placeholder="example@mail.ru"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <label for="passwordInput">
            Пароль
          </label>
          <input
            id="passwordInput"
            v-model="loginData.loginPassword"
            :type="eyeActive ? 'password' : 'text'"
            placeholder="•••••••••"
            trim
          >
          <div
            class="feedback-form__password auth-password"
            @click="eyeActive = !eyeActive"
          >
            <img
              v-if="eyeActive"
              src="@/assets/eye.svg"
            >
            <img
              v-else
              src="@/assets/eye-disable.svg"
            >
          </div>
        </div>
        <div
          v-if="loginError"
          class="feedback-form__error"
        >
          Неверный логин и/или пароль
        </div>
        <button
          type="button"
          class="feedback-form__btn about-content__btn"
          @click="logIn"
        >
          Войти
        </button>
        <div class="feedback-form__need-acc">
          Нужен аккаунт?
          <span
            @click="loginForm = false"
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
      <transition
        v-else-if="successRegistration"
        name="modal-fade">
        <div class="modal">
          <div class="modal__window modal-content">
            <div class="modal-content__text">
              Регистрация прошла успешно! Используйте эти данные для входа на сайт.
            </div>
          </div>
        </div>
      </transition>
      <form
        v-else
        class="feedback-form__window feedback-form__sign"
        method="post"
        action="/register"
      >
        <div class="feedback-form__title">
          Регистрация
        </div>
        <div class="feedback-form__item">
          <label for="loginFirstName">
            Ваше имя
          </label>
          <input
            id="loginFirstName"
            v-model="registerData.userFirstname"
            type="text"
            placeholder="Иван"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <label for="loginLastName">
            Ваша фамилия
          </label>
          <input
            id="loginLastName"
            v-model="registerData.userLastname"
            type="text"
            placeholder="Иванов"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <label for="loginEmail">
            Электронная почта
          </label>
          <input
            id="loginEmail"
            v-model="registerData.userEmail"
            type="email"
            placeholder="example@mail.ru"
            trim
          >
        </div>
        <div class="feedback-form__item create-pass">
          <label for="loginPass">
            Придумайте пароль
          </label>
          <input
            id="loginPass"
            v-model="registerData.userPassword"
            :type="eyeActive ? 'password' : 'text'"
            placeholder="Не менее 6 символов"
            trim
          >
          <div
            class="feedback-form__password"
            @click="eyeActive = !eyeActive"
          >
            <img
              v-if="eyeActive"
              src="@/assets/eye.svg"
            >
            <img
              v-else
              src="@/assets/eye-disable.svg"
            >
          </div>
          <div
            class="feedback-form__generate"
            @click="generatePass"
          >
            Сгенерировать
          </div>
        </div>
        <div
          v-if="registerError"
          class="feedback-form__error"
        >
          Необходимо заполнить все поля!
        </div>
        <button
          type="button"
          class="feedback-form__btn about-content__btn"
          @click="registration"
        >
          Зарегистрироваться
        </button>
        <div class="feedback-form__need-acc">
          Уже есть аккаунт?
          <span
            @click="loginForm = true"
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
import axios from 'axios'

export default {
  name: 'ModalFeedback',
  data () {
    return {
      loginForm: true,
      eyeActive: true,
      loginError: false,
      registerError: false,
      successRegistration: false,
      loginData: [
        {
          userLogin: '',
          loginPassword: ''
        }
      ],
      registerData: [
        {
          userFirstname: '',
          userLastname: '',
          userEmail: '',
          userPassword: ''
        }
      ]
    }
  },
  validations: {
    registerData: {
      userFirstname: {
        required
      },
      userLastname: {
        required
      },
      userEmail: {
        required
      },
      userPassword: {
        required
      },
    }
  },
  methods: {
    closeSignModal () {
      this.$emit('closeModal')
    },
    generatePass () {
      var generator = require('generate-password')
      this.registerData.userPassword = generator.generate({
        length: 10,
        numbers: true
      })
    },
    logIn () {
      let username = this.loginData.userLogin
      let password = this.loginData.loginPassword
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
          username,
          password,
      };
      axios.post('http://localhost:3000/login', axiosConfig)
        .then((response) => {
          if (response.data === 'not found') {
            setTimeout(() => {
              this.loginError = false
            }, 2000)
            this.loginError = true
          } else {
            this.$store.commit('newUserData', response.data)
            this.$router.push('lk')
          }
        })
    },
    registration () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        setTimeout(() => {
          this.registerError = false
        }, 2000)
        this.registerError = true
      } else {
        let userFirstname = this.registerData.userFirstname
        let userLastname = this.registerData.userLastname
        let username = this.registerData.userEmail
        let password = this.registerData.userPassword
        const registerData = {
          headers: {
            'Content-Type': 'application/json',
          },
          userFirstname,
          userLastname,
          username,
          password
        };
        axios.post('http://localhost:3000/register', registerData)
          .then((response) => {
            setTimeout(() => {
              this.successRegistration = false
              this.loginForm = true
            }, 2500)
            this.successRegistration = true
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .create-pass {
    display: flex;
    flex-wrap: wrap;
    input {
      width: 75%;
    }
    label {
      width: 100%;
    }
  }
  .feedback-form {
    &__error {
      color: #b20000;
    }
  }
  .modal {
      display: flex;
      z-index: 1;
      position: fixed;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      top: 0;
      left: 0;
      &__window {
          display: flex;
          position: relative;
          flex-wrap: wrap;
          z-index: 1;
          padding: 1rem;
          width: 300px;
          height: 250px;
          justify-content: center;
          align-items: center;
          background: #fff;
          margin: 1rem auto;
          border-radius: .3rem;
          box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .2);
          box-sizing: border-box;
      }
      &-content__close {
          position: absolute;
          cursor: pointer;
          width: 35px;
          right: 10px;
          top: 10px
      }
  }
  @media (max-width: 1650px) {
    .create-pass {
      input {
        width: 100%;
      }
    }
  }
</style>

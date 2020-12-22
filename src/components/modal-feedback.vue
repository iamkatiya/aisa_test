<template>
  <transition name="modal-fade">
    <div
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
            type="text"
            placeholder="Ваше имя"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <input
            v-model="handling.text"
            type="text"
            placeholder="Тема обращения"
            trim
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
            type="tel"
            placeholder="Мобильный телефон"
            trim
          >
        </div>
        <div
          v-if="errorMsg"
          class="feedback-form__error"
        >
          Поля "Ваше имя", "Тема обращения" и "Телефон" обязательны для заполнения
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
          @click="closeModal"
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
        errorMsg: false,
        handling: {
          name: '',
          text: '',
          email: '',
          phone: '',
          file: '',
          communication: []
        }
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
      closeModal() {
        this.$emit('closeModal');
      },
      sendHandling() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.errorMsg = true
          setTimeout(() => {
            this.errorMsg = false
          }, 1000)
        } else {
          this.$store.commit('newFormResult', this.handling)
          this.handling = {}
          this.handling.communication = []
          this.$emit('closeModal');
          document.body.style.overflow = 'auto'
        }
      },
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
        .feedback-form {
            &__window {
                width: 70%;
            }
        }
    }
    @media (max-width: 991px) {
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
    @media (max-width: 576px) {
      .feedback-form {
        &__window {
          padding: 5px;
        }
        &__title {
          font-size: 1em;
          margin-top: 1em;
        }
      }
      .modal-content__close {
        width: 26px;
        right: 5px;
        top: 4px;
      }
    }
</style>

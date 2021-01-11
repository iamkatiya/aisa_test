<template>
  <div>
    <header-nav />
    <section
      v-if="loginUser"
      class="lk container">
      <h2 class="lk__head">
        Личный кабинет
      </h2>
      <div class="lk__image">
        <img src="https://www.gravatar.com/avatar/ea41702be6bc8aaab3f62a20184b0cc8?size=200&d=https%3A%2F%2Fsalesforce-developer.ru%2Fwp-content%2Fuploads%2Favatars%2Fno-avatar.jpg">
      </div>
      <div class="lk__content">
        <div class="feedback-form__item">
          <label for="lkFirstName">
            Ваше имя
          </label>
          <input
            id="lkFirstName"
            v-model="userFirstName"
            type="text"
            placeholder="Иван"
          >
        </div>
        <div class="feedback-form__item">
          <label for="lkLastName">
            Ваша фамилия
          </label>
          <input
            id="lkLastName"
            v-model="userLastName"
            type="text"
            placeholder="Иванов"
          >
        </div>
      </div>
    </section>
    <div
      v-else
      class="lk container"
    >
      Данная страница недоступна для неавторизованных пользователей :(
    </div>
    <footer-nav />
  </div>
</template>

<script>
  import headerNav from '../components/header.vue'
  import footerNav from '../components/footer.vue'

  export default {
    name: 'About',
    components: {
      headerNav,
      footerNav
    },
    data() {
      return {
        userFirstName: '',
        userLastName: '',
        loginUser: false
      }
    },
    created() {
      console.log(this.$store.state.user.userData)
      if(this.$store.state.user.userData.length !== 0) {
        this.loginUser = true
      }
      this.userFirstName = this.$store.state.user.userData.userFirstname
      this.userLastName = this.$store.state.user.userData.userLastname
    }
  }
</script>

<style lang="scss" scoped>
.lk {
    min-height: 64vh;
    padding: 60px 0;
    flex-wrap: wrap;
    justify-content: center;
    &__head {
        font-size: 3em;
        text-align: center;
        width: 100%;
    }
    &__image {
        margin-right: 40px;
        img {
            border-radius: 50%;
        }
    }
}
.feedback-form {
    &__item {
        margin-top: 0;
        margin-bottom: 30px;
    }
}
</style>

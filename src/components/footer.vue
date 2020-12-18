<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo logotype">
        <img src="../assets/logo.svg">
        <h1>Wonder site</h1>
      </div>
      <div class="footer__nav contacts">
        <div class="contacts__head">
          Наш адрес:
        </div>
        <div class="contacts__info">
          г. Москва, ул. Ижевская, д.38
        </div>
      </div>
      <div class="footer__nav contacts">
        <div class="contacts__head">
          Контакты:
        </div>
        <a
          href="#"
          class="contacts__info"
        >Телефон: +7 (888) 123 45 67</a>
        <a
          href="#"
          class="contacts__info"
        >Telegram: @example</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
    background-color: #2c3e50;
    padding: 30px 0 20px;
    .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
}
.contacts {
   &__head {
       font-size: 1.5em;
       color: white;
       margin-bottom: 16px;
   }
    &__info {
        display: block;
        color: white;
        text-decoration: none;
    }
    a {
        transition: 0.3s;
        margin-bottom: 10px;
        &:hover {
            color: #6d8fb0;
        }
    }
}
@media (max-width: 991px) {
    .footer {
        .container {
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        &__logo {
            width: 100%;
            margin-bottom: 40px;
        }
        &__nav {
            margin-right: 50px;
        }
    }
}
@media (max-width: 768px) {
    .footer {
        &__nav {
            width: 100%;
            margin-bottom: 20px;
        }
    }
}
</style>

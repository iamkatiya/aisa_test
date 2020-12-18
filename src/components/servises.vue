<template>
  <div>
    <section class="services-banner">
      <div class="container">
        <h1 class="services-banner__head">
          Наши услуги
        </h1>
      </div>
    </section>
    <section class="services-list container">
      <div class="services-list__item service">
        <div class="service__image">
          <img src="https://cdn.pixabay.com/photo/2018/12/10/12/55/santa-claus-3866834_1280.png">
        </div>
        <div class="service__text">
          Дед Мороз на ваш праздник
        </div>
        <a
          class="service__more"
          href="#"
        >
          Подробнее
        </a>
      </div>
      <div class="services-list__item service">
        <div class="service__image">
          <img src="https://cdn.pixabay.com/photo/2020/11/16/18/08/snow-maiden-5749876_1280.jpg">
        </div>
        <div class="service__text">
          Дед Мороз и Снегурочка на ваш праздник
        </div>
        <a
          class="service__more"
          href="#"
        >
          Подробнее
        </a>
      </div>
      <div class="services-list__item service">
        <div class="service__image">
          <img src="https://cdn.pixabay.com/photo/2015/09/22/12/21/rudolph-951494_1280.jpg">
        </div>
        <div class="service__text">
          Дед Мороз на ваш праздник
        </div>
        <a
          class="service__more"
          href="#"
        >
          Подробнее
        </a>
      </div>
      <div class="services-list__item service">
        <div class="service__image">
          <img src="https://cdn.pixabay.com/photo/2017/11/24/00/03/christmas-2973900_1280.png">
        </div>
        <div class="service__text">
          Дед Мороз и Снегурочка на ваш праздник
        </div>
        <a
          class="service__more"
          href="#"
        >
          Подробнее
        </a>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
    .services-banner {
        height: 50em;
        padding-top: 10em;
        background-image: url("https://cdn.pixabay.com/photo/2017/12/25/19/27/pendant-3038987_1280.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        &__head {
            font-size: 5em;
            color: white;
            font-weight: 900;
            margin-left: auto;
        }
    }
    .services-list {
        padding: 60px 0;
        flex-wrap: wrap;
        &__item {
            width: calc(50% - 30px);
            padding: 35px;
            margin: 15px;
            box-sizing: border-box;
        }
    }
    .service {
        border: 1px solid rgba(128, 128, 128, 0.53);
        border-radius: 10px;
        &__image {
            width: 100%;
            height: 500px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__text {
            font-size: 2.7em;
            text-align: center;
            margin: 30px 0;
        }
        &__more {
            display: flex;
            justify-content: center;
            margin: 40px auto 0;
            font-size: 1.3em;
            text-decoration: none;
            color: #b70000;
            transition: 0.3s;
            &:hover {
                color: #610000;
            }
        }
    }
</style>

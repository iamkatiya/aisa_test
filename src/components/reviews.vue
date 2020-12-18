<template>
  <div>
    <section class="reviews-banner">
      <div class="container">
        <h1 class="reviews-banner__head">
          Отзывы клиентов
        </h1>
      </div>
    </section>
    <section class="reviews-list container">
      <carousel
        class="reviews-list__carousel"
        :items="3"
        :dots="false"
        :nav="false"
        :autoplay="true"
      >
        <div class="reviews-list__item">
          <div class="reviews-list__item__head">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa-PRmt4Un_Cg7GdusF3SgxyNbk0J0nnaFw&usqp=CAU">
            <p>Иван И.</p>
          </div>
          <div class="reviews-list__item__text">
            Заказали поздравление от Деда Мороза для детей и остались довольны. Обязательно обратимся к вам еще!
          </div>
        </div>
        <div class="reviews-list__item">
          <div class="reviews-list__item__head">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa-PRmt4Un_Cg7GdusF3SgxyNbk0J0nnaFw&usqp=CAU">
            <p>Иван И.</p>
          </div>
          <div class="reviews-list__item__text">
            Заказали поздравление от Деда Мороза для детей и остались довольны. Обязательно обратимся к вам еще!
          </div>
        </div>
        <div class="reviews-list__item">
          <div class="reviews-list__item__head">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa-PRmt4Un_Cg7GdusF3SgxyNbk0J0nnaFw&usqp=CAU">
            <p>Иван И.</p>
          </div>
          <div class="reviews-list__item__text">
            Заказали поздравление от Деда Мороза для детей и остались довольны. Обязательно обратимся к вам еще!
          </div>
        </div>
        <div class="reviews-list__item">
          <div class="reviews-list__item__head">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa-PRmt4Un_Cg7GdusF3SgxyNbk0J0nnaFw&usqp=CAU">
            <p>Иван И.</p>
          </div>
          <div class="reviews-list__item__text">
            Заказали поздравление от Деда Мороза для детей и остались довольны. Обязательно обратимся к вам еще!
          </div>
        </div>
      </carousel>
    </section>
  </div>
</template>

<style lang="scss">
    .reviews-banner {
        height: 50em;
        padding-top: 10em;
        background-image: url("https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_1280.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        &__head {
            font-size: 5em;
            color: white;
            font-weight: 900;
        }
    }
    .reviews-list {
        overflow-x: hidden;
        margin-top: 40px;
        margin-bottom: 40px;
        &__item {
            padding: 30px;
            &__head {
                display: flex;
                align-items: center;
            }
            &__text {
                padding-top: 20px;
            }
        }
    }
    .reviews-list__carousel .owl-carousel .reviews-list__item__head img {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        margin-right: 20px;
    }

</style>

<script>
import carousel from 'vue-owl-carousel2';

export default {
  components: {
    carousel
  }
}
</script>

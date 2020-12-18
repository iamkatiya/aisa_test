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
                <a class="service__more" href="#">
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
                <a class="service__more" href="#">
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
                <a class="service__more" href="#">
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
                <a class="service__more" href="#">
                    Подробнее
                </a>
            </div>
        </section>
    </div>
</template>

<style>
    .services-banner {
        padding: 320px 0;
        background-image: url("https://cdn.pixabay.com/photo/2017/12/25/19/27/pendant-3038987_1280.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .services-banner__head {
        font-size: 80px;
        color: white;
        font-weight: 900;
    }
    .services-list {
        padding: 60px 0;
        flex-wrap: wrap;
    }
    .services-list__item {
        flex: calc(50% - 30px);
        width: calc(50% - 30px);
        padding: 35px;
        margin: 15px;
        box-sizing: border-box;
    }
    .service {
        border: 1px solid rgba(128, 128, 128, 0.53);
        border-radius: 10px;
    }
    .service__image {
        width: 100%;
        height: 500px;
    }
    .service__image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .service__text {
        font-size: 40px;
        text-align: center;
        margin: 30px 0;
    }
    .service__more {
        display: flex;
        justify-content: center;
        margin: 40px auto 0;
        font-size: 23px;
        text-decoration: none;
        color: #b70000;
        transition: 0.3s;
    }
    .service__more:hover {
        color: #610000;
    }
</style>

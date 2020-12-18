<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

  @font-face {
    font-family: "Oleo";
    src: url("./fonts/Oleoscript.ttf") format("truetype");
  }
  @font-face {
    font-family: "montserratligth";
    src: url("./fonts/montserratligth.ttf") format("truetype");
  }
  #app {
    font-family: "montserratligth", sans-serif;
  }
  body {
    margin: 0;
  }
  p {
    margin-top: 0;
  }
  .container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  .logotype {
    font-family: 'Oleo', sans-serif;
    color: white;
    display: flex;
    white-space: nowrap;
    align-items: center;
  }
  .logotype img {
    width: 60px;
    margin-right: 15px;
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  @media (max-width: 1500px) {
    .container {
      max-width: 900px;
    }
  }
  @media (max-width: 950px) {
    .container {
      max-width: 100%;
      padding-left: 15px;
      padding-right: 15px;
    }
    .header__logo img {
      width: 45px;
      font-size: 20px;
    }
    .header__logo h1 {
      font-size: 20px;
    }
  }

</style>

<template>
  <div>
    <header-nav />
    <div class="holidays container">
      <h2 class="holidays__head">
        Список праздников
      </h2>
      <div
        v-for="(item, itemIndex) in holidays"
        :key="itemIndex"
        class="holidays__item"
      >
        <div class="holidays__name holidays__text">
          {{ item.holidayName }}
        </div>
        <div class="holidays__text">
          {{ item.about }}
        </div>
        <div class="holidays__text">
          <p>Дата проведения: </p>
          {{ item.date }}
        </div>
      </div>
    </div>
    <footer-nav />
  </div>
</template>

<script>
  import headerNav from '../components/header.vue'
  import footerNav from '../components/footer.vue'

  export default {
    name: 'App',
    components: {
      headerNav,
      footerNav
    },
    data() {
      return {
        holidays: [],
      }
    },
    mounted() {
      this.$store.dispatch('getJson')
      this.holidays = this.$store.state.holidays.jsonData
    }
  }
</script>

<style lang="scss" scoped>
.holidays {
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
  &__item {
    background-color: #6d8fb0;
    width: 100%;
    padding: 25px 100px 25px 25px;
    color: white;
    box-shadow: 0 4px 13px 0 rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    margin-bottom: 30px;
    font-size: 1.6em;
    background-size: 96px;
    background-repeat: no-repeat;
    background-position-x: right;
    background-image: url("../assets/snow.svg");
  }
  &__head {
    margin-bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 3em;
    color: #2c3e50;
    text-shadow: 1px 1px 2px rgba(109, 143, 176, 0.89), 0 0 1em rgba(91, 122, 151, 0.27);
  }
  &__text {
    display: flex;
    margin-bottom: 20px;
    p {
      padding-right: 10px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__name {
    font-family: "Oleo", sans-serif;
    font-size: 2.7em;
  }
}
</style>

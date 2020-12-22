<template>
  <div>
    <header-nav />
    <div class="holidays container">
      <h2 class="holidays__head">
        Список праздников
      </h2>
      <div class="holidays__filters filter">
        <div class="filter__head">
          Фильтр праздников:
        </div>
        <div class="filter__item">
          <p>по названию</p>
          <input
            v-model="filterValue"
            @keyup="filter"
          >
        </div>
        <div class="filter__item">
          <p>по дате</p>
          <date-picker
            v-model="filterDate"
            value-type="format"
            @change="filter"
          />
        </div>
      </div>
      <div class="holidays__filters sort">
        <div class="sort__head">
          Сортировка праздников:
        </div>
        <div
          class="sort__item"
          @click="upSort"
        >
          По дате
          <img src="@/assets/arrow-up.svg">
        </div>
        <div
          class="sort__item"
          @click="downSort"
        >
          По дате
          <img
            class="revert-arrow"
            src="@/assets/arrow-up.svg"
          >
        </div>
      </div>
      <div class="holidays__wrap">
        <div
          v-if="isEmptyResults"
          class="holidays__empty"
        >
          К сожалению, по вашему запросу ничего не найдено
        </div>
        <div
          v-for="(item, itemIndex) in filteredArr"
          v-else
          :key="itemIndex"
          class="holidays__item"
        >
          <div class="holidays__name holidays__text">
            {{ item.holidayName }}
          </div>
          <div class="holidays__text">
            {{ item.about }}
          </div>
          <div class="holidays__text holidays__date">
            Дата проведения:
            {{ item.date.toString() }}
          </div>
        </div>
      </div>
    </div>
    <footer-nav />
  </div>
</template>

<script>
import headerNav from '../components/header.vue'
import footerNav from '../components/footer.vue'
import DatePicker from 'vue2-datepicker';

export default {
  name: 'Holidays',
  components: {
    headerNav,
    footerNav,
    DatePicker
  },
  data() {
    return {
      holidays: [],
      filterValue: '',
      filterDate: null,
      filteredArr: [],
      date: '2019-10-09'
    }
  },
  computed: {
    isEmptyResults: function () {
      return this.filteredArr.length === 0
    }
  },
  mounted() {
    this.$store.dispatch('getJson')
    this.holidays = this.$store.state.holidays.jsonData
    this.filteredArr = this.holidays
  },
  methods: {
    filter() {
      this.filteredArr = this.holidays
      if (this.filterValue !== '') {
        this.filteredArr = this.filteredArr.filter(item =>
          item.holidayName.toUpperCase().includes(this.filterValue.toUpperCase())
        )
      }
      if (this.filterDate !== null) {
        this.filteredArr = this.filteredArr.filter(item => {
          return Date.parse(item.date) === Date.parse(this.filterDate)
        })
      }
    },
    upSort() {
      function compare(a, b) {
        if (a.date < b.date) return -1
        if (a.date > b.date) return 1
        return 0
      }
      return this.filteredArr.sort(compare)
    },
    downSort() {
      function compare(a, b) {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      }
      return this.filteredArr.sort(compare)
    },
  },
}
</script>

<style lang="scss">
@import '../../node_modules/vue2-datepicker/index.css';
.holidays {
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    min-height: 70vh;
  }
  &__filters {
    width: 35%;
    margin-bottom: 40px;
    padding: 10px;
    input {
      width: 300px;
      padding: 10px;
      border: 1px solid #2c3e50;
      border-radius: 4px;
      outline: none;
      box-sizing: border-box;
    }
  }
  &__item {
    display: flex;
    flex-wrap: wrap;
    background-color: #6d8fb0;
    padding: 25px 100px 25px 25px;
    margin: 10px 10px 30px;
    color: white;
    width: calc(50% - 20px);
    box-sizing: border-box;
    box-shadow: 0 4px 13px 0 rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    font-size: 1.6em;
    background-size: 96px;
    background-repeat: no-repeat;
    background-position-x: right;
    background-image: url('../assets/snow.svg');
  }
  &__head {
    margin-bottom: 60px;
    width: 100%;
    text-align: center;
    font-size: 3em;
    color: #2c3e50;
    text-shadow: 1px 1px 2px rgba(109, 143, 176, 0.89), 0 0 1em rgba(91, 122, 151, 0.27);
  }
  &__text {
    display: flex;
    flex: 100%;
    margin-bottom: 20px;
    p {
      padding-right: 10px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__date {
    margin-top: auto;
  }
  &__name {
    font-family: 'Oleo', sans-serif;
    font-size: 2.7em;
  }
}
.filter {
  &__head {
    font-size: 2em;
  }
  &__item {
    p {
      margin-bottom: 5px;
      margin-top: 15px;
    }
  }
}
.sort {
  &__head {
    font-size: 2em;
    margin-bottom: 15px;
  }
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 8px 0;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1.3em;
    &:hover {
      filter: contrast(0.5);
    }
    img {
      width: 22px;
      height: 22px;
      margin-left: 10px;
    }
  }
}
.revert-arrow {
  transform: rotate(180deg);
}
.mx-datepicker {
  width: 300px;
  input {
    height: 37px;
    padding: 10px;
  }
}
.mx-input {
  height: 37px;
  padding: 10px;
}
@media (max-width: 1500px) {
  .holidays {
    &__item {
      width: 100%;
      margin-right: 0;
    }
  }
}
@media (max-width: 991px) {
  .holidays {
    &__text {
      flex-wrap: wrap;
      p {
        width: 100%;
        margin-bottom: 5px;
      }
    }
    &__name {
      font-size: 1.7em;
    }
    &__item {
      background-size: 50px;
      padding-right: 25px;
    }
    &__head {
      font-size: 2em;
    }
  }
}
</style>

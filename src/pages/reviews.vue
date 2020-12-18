<template>
    <div>
        <header-nav/>
        <reviews/>
        <footer-nav/>
    </div>
</template>

<script>
  import headerNav from '../components/header.vue'
  import footerNav from '../components/footer.vue'
  import reviews from '../components/reviews'

  export default {
    name: 'App',
    components: {
      headerNav,
      footerNav,
      reviews
    }
  }
</script>
